const Joi=require('joi')

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
        console.log('Invadid name or password')
        return next(err)
    }
}
export default userSingValidator