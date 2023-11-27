import { AppDataSource } from "../data-source";
import Product from "../models/Product";

export const productRepository = AppDataSource.getRepository(Product)