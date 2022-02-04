import { Button, ButtonGroup, List, Stack, TextField } from '@mui/material'
import { display, margin } from '@mui/system'
import React from 'react'
import './Hospitals.css'
import { useNavigate } from 'react-router-dom'

const Hospitals: React.FC = () => {

    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/hospitalregister')
    }
    return (
        <div className='button'>
            <Button onClick={handleClick} variant='contained'>Add Hospital</Button>
            <Button variant='contained' style={{margin:'20px'}}>List Of Hospital</Button>
        </div>
    )
}

export default Hospitals
