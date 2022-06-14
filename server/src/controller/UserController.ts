import { getCustomRepository, getRepository } from "typeorm";
import { User } from "../entities/User";
const bycript = require('bcrypt')
const createError = require('http-errors')

const UserRegistration = async (req, res, next) => {
    try {
        const newUser = new User();
        const {userRoll,Name,Email,password}=req.body
            newUser.userRoll=userRoll,
            newUser.Name =Name,
            newUser.Email =Email,
            newUser.password = await bycript.hash(password, 10000);
        // const emailUser=await getRepository(User).findOneOrFail({
        //     Email:req.body.Email
        // })

        const savedUser=await getRepository(User).find({
            Email:req.body.Email
        })

        if(savedUser===req.body.Email)
            res.send({
                error:{
                    msg:'Used Email'
                }
            })
        
        const saveUser = await getRepository(User).save(newUser)
        res.status(201).send({
            data: {
                name: saveUser.Name
            }
        });
    } catch (error: any) {
        return next(createError.BadRequest(error.message))
    }
}
export default UserRegistration