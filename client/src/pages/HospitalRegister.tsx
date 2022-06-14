import { Button, TextField } from '@mui/material';
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

  const handleSubmit = async (e:any) => {
    try{
      const response=await fetch('http://localhost:3001/hospitalregister',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(hospital)
      })
      const resp=await response.json()
      Reset()
      console.log(resp)

    }catch(err){
      console.log(err)
    }
  }
  const Reset=()=>{
    setHospital({
      name: '',
      code: ''
    })
  }
  return (
    <div className='hospitalValue'>
      <h4>Please Fill Required Field *</h4>
      <Box>
        1.<TextField type='text' name='name' value={hospital.name} label='name of hospital' onChange={handleChange}/><br/>
        2<TextField type='munber' name='code' value={hospital.code} label='Code of hospital' onChange={handleChange}/><br/>
        <Button type='reset' onClick={Reset} variant='contained' style={{margin:'10px'}}>Reset</Button>
        <Button variant='contained' type='submit' onClick={handleSubmit} style={{margin:'10px'}}>Submit</Button>
      </Box>
    </div>
  )
};
export default HospitalRegister;