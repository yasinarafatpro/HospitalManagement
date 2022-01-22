import { List } from '@mui/material'
import { display, margin } from '@mui/system'
import React from 'react'

const Hospitals = () => {
    return (
        <div>
            <List style={{
                cursor:'pointer',
                borderRadius:'50%'
            }}>
                <h3>Hospital 1</h3>
                <h3>Hospital 2</h3>
            </List>
        </div>
    )
}

export default Hospitals
