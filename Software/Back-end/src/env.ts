import { config } from "dotenv";
import path from "path";
import { z } from "zod";

if (process.env.NODE_ENV === "test") {
  config({ path: ".env.test" });
} else {
  config({ path: path.resolve(__dirname, ".", ".env") });
}

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("production"),
  DATABASE_URL: z.string(),
  PORT: z.number().default(3333),
});

const _env = envSchema.safeParse(process.env);

if (_env.success === false) {
  console.error("⚠️ Invalid Environment variables! ", _env.error.format());

  throw new Error("Invalid Environment variables!");
}

export const env = _env.data;
