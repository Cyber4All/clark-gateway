# syntax=docker/dockerfile:1

# ----------------------------------------------------------------
# Base Stage
#
# Prepares production layer
# ----------------------------------------------------------------
FROM node:lts-alpine3.23@sha256:7fddd9ddeae8196abf4a3ef2de34e11f7b1a722119f91f28ddf1e99dcafdf114 AS base

WORKDIR /opt/app

RUN apk --no-cache add dumb-init>1.2.5-r2

ENV NODE_ENV=production

COPY package*.json /opt/app/

RUN npm cache clean --force \
    && npm ci --ignore-scripts --omit=dev

# ----------------------------------------------------------------
# Dev Stage
#
# Target for docker-compose development environments
# ----------------------------------------------------------------
FROM base as dev

ENV NODE_ENV=development

COPY nodemon.json tsconfig.json ./

RUN npm i -g nodemon \
    && npm i --ignore-scripts --only=development

HEALTHCHECK --start-period=10s --retries=5 --timeout=10s \
    CMD curl --fail http://localhost:3001 || exit 1  

CMD ["dumb-init", "nodemon"]

# ----------------------------------------------------------------
# Source Stage
#
# Builds the dist directory
# ----------------------------------------------------------------
FROM dev as source

COPY . /opt/app/

RUN npm run build

# ----------------------------------------------------------------
# Prod Stage
#
# Default stage
# ----------------------------------------------------------------
FROM base as prod

LABEL org.opencontainers.image.authors="chirstopher.wagner@secured.team"
LABEL org.opencontainers.image.title="CLARK-Gateway"

COPY --from=source --chown=node:node /opt/app/dist /opt/app/dist

USER node

ENTRYPOINT [ "dumb-init" ]
CMD ["node", "-r", "/opt/app/dist/app.js"]

EXPOSE 3001
