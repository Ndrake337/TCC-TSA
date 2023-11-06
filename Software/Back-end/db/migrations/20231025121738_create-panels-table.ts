import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("tb_panels", (table) => {
    table.uuid("id").primary();
    table.string("name", 255).notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("tb_panels");
}
