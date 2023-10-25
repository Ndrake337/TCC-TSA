import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("tb_solar_tracker_log", (table) => {
    table.uuid("id").primary();
    table.timestamp("register_time").notNullable();
    table.decimal("current", 10, 2).notNullable();
    table.decimal("power", 10, 2).notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now()).notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("tb_solar_tracker_log");
}
