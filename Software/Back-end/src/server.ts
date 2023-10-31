import { fastify } from "fastify";
import { solarTrackerLogsRoutes } from "./routes/solarTrackerLogs";
import { panelsRoutes } from "./routes/panels";

export const app = fastify();

app.register(solarTrackerLogsRoutes, { prefix: "logs" });
app.register(panelsRoutes, { prefix: "panels" });

app.listen({ port: 3333 }).then(() => {
  console.log("HTTP Server Running");
});
