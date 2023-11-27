import { Response, Request, NextFunction } from "express";
import Jwt from "jsonwebtoken";

interface TokenPayload{
    id:number,
    iat:number,
    exp:number
}

export default function auth(req:Request, res:Response, next:NextFunction){
    
    const {authorization} = req.headers

    if(!authorization){
        return res.sendStatus(401)
    }

    const token = authorization.replace('Bearer', '').trim()

    try{
        const data = Jwt.verify(token, 'secret')

        const {id} = data as TokenPayload

        req.userId = id

        return next()

    }catch{
        return res.sendStatus(401)
    }

}