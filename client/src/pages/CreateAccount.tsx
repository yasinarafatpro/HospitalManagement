import { Button, Toolbar } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'


const CreateAccount:React.FC = () => {

    // const handleRegister=()=>{
    //     navigate('/register')
    // }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Toolbar>
          <Button color="inherit">create account</Button>
        </Toolbar>
    </Box>
  )
}

export default CreateAccount