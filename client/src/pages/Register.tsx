import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import '../pages/Home.css'
import { useNavigate } from 'react-router-dom'
import '../pages/Register.css'

export interface Admin {
    Name: string,
    Email: string,
    password: string
}

interface Data {
    data: {
        User:string

    }
}
const Register: React.FC = () => {

    const navigate = useNavigate()

    const [admin, setAdmin] = useState<Admin>({
        Name: '',
        Email: '',
        password: ''
    })

    const [data, setData] = useState<Data>()

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = event.target
        setAdmin({ ...admin, [name]: value })
        console.log(admin)
    }

    // useEffect(()=>{

    // },[])

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:3001/register', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(admin)
            })
            const resp = await response.json()
            setData(resp)

        } catch (error) {
            console.log('Please Fill The Input Filed', error)
        }
    }
    console.log(data)
    return (
        <div className='register'>
            <p></p>
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
                </div>
                <p>{`You Are Registered ${data?.data.User}`}</p>
            </Box>

        </div>
    )
}

export default Register
