import { Box } from '@mui/system'
import React from 'react'
import '../pages/Photo.css'
const Photo = () => {
  return (
    <div className='photo'>
        <Box component='form' encType='multipart/form-data' method='post' >
            <input type='file' name='avater'/>
            <input type='file' name='doc'/>
            <input type='submit' value='submit'/>
        </Box>
    </div>
  )
}
export default Photo