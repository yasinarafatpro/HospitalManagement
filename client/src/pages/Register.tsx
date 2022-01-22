import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import '../pages/Home.css'
import { useNavigate } from 'react-router-dom'
import '../pages/Register.css'

export interface Admin {
    Name: string,
    Email: string,
    password: string
}

const Register: React.FC = () => {

    const navigate = useNavigate()

    const [admin, setAdmin] = useState<Admin>({
        Name: '',
        Email: '',
        password: ''
    })

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = event.target
        setAdmin({ ...admin, [name]: value })
    }

    const handleSubmit = async(e: any) => {
        
        try {
            const response=await fetch('http://localhost:3001/register',{
            method:'POST',
            headers:{"Content-Type" : "application/json"},
            body:JSON.stringify(admin)
        })
        console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='register'>
            <header className='header'>
                <img src="https://www.bsmmu.edu.bd/assets/images/mujib_logo.png" width="10%"></img>
                <h3>Register</h3>
            </header>

            <Box>
                <div>
                    <TextField
                        name='Name'
                        value={admin.Name}
                        variant='outlined'
                        margin='normal'
                        label='Enter Your Name'
                        type='text'
                        autoComplete='name'
                        id='Name'
                        required
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <TextField
                        name='Email'
                        value={admin.Email}
                        margin='normal'
                        variant='outlined'
                        label='Enter Your Email'
                        id='Email'
                        autoComplete='email'
                        required
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <TextField
                        margin='normal'
                        variant='outlined'
                        name='password'
                        value={admin.password}
                        label='password'
                        type='password'
                        id='password'
                        autoComplete='current-password'
                        required
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <Button
                        variant='contained'
                        onClick={handleSubmit}
                        disabled={!admin}
                        style={{ margin: "20px" }}
                        type='submit'
                    >Register</Button>
                    <form action="../../register" method="post"
                        className="form">
                        <button type="submit">Register User?</button>
                    </form>
                </div>
            </Box>

        </div>
    )
}

export default Register
