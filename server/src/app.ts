import HospitalRegistration from "./controller/HospitalController"
import UserRegistration from "./controller/UserController"
import userLogin from "./controller/UserSingController"
import userSingValidator from "./validator/UserSingInValidator"
import userLoginValidator from "./validator/UserValidator"

const express = require('express')
const multer = require('multer')
const app = express()
const cors = require('cors')
const path=require('path')

app.use(cors())
app.use(express.json())

const UPLOAD_FOLDER = './uploads';

//define storage
const storage=multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,UPLOAD_FOLDER)
  },
  filename:(req,file,cb)=>{
    //Something File.pdf=>something-file-9459473.pdf
    const fileExt=path.extname(file.originalname)
    const fileName=file.originalname
                    .replace(fileExt,"")
                    .toLowerCase()
                    .split("")
                    .join("-") +"-"+Date.now()
    cb(null,fileName + fileExt)                
  }
})

const upload = multer({
  storage: storage,
  limits: {
     fileSize: 1000000,
  },
  fileFilter:(req,file,cb)=>{
    if(file.fieldname==='avater'){
      if(
        file.mimetype==='image/png'||
        file.mimetype==='image/jpg'||
        file.mimetype==='image/jpeg'
      ){
        cb(null,true)
      }else{
        cb(new Error('Only jpg,jpeg,png format allowed'))
      }
    }else if(file.fieldname==='doc'){
      if(file.mimetype==='application/pdf'){
        cb(null,true)
      }else{
        cb(new Error('Only .pdf fromat allowed'))
      }
    }
  }
})

app.get('/', (req, res) => {
  res.send('Hello Hospital Server')
})
app.get('/register/singin', (req, res) => {
  res.send('get secure register sign')
})
app.get('/register', (req, res) => {
  res.send('get secure register Page ')
  res.redirect('/')
})
app.post("/post", (req, res) => {
  console.log("Connected to React");
  res.redirect('/')
});
app.post("/register", userLoginValidator, UserRegistration, (req, res) => {
  res.send("registered")
})
app.post('/register/singin', userSingValidator, userLogin)

app.post('/hospitalregister',HospitalRegistration, (req, res) => {
  res.send('Hospital Register')
})

app.post('/photo', upload.fields([
  {name:'avater',maxCount:1},
  {name:'doc',maxCount:1}
]), (req, res) => {
  console.log(req.files)
  res.send('uploaded')
})

app.use((err, req, res, next) => {
  if (err) {
    if(err instanceof multer.MulterError){
      res.status(500).send("There was an upload error")
    }else{
      res.status(500).send(err.message)
    }
    } else {
    res.send('success')
  }
})
export default app