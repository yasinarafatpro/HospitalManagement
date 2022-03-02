import { getRepository } from "typeorm";
import { Hospitals } from "../entities/Hospitals"
const bycript=require('bcrypt')

const createError=require('http-errors')


const HospitalRegistration=async(req,res,next)=>{
    try {
        const newHospital=new Hospitals();
        newHospital.HospitalName=req.body.HospitalName,
        newHospital.password=await bycript.hash(req.body.password,10000),
        newHospital.HospitalCode=req.body.HospitalCode,
        newHospital.Helper_text=req.body.Helper_text;

        const saveHospital=await getRepository(Hospitals).save(newHospital)
        res.status(201).send({
            data:{
                Hospital:saveHospital.Helper_text
            }
        })
        
    } catch (error:any) {
        return next(createError.BadRequest(error.message))
    }
}
export default HospitalRegistration