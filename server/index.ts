require('dotenv').config()
const http=require('http')
import app from './src/app'
import 'reflect-metadata'
import {createConnection} from 'typeorm'
import { User } from './src/entities/User'

const server=http.createServer(app);

(async function(){
    await createConnection({
        type:'postgres',
        host:'localhost',
        port:5432,
        username:'postgres',
        password:'12',
        database:'hospitalsdb',
        entities:[User],
        synchronize:true,
        logging:false
    })
})()

app.listen(3001,()=>{
    console.log('server is listing at port 3001')
})