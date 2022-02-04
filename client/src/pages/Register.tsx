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
interface Error{

}
const Register: React.FC = () => {

    const navigate = useNavigate()

    const [admin, setAdmin] = useState<Admin>({
        Name: '',
        Email: '',
        password: ''
    })

    const [data, setData] = useState<Data>()
    const[loading,setLoading]=useState(true)
    const [completing,setCompleting]=useState(false)

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = event.target
        setAdmin({ ...admin, [name]: value })
    }

    useEffect(()=>{
        fetch('http://localhost:3001/register')
        .then(res=>res.json())
        .then(res=>setData(res))
        .catch(error=>console.log(error))
        .finally(()=>setLoading(false))
    },[])

    const handleSubmit = async () => {
        try {
            setCompleting(true)
            const response = await fetch('http://localhost:3001/register', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(admin)
            })
            setCompleting(false)
            const resp = await response.json()
            setData(resp)
            if(resp)
               {
                navigate('/hospitals')
               }else{
                   navigate('/register')
               }
            
        } catch (error) {
            console.log('Please Fill The Input Filed', error)
        }
    }
    return (
        <div className='register'>
            <div>
                {completing && <h2>Completing...</h2>}
            </div>
            <div>
                {loading && <h2>Loading...</h2>}
                {data && <h3>Registration Completed </h3>}
                {data && <h2>User Name: {data.data.User}</h2>}
            </div>
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
                        style={{ margin: "20px" }}
                        type='submit'
                     >Register</Button>
                </div>
            </Box>

        </div>
    )
}

export default Register
