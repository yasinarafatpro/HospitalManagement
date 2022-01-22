import { getRepository } from "typeorm";
import { User } from "../entities/User";

const UserRegistration=async(req,res,next)=>{
    const newUser=new User();
    newUser.Name=req.body.Name,
    newUser.Email=req.body.Email,
    newUser.password=req.body.password

    await getRepository(User).save(newUser)
    res.status(201).send();
}
export default UserRegistration