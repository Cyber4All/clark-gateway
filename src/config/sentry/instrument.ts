import * as Sentry from "@sentry/node";
import { nodeProfilingIntegration } from "@sentry/profiling-node";
import "dotenv/config";
import path from "node:path";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const version = require(path.join(process.cwd(), "package.json")).version;

Sentry.init({
    dsn: "https://9099f8e107b7240c4d176708be36212a@o4511711309463552.ingest.us.sentry.io/4511711740362752",
    enabled:
        process.env.NODE_ENV === "staging" ||
        process.env.NODE_ENV === "production",
    environment: process.env.NODE_ENV || "development",
    integrations: [nodeProfilingIntegration()],
    release: `clark-gateway@${version}`,

    // Send structured logs to Sentry
    enableLogs: true,

    // Tracing
    tracesSampleRate: 1.0,

    // Profiling
    profileSessionSampleRate: 1.0,
    profileLifecycle: "trace",
});
