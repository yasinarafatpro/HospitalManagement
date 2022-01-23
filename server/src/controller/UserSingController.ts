import { getRepository } from "typeorm"
import { User } from "../entities/User"
import bcrypt from 'bcrypt'

const userLogin=async(req,res,next)=>{
    const user=await getRepository(User).findOneOrFail({
        Email:req.body.Email
    })
    const match=await bcrypt.compare(req.body.password,user.password)
    if(!match){
        res.send({
            message:{
                msg:'not matched'
            }
        })
        return next()
    }else{
        res.status(201).send({
            message:{
                msg:'mathed'
            }
        })
    }
}

export default userLogin