import { Button, TextField } from '@mui/material'
import React from 'react'
import '../pages/Signin.css'
import { useNavigate } from 'react-router-dom'

const Signin = () => {

    const navigate=useNavigate()

    const handleLogin=()=>{
        navigate('/auth')
    }

    return (
        <div className='body'>
            <h3>Sign In</h3>
            <div>
                <TextField
                name='email'
                
                margin='normal'
                variant='outlined'
                label='Enter Your Email'
                id='email'
                autoComplete='email'
                required 
                
                />
            </div>
            <div>
                <TextField
                margin='normal'
                variant='outlined'
                name='password'
                
                label='password'
                type='password'
                id='password'
                autoComplete='current-password'
                required 
                
                />
            </div>  
            <Button variant='contained' onClick={handleLogin}>Login</Button>  
        </div>
    )
}

export default Signin
