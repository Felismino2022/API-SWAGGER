import {Request, Response} from 'express'
import { AppDataSource } from '../database/connect'
import User from '../models/User'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

class AuthController{

   async authenticate(req:Request, res:Response){
        
    const repository = AppDataSource.getRepository(User)
    const {email, name, password} = req.body

    const user = await repository.findOne({where:{email}})

    if(!user){
        return res.sendStatus(401)
    }

    const isValidPassword = await bcrypt.compare(password, user.password)
    
    if(!isValidPassword){
        return res.sendStatus(401)
    }

    const token = jwt.sign({id: user.id}, "secret", {expiresIn:'1d'});
      

    return res.json({
        user,
        token,
    })
    }

}

export default new AuthController()