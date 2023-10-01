import express from "express";
import 'reflect-metadata'
import routes from "./routes";
import { AppDataSource } from "./app/database/connect";

const app = express()

app.use(express.json())

app.use(routes)


AppDataSource.initialize().then(async () => {
    console.log('Database OK')
    app.listen(3333, () => {
        console.log('Server start on port 3333')
    })
}) 
