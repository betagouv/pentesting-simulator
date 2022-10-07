import { Client } from 'pg'
import { config } from '../config'

const client = new Client({
  user: config.DB_USERNAME,
  host: config.DB_HOST,
  database: config.DB_NAME,
  password: config.DB_PASSWORD,
  port: config.DB_PORT
})

export { client }
