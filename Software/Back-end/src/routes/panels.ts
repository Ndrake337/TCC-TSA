import { FastifyInstance } from "fastify";
import { knex } from "../database";
import { randomUUID } from "crypto";
import { object, z } from "zod";

export async function panelsRoutes(app: FastifyInstance) {
  app.get("/", async () => {
    const pannels = await knex("tb_panels").select("*");
    return { pannels };
  });

  app.post("/", async (request, reply) => {
    const panelSchema = object({
      name: z.string(),
    });

    const { name } = panelSchema.parse(request.body);

    await knex("tb_panels").insert({
      id: randomUUID(),
      name,
    });

    return reply.status(201).send();
  });

  app.delete("/:id", async (request, reply) => {
    const deletePanelSchema = object({
      id: z.string().uuid(),
    });

    const { id } = deletePanelSchema.parse(request.params);

    await knex("tb_panels").where("id", id).delete();

    return reply.status(200).send();
  });

  app.put("/:id", async (request, reply) => {
    const updatePanelParamsSchema = object({
      id: z.string().uuid(),
    });

    const { id } = updatePanelParamsSchema.parse(request.params);

    const updatePanelBodySchema = object({
      name: z.string(),
    });

    const { name } = updatePanelBodySchema.parse(request.body);

    await knex("tb_panels").where("id", id).update("name", name);

    return reply.status(200).send();
  });
}
