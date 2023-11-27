import {Request, Response} from 'express'
import { userRepository } from '../repositories/UserRepositorie'

class UserController{

    async register(req:Request, res:Response){

      const user = {
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
      }

      const newUser = await userRepository.create(user)
      await userRepository.save(newUser)

      if(newUser){
        return res.json({
            message:"Usuario cadastrado com sucesso"
        })
      }
    }

}

export default new UserController()