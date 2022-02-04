import { Button, TextField } from '@mui/material'
import React ,{useState} from 'react'
import '../pages/Signin.css'
import { useNavigate } from 'react-router-dom'
const createError=require('http-errors')
interface SingInUser{
    Email:string,
    password:string
}

interface Data{
    data:{
        msg:string
    }
}
const Signin:React.FC = () => {

    const navigate=useNavigate()

    const [user,setUser]=useState<SingInUser>({
        Email:'',
        password:''
    })

    const [data,setData]=useState<Data>()

    const handleChange=(event:React.ChangeEvent<HTMLTextAreaElement>)=>{
        try {
            const {name,value}=event.target
            setUser({...user,[name]:value})
        } catch (err:any) {
            console.error('Front end Validaton error',err.message)
        }

    }
    const handleLogin=async()=>{
        try {
            const resData=await fetch('http://localhost:3001/register/singin',{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(user)
            })

            
            const resp=await resData.json()

            setData(resp)

            console.log('this is send and response data',resp)
        } catch (err:any) {
            console.error(err.message)
        }
    };

    return (
        <div className='body'>
            <h3>Sign In</h3>
            <div>
                <TextField
                name='Email'
                value={user.Email}
                margin='normal'
                variant='outlined'
                label='Enter Your Email'
                id='Email'
                autoComplete='email'
                onChange={handleChange}
                required 
                
                />
            </div>
            <div>
                <TextField
                margin='normal'
                variant='outlined'
                name='password'
                value={user.password}
                label='password'
                type='password'
                id='password'
                autoComplete='current-password'
                onChange={handleChange}
                required 
                
                />
            </div>  
            <Button variant='contained' onClick={handleLogin}>Login</Button>  
            <div>
                <p>{data?.data.msg}</p>
            </div>
        </div>
    )
}

export default Signin
