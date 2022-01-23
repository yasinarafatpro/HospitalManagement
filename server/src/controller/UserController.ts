import { getRepository } from "typeorm";
import { User } from "../entities/User";
const bycript=require('bcrypt')

const UserRegistration=async(req,res,next)=>{
    try {
    const newUser=new User();
    newUser.Name=req.body.Name,
    newUser.Email=req.body.Email,
    newUser.password=await bycript.hash(req.body.password,10000)

    const saveuser=await getRepository(User).save(newUser)
    res.status(201).send({
        message:{
            msg:'Complete'
        },
        data:{
            name:saveuser.Name,
            email:saveuser.Email
        }
    });
    } catch (error) {
        console.log('error....')
    }
}
export default UserRegistration