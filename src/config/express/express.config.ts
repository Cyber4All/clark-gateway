import cors from "cors";
import cookieParser from "cookie-parser";
import exp from "express";
import morgan from "morgan";
import { formatMorganJson, httpRequestFilter } from "../logging/logging.driver";
import { ClarkRouteHandler } from "../../modules/clark/clark.router";
import { ErrorParser } from "../../middlewares/error-parser";
import { JwtDriver } from "../jwt/jwt.driver";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const version = require("../../../package.json").version;

export class ExpressConfig {
    private static app = exp();

    /**
     * Builds the Express App
     * @returns The express App
     */
    public static build(): any {
        return this.buildDriver();
    }

    /**
     * Adds all the middleware and routehandlers to the express api
     * @returns The Express App
     */
    private static buildDriver() {
        this.app.use(exp.json());
        this.app.use(cors({ origin: true, credentials: true }));
        this.app.set("trust proxy", true);
        this.app.use(cookieParser());

        this.app.use(
            morgan(formatMorganJson, {
                stream: { write: (message: any) => httpRequestFilter(message) },
            }),
        );

        this.initServerHome();

        // Route Handlers Here
        this.app.use(ClarkRouteHandler.build());

        this.app.use(ErrorParser);

        return this.app;
    }

    /**
     * Initializes the route '/' with a welcome message
     */
    private static initServerHome() {
        this.app.get("/", async (req: exp.Request, res: exp.Response) => {
            const token = await JwtDriver.generateBearerToken({
                userId: "123456",
                username: "john_doe",
                name: "John Doe",
                email: "john.doe@example.com",
                organization: "Example Organization",
                emailVerified: true,
                accessGroups: ["group1", "group2"]
            });
            res.json({
                message: `Welcome to the Competency Gateway Version: ${version} ${token}`,
            });
        });
    }
}
