import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("tb_panels", (table) => {
    table.uuid("id").primary();
    table.decimal("angle", 10, 2).defaultTo(0.0).notNullable();
    table.timestamp("updated_at").defaultTo(knex.fn.now()).notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now()).notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("tb_panels");
}
