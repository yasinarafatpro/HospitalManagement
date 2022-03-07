import { getRepository } from "typeorm";
import { Hospitals } from "../entities/Hospitals"

const createError=require('http-errors')


const HospitalRegistration=async(req,res,next)=>{
    try {
        const newHospital=new Hospitals();
        newHospital.name=req.body.name,
        newHospital.code=req.body.code
        
        const saveHospital=await getRepository(Hospitals).save(newHospital)
        // res.send('Registered...')
        // res.status(201).send({
        //     data:{
        //         Hospital:saveHospital.name
        //     }
        // })
        
    } catch (error:any) {
        return next(createError.BadRequest(error.message))
    }
}
export default HospitalRegistration