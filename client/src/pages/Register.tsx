import { Button, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import '../pages/Home.css'
import '../pages/Register.css'

export interface Admin {
    Role:string,
    Name: string,
    Email: string,
    password: string
}

interface Data {
    data: {
        name: string | null

    }
}
interface Error {
    error: {
        name: {
            message: string
        }
    }
}
const Register: React.FC = () => {

    

    const [admin, setAdmin] = useState<Admin>({
        Role:'',
        Name: '',
        Email: '',
        password: ''
    })

    const [data, setData] = useState<Data>()
    
    const [error, setError] = useState<Error>()
    const [completing, setCompleting] = useState(false)

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = event.target
        setAdmin({ ...admin, [name]: value })
        event.preventDefault()
    }

    // useEffect(() => {
    //     fetch('http://localhost:3001/register')
    //         .then(res => res.json())
    //         .then(res => setData(res))
    //         .catch(error => console.log(error))
    //     // console.log('useEffect',data)
    // }, [data])

    const handleSubmit = async (e: any) => {
        const {Role, Name, Email, password } = admin
        try {
            if (Role && Name && Email && password) {
                setCompleting(true)
                const response = await fetch('http://localhost:3001/register', {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(admin)
                })
                setCompleting(false)
                const resp = await response.json()
                setData(resp)
                
            } else {
                alert('Invalid Text Field')
            }
        } catch (err: any) {
            setError(error)
            console.log('Input Filed', err)
        }
        
    }
    const Reset=()=>{
        setAdmin({
            Role:'',
            Name: '',
            Email: '',
            password: ''
        })
    }
    console.log(admin)
    return (
        <div className='register'>
            <div>
                {completing && <h2>Completing...</h2>}
            </div>
            <div>{error && <h2>{error.error.name.message}</h2>}</div>
            <div>
                {/* {data && <h3>Registration Completed </h3>} */}
                {data && <h3>{data?.data.name}</h3>}
                {/* {error && <h2>{error.error.name.message}</h2>} */}
            </div>
            <Box>
                <div>
                    <InputLabel>Your Role</InputLabel>
                    <Select
                    labelId='userRole'
                    id='role'
                    label='Role'
                    value={admin.Role}
                    error={true}
                    onChange={(e:SelectChangeEvent)=>handleChange}
                    >
                    <MenuItem value='Admin'>Admin</MenuItem>
                    <MenuItem value='Basic'>Basic</MenuItem>
                    </Select><br/>
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
                        error={true}
                    />
                    {error?.error.name.message}
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
                        error={true}
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
                        error={true}
                    />
                </div>
                <div>
                    <Button variant='contained' onClick={Reset} style={{margin:"10px"}}>Reset</Button>
                    <Button
                        variant='contained'
                        onClick={handleSubmit}
                        style={{ margin: "10px" }}
                        type='submit'
                    >Register</Button>
                </div>
            </Box>

        </div>
    )
}
export default Register
