import { FastifyInstance } from "fastify";
import { knex } from "../database";
import { object, z } from "zod";

export async function dashboardRoutes(app: FastifyInstance) {
  app.get("/", async (request, reply) => {
    const dashboardSchema = object({
      dateToFilter: z.string(),
    });

    const { dateToFilter } = dashboardSchema.parse(request.query);

    const logs = await knex("tb_solar_tracker_log")
      .whereRaw("DATE(register_time) = ?", [dateToFilter])
      .select("*");

    return reply.status(200).send({ logs });
  });
}
