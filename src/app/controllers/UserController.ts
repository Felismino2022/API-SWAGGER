import {Request, Response} from 'express'
import { AppDataSource } from '../database/connect'
import User from '../models/User'

class UserController{

    async test(req:Request, res:Response){
        
        return res.send({'id':req.userId})
    }

   async store(req:Request, res:Response){
        
    const repository = AppDataSource.getRepository(User)
    const {email, password, name} = req.body

    const userExists = await repository.findOne({where:{email}})

    if(userExists){
        return res.sendStatus(409)
    }

    const user = repository.create({email, password, name})
    await repository.save(user)

    return res.json(user)
    
    }

}

export default new UserController()