
import { Button } from '@mui/material'
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

    return (
        <div className='Home'>
            <header className='header'>
                <div className='bangladesh-logo'>
                    <img alt="logo" src="http://dmc.gov.bd/themes/responsive_npf/img/logo/logo.png" width='5%' />
                </div>
                <div className='bangobondhu'>
                    <img alt='logo' src="https://www.bsmmu.edu.bd/assets/images/mujib_logo.png" width="10%" />
                </div>
                <h3>Welcome to Hospitas Bd</h3>
            </header>

            <body>
                <Button variant='contained' onClick={handleRegister} style={{margin:"20px"}}>Register</Button>
                <Button variant='contained' onClick={handleSingin} style={{margin:"20px"}}>Singin</Button>
            </body>


        </div>
    )
}
