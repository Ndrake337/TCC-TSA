import { FastifyInstance } from "fastify";
import { z } from "zod";
import { knex } from "../database";
import { randomUUID } from "crypto";

export async function solarTrackerLogsRoutes(app: FastifyInstance) {
  app.post("/", async (request, reply) => {
    const createSolarTrackerLogBodySchema = z.object({
      register_time: z.string().datetime(),
      current: z.number(),
      power: z.number(),
    });

    const { register_time, current, power } =
      createSolarTrackerLogBodySchema.parse(request.body);
    await knex("tb_solar_tracker_log").insert({
      id: randomUUID(),
      register_time,
      current,
      power,
    });

    return reply.status(201).send();
  });

  app.get("/", async () => {
    const logs = await knex("tb_solar_tracker_log").select("*");

    return { logs };
  });

  app.delete("/:id", async (request, reply) => {
    const deleteLogsParamsSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = deleteLogsParamsSchema.parse(request.params);

    await knex("tb_solar_tracker_log").delete("*").where("id", id);

    return reply.status(410).send();
  });
}
