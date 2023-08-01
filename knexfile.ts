import type { Knex } from 'knex';
import * as dotenv from 'dotenv';
dotenv.config();


const config: Knex.Config = {
  client: 'pg',
  connection: `postgres://postgres:${process.env.DATABASE_PASSWORD}@db.opnmfaqtawxohwlnbaok.supabase.co:6543/postgres`,
  migrations: {
    tableName: 'knex_migrations',
    directory: './src/database'
  },
  seeds: {
    directory: './src/seeds'
  }
};

export default config;
