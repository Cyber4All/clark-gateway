import * as Sentry from "@sentry/node";
import { nodeProfilingIntegration } from "@sentry/profiling-node";
import "dotenv/config";
import path from "node:path";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const version = require(path.join(process.cwd(), "package.json")).version;

Sentry.init({
    dsn: "https://81f7ee49c07d402a9150991bb7e70d89@o4511711309463552.ingest.us.sentry.io/4511711740362752",
    enabled: process.env.NODE_ENV !== "test",
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
