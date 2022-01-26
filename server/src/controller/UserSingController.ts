import { getRepository } from "typeorm"
import { User } from "../entities/User"
import bcrypt from 'bcrypt'
const createError=require('http-errors')

const userLogin=async(req,res,next)=>{
    try {
        const user=await getRepository(User).findOneOrFail({
            Email:req.body.Email
        })
        const match=await bcrypt.compare(req.body.password,user.password)
        if(!match){
            return next(createError.BadRequest('Wrong Password'))
        }else{
            res.status(201).send({
                user:{
                    Name:user.Name
                }
            })
        }
    } catch (error:any) {
        return next(createError.InternalServerError(error.message))
    }
}

export default userLogin