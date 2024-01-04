/* eslint-disable no-console */
import * as http from "http";
import * as dotenv from "dotenv";
import { ExpressConfig } from "./config/express/express.config";
import { envConfig } from "./config/env/env.driver";
import { logger } from "./config/logging/logging.driver";

dotenv.config();

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
