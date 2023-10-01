import "reflect-metadata"
import { DataSource } from "typeorm"
import { CreateUserTable1696138537264 } from "./migrations/1696138537264-CreateUserTable"
import User from "../models/User"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "tsauth",
    //synchronize: true,
    logging: true,
    entities: [User],
    subscribers: [],
    migrations: [CreateUserTable1696138537264],
})