import { Router } from "express";
import UserController from "./app/controllers/UserController";
import AuthController from "./app/controllers/AuthController";
import auth from "./app/middlewares/auth";

const routes = Router()

routes.post('/users', UserController.store)
routes.post('/auth', AuthController.authenticate)
routes.get('/users', auth, UserController.test)

export default routes