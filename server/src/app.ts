import HospitalRegistration from "./controller/HospitalController"
import UserRegistration from "./controller/UserController"
import userLogin from "./controller/UserSingController"
import userSingValidator from "./validator/UserSingInValidator"
import userLoginValidator from "./validator/UserValidator"

const express = require('express')
const app = express()
const cors=require('cors')

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello Server')
  res.end()
})
app.get('/register/singin',(req,res)=>{
  res.send('get secure register sign')
})
app.get('/register',(req,res)=>{
  res.send('get secure register Page ')
  res.redirect('/')
})
app.post("/post", (req, res) => {
  console.log("Connected to React");
  res.redirect('/')
});
app.post("/register",userLoginValidator,UserRegistration,(req,res)=>{
  res.redirect('/signin')
})
app.post('/register/singin',userSingValidator,userLogin)
app.post('/register/singin/hospitalregister',HospitalRegistration)

export default app