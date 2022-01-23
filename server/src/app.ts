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
app.post("/post", (req, res) => {
  console.log("Connected to React");
  res.redirect("/");
});
app.post('/register',userLoginValidator,UserRegistration)
app.post('/register/singin',userSingValidator,userLogin)

export default app