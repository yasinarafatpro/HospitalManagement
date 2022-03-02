import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import '../pages/Signin.css'
import { useNavigate, useParams } from 'react-router-dom'
const createError = require('http-errors')

interface SingInUser {
    Email: string,
    password: string
}

interface Data {
    data: {
        Name: string
    }
}
const Signin: React.FC = () => {
    const { adminName } = useParams()

    const navigate = useNavigate()

    const [user, setUser] = useState<SingInUser>({
        Email: '',
        password: ''
    })

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState<Data>()

    // useEffect(()=>{
    //     fetch('http://localhost:3001/register/singin')
    //     .then(res=>res.json())
    //     .then(res=>setData(res))
    //     .catch(error=>console.log(error))
    //     .finally(()=>setLoading(false))
    // },[])

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        try {
            const { name, value } = event.target
            setUser({ ...user, [name]: value })
        } catch (err: any) {
            console.error('Front end Validaton error', err.message)
        }

    }
    const handleLogin = async () => {
        try {
            const { Email, password } = user;
            if (Email && password) {
                setLoading(true)
                const resData = await fetch('http://localhost:3001/register/singin', {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(user)
                })
                setLoading(false)
                const resp = await resData.json()
                setData(resp)

                console.log('this is send and response data', resp)
            } else {
                alert('Invalid Input')
            }
        } catch (err: any) {
            console.error(err.message)
        }
    };

    return (
        <div className='body'>
            <h3>Sign In</h3>
            <h2>{adminName}</h2>
            <div>
                {loading && <h2>Loading...</h2>}

            </div>
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
        </div>
    )
}

export default Signin
