import { fastify } from "fastify";
import { solarTrackerLogsRoutes } from "./routes/solarTrackerLogs";

export const app = fastify();

app.register(solarTrackerLogsRoutes, { prefix: "logs" });

app.listen({ port: 3333 }).then(() => {
  console.log("HTTP Server Running");
});
