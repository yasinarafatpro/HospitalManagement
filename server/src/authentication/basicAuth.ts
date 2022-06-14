export const userAuth=(req,res,next)=>{
    if(req.user==null){
        res.status(403)
        return res.send('You need to registered first')
    }
    next()
}
