import { getRepository } from "typeorm";
import { User } from "../entities/User";
const bycript=require('bcrypt')
const createError=require('http-errors')

const UserRegistration=async(req,res,next)=>{
    try {
    const newUser=new User();
    newUser.Name=req.body.Name,
    newUser.Email=req.body.Email,
    newUser.password=await bycript.hash(req.body.password,10000)

    const saveUser=await getRepository(User).save(newUser)
    res.status(201).send({
       data:{
           User:saveUser.Name
       }
    });
    } catch (error:any) {
        return next(createError.BadRequest(error.message))
        }
    }
export default UserRegistration