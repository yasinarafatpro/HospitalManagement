import { Button, Stack, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

interface Hospital{
  HospitalName:string,
  password:string,

}

const HospitalRegister:React.FC = () => {

  const [hospital,setHospital]=useState<Hospital>({
    HospitalName:'',
    password:''
  })

  const handleChange=(event:React.ChangeEvent<HTMLTextAreaElement>)=>{
    const{name,value}=event.target
    setHospital({...hospital,[name]:value})
    console.log(hospital)
  }

  const handleSubmit=()=>{
    alert('submit')
  }

  return (
    <div className='hospitalValue'>
      <p style={{textAlign:'center'}}>Please Fill Required Field *</p>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="filled-required"
          label="Hospital Name"
          variant="filled"
          onChange={handleChange}
          name='HospitalName'
          value={hospital?.HospitalName}
        />
        <TextField
          required
          id="filled-password-input"
          label="setPassword"
          type="password"
          autoComplete="current-password"
          variant="filled"
          name='password'
          value={hospital.password}
          onChange={handleChange}
        />
        <TextField
          required
          id="filled-number"
          label="HospitalCode"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
        <TextField
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
        />
        <TextField
          required
          id="filled-helperText"
          label="Helper text"
          helperText="Some important text"
          variant="filled"
        /> <br/>
        <Button variant="contained"style={{ margin: "20px" }} onSubmit={handleSubmit}>Submit</Button><br/>
      </div>
    </Box>
  </div>
  )
};

export default HospitalRegister;
