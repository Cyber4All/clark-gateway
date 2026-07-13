/* eslint-disable no-console */
import * as http from "node:http";
import { envConfig } from "./config/env/env.driver";
import "./config/sentry/instrument";

import { ExpressConfig } from "./config/express/express.config";
import { logger } from "./config/sentry/logging.driver";

const app = ExpressConfig.build();

const server = http.createServer(app);

// Start the server
server.listen(envConfig.getPort() || 3000, () => {
    logger.info(`Server started on port ${envConfig.getPort() || 3000}`);
});

server.on("listening", async () => {
    try {
        logger.info(`CLARK-Gateway listening on port ${envConfig.getPort()}`);
    } catch (error) {
        logger.error(`Error connecting to mongo: ${error}`);
    }
});
