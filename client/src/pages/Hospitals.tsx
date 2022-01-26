import { Button, ButtonGroup, List, Stack, TextField } from '@mui/material'
import { display, margin } from '@mui/system'
import React from 'react'
import './Hospitals.css'
import {useNavigate}from 'react-router-dom'

const Hospitals:React.FC = () => {

    const navigate=useNavigate()
    const handleClick=()=>{
        navigate('/hospitallist')
    }
    return (
            <div className='button'>
            <ButtonGroup variant='outlined' aria-label="outlined primary button group">
            <Button onClick={handleClick}>Register Hospital</Button>
            <Button >List Of Hospital</Button>
            </ButtonGroup>
            
            <div className='list'>
            <h3>List Of Hospitals</h3>
            <List style={{
                cursor:'pointer',
                borderRadius:'50%'
            }}>
                <h3>Hospital 1</h3>
                <h3>Hospital 2</h3>
            </List>
            </div>
        </div>
    )
}

export default Hospitals
