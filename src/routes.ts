import { Router } from "express";
import AuthController from "./controllers/AuthController";
import auth from "./middlewares/auth";
import ProductController from "./controllers/ProductController";
import UserController from "./controllers/UserController";

const routes = Router()

routes.post('/users/register', UserController.register)
routes.post('/login', AuthController.authenticate)

routes.post('/products/register', ProductController.register)
routes.get('/products/all', auth, ProductController.getAll)
routes.get('/products/:id', ProductController.show_product)
routes.put('/products/:id', ProductController.update)




export default routes