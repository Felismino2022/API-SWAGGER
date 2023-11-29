import express, { response } from "express";
import 'reflect-metadata'
import routes from "./routes";
import { AppDataSource } from "./data-source";
import swaggerUi from 'swagger-ui-express'
import swaggerDocs from './swagger.json'

AppDataSource.initialize().then(async () => {

    const app = express()

    app.use(express.json())

    app.use(routes)

    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

    app.get("/terms", (request, response) => {
        return response.json({
            message:"termos de serviço"
        })
    })

    app.use("/v1", routes)

    app.listen(process.env.PORT, () => {
        console.log(`Servidor rodando na porta ${process.env.PORT}`)
    })

}) 
