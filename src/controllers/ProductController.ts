import {Request, Response} from 'express'
import { productRepository } from '../repositories/ProductRepository'

class ProductController{

    async register(req:Request, res:Response){

        const product = {
            name:req.body.name,
            price:req.body.price
          }
    
          const newPrice = await productRepository.create(product)
          await productRepository.save(newPrice)
    
          if(newPrice){
            return res.json({
                message:"Producto cadastrado com sucesso"
            })
          }else{
            return res.status(400).json({
                message:"falha ao cadastrar o producto"
            })
          }
    }

    async show_product(req:Request, res:Response){

        const id = req.params.id

        const product = await productRepository.findOneBy({id:Number(id)})

        if(product){
            return res.json(product)
        }else{
            return res.status(400).json({
                message:"Producto não encontrado"
            })
        }

    }

    async update(req:Request, res:Response){

        const id = req.params.id

        const product = {
            name:req.body.name,
            price: req.body.price
        }

        const response = await productRepository.update({id:Number(id)}, product)

        if(response.affected){
            return res.json({message: "Actualizado com sucesso"})
        }else{
            return res.status(400).json({
                message:"Falha ao actualizar"
            })
        }
    }

    async getAll(req:Request, res:Response){

        const products = await productRepository.find()

        if(products){
            return res.json(products)
        }else{
            return res.status(400).json({
                message:"Falha ao mostrar os productos"
            })
        }
    }

}

export default new ProductController()