import { FastifyInstance } from "fastify";
import { knex } from "../database";
import { randomUUID } from "crypto";
export async function panelsRoutes(app: FastifyInstance) {
  app.get("/", async () => {
    return "hello";
  });

  app.post("/", async () => {
    await knex("tb_panels").insert({
      id: randomUUID(),
    });
  });
}
