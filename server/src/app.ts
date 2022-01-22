import console from "console"
import UserRegistration from "./controller/UserController"
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
app.get('/register', (req, res) => {
  try {
    console.log('register data here')
    res.send('Data')
    res.end()
  } catch (error) {
    console.log(error)
  }
})
app.post('/register',userLoginValidator,UserRegistration)
export default app