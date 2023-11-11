import { fastify } from "fastify";
import { solarTrackerLogsRoutes } from "./routes/solarTrackerLogs";
import { panelsRoutes } from "./routes/panels";
import cors from "@fastify/cors";

export const app = fastify();

app.register(cors, {
  origin: "*",
});

app.register(solarTrackerLogsRoutes, { prefix: "logs" });
app.register(panelsRoutes, { prefix: "panels" });
