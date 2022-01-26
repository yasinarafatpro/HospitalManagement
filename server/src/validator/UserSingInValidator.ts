const Joi=require('joi')
const createError=require('http-errors')

const schema=Joi.object({
    Email:Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),

    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
})

const userSingValidator=async(req,res,next)=>{
    try {
        await schema.validateAsync(req.body)
        return next()
    } catch (err:any) {
        return next(new createError.BadRequest(err.message))
    }
}
export default userSingValidator