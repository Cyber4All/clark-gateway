# Anything beyond local dev should pin this to a specific version at https://hub.docker.com/_/node/
FROM node:lts-alpine as builder

RUN mkdir -p /opt/app

# check every 30s to ensure this service returns HTTP 200
# HEALTHCHECK CMD curl -fs http://localhost:$PORT/healthz || exit 1

# install dependencies in a different location for easier app bind mounting for local development
WORKDIR /opt
COPY package.json package-lock.json* tsconfig.json ./
RUN npm install && npm cache clean --force
ENV PATH /opt/node_modules/.bin:$PATH

# copy source code last, since it changes the most often this better utilizes Docker's caching of layers
WORKDIR /opt/app
COPY . /opt/app

# Build source and clean up
RUN npm run build

FROM node:lts-alpine
# Defaults the node environment to production, however compose will override this to use development
# when working locally
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV
# Default to port 80 for node, and 5858 or 9229 for debug
ARG PORT=80
ENV PORT $PORT
EXPOSE $PORT 5858 9229

WORKDIR /opt
COPY --from=builder /opt/ .

# Uninstall dev dependencies for the production image
WORKDIR /opt
RUN npm uninstall dev-dependencies

WORKDIR /opt/app/dist
# Run the container! Using the node command instead of npm allows for better passing of signals
# and graceful shutdown. Further examination would be useful here.
CMD [ "node", "app.js" ] 
