import { Button, Stack, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

interface Hospital {
  name: string,
  code:string,
  
}
interface hospitalData {
  Helper_text: string
}
const HospitalRegister: React.FC = () => {

  const [hospital, setHospital] = useState<Hospital>({
    name: '',
    code: ''
  })

  const [hospitaldata, setHospitalData] = useState<hospitalData>()

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setHospital({ ...hospital, [name]: value })
    console.log(hospital)
  }

  const handleSubmit = async () => {
    console.log(hospital)
    try{
      const response=await fetch('http://localhost:3001/hospitalregister',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(hospital)
      })
      const resp=await response.json()
      console.log(resp)

    }catch(err){
      console.log(err)
    }
  }
  return (
    <div className='hospitalValue'>
      <p style={{ textAlign: 'center' }}>Please Fill Required Field *</p>
      <Box>
        <TextField type='text' name='name' value={hospital.name} label='name of hospital' onChange={handleChange}/><br/>
        <TextField type='munber' name='code' value={hospital.code} label='Code of hospital' onChange={handleChange}/><br/>

        <Button variant='contained' type='submit' onClick={handleSubmit}>Submit</Button>
      </Box>
    </div>
  )
};
export default HospitalRegister;