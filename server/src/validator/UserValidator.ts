const Joi = require('joi')
const createError=require('http-errors')

const schema = Joi.object({
    Name: Joi.string()
        .min(3)
        .max(30)
        .required(),

    Email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),

    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

})

const userLoginValidator=async(req:any,res:any,next:any)=>{
    try {
        await schema.validateAsync(req.body)
        return next()
        
    } catch (error:any) {
        res.send(error.message)
        return next(createError.BadRequest(error.message))
}
}
export default userLoginValidator