import * as dotenv from 'dotenv'

dotenv.config();

export { config }

const config = {
    DB_HOST: process.env.DB_HOST || "localhost",
    DB_PORT: process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432,
    DB_NAME: process.env.DB_NAME || "postgres",
    DB_USERNAME: process.env.DB_USERNAME || "",
    DB_PASSWORD: process.env.DB_PASSWORD || "",
}