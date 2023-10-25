import { FastifyInstance } from "fastify";
import { object, z } from "zod";
import { knex } from "../database";
import { randomUUID } from "crypto";

export async function solarTrackerLogsRoutes(app: FastifyInstance) {
  app.post("/", async (request, reply) => {
    const solarTrakcerLogsSchema = object({
      logs: z
        .object({
          register_time: z.string().datetime(),
          current: z.number(),
          power: z.number(),
        })
        .array(),
    });

    const { logs } = solarTrakcerLogsSchema.parse(request.body);

    for (const log of logs) {
      await knex("tb_solar_tracker_log").insert({
        id: randomUUID(),
        register_time: log.register_time,
        current: log.current,
        power: log.power,
      });
    }

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
