const Joi = require('joi')

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

const userLoginValidator=async(req,res,next)=>{
    try {
        await schema.validateAsync(req.body)
        return next()
        
    } catch (error) {
        res.send({
           message:error
        })
        return next(error)
    }
}
export default userLoginValidator