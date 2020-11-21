import { SequelizeOptions } from 'sequelize-typescript'
import { config } from 'dotenv'

config();

interface AppConfig {
  db: SequelizeOptions
}

const appConfig: AppConfig = {
  db: {
    database: process.env.DB_DATABASE,
    dialect: process.env.DB_DIALECT as any,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
    host: process.env.DB_HOST
  }
}

export default appConfig