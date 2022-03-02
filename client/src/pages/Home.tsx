
import { AppBar, Button, IconButton, MenuItem, Toolbar, Typography } from '@mui/material'
import { textAlign } from '@mui/system'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Home: React.FC = () => {

    const navigate = useNavigate()

    const handleRegister = () => {
        navigate('/register')
    }

    const handleSingin = () => {
        navigate('/signin')
    }
    const goList=()=>{
        navigate('/hospitallist')
    }
    return (
        <>
            <div className='Home'>
                <div className='body'>
                    <Button variant='contained' onClick={handleRegister} style={{ margin: "20px" }} >Create Account</Button>
                    <Button variant='contained' onClick={handleSingin} style={{ margin: "20px" }}>Singin</Button>
                    <Button variant='contained' onClick={goList}>View Hospitals</Button>
                </div>
                
            </div>
        </>
    )
}
