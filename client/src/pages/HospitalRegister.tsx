import { Button, Stack, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

interface Hospital {
  HospitalName: string,
  password: string,
  HospitalCode: string,
  Helper_text: string
}

const HospitalRegister: React.FC = () => {

  const [hospital, setHospital] = useState<Hospital>({
    HospitalName: '',
    password: '',
    HospitalCode: '',
    Helper_text: ''
  })

  const [value, setValue] = useState()

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setHospital({ ...hospital, [name]: value })
  }

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:3001/register/singin', {
        method: 'POST',
        headers: { 'Content_Type': 'application/json' },
        body: JSON.stringify(hospital)
      })

      const resp = await response.json()
      setValue(resp)
      console.log(value)
    } catch (error) {
      console.log('Input Filed', error)
    }
  }

  return (
    <div className='hospitalValue'>
      <p style={{ textAlign: 'center' }}>Please Fill Required Field *</p>
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
            variant="filled"
            name='HospitalCode'
            value={hospital.HospitalCode}
            onChange={handleChange}
          />
          <TextField
            required
            id="filled-helperText"
            label="Helper text"
            helperText="Some important text"
            variant="filled"
            name='Helper_text'
            value={hospital.Helper_text}
            onChange={handleChange}
          /> <br />
          <Button variant="contained" style={{ margin: "20px" }} onSubmit={handleSubmit} type='submit'>Submit</Button><br />
        </div>
      </Box>
    </div>
  )
};

export default HospitalRegister;
