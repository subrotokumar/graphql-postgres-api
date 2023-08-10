import { DB as Database } from "./types"; // this is the Database interface we defined earlier
import { Pool } from "pg";
import { Kysely, PostgresDialect } from "kysely";

export const dialect = new PostgresDialect({
  pool: new Pool({
    host: process.env.HOST,
    user: process.env.USER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: Number(process.env.DB_PORT) ?? 5432,
  }),
});

export const db = new Kysely<Database>({
  dialect,
});
