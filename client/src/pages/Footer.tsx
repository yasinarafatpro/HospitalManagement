import { Box, Container, Grid,Link } from '@mui/material';
import React from 'react'

const Footer = () => {
  return (
    <footer>
        <Box px={{xs:.2,sm:2}} py={{xs:.2,sm:5.5}} bgcolor='cadetblue' color='black'>
            <Container  maxWidth='lg'>
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Help</Box>
                        <Box>
                        <Link href='/' color='inherit'>Contack</Link>
                        </Box>
                        <Box>
                        <Link href='/' color='inherit'>Support</Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Account</Box>
                        <Box>
                        <Link href='/signin' color='inherit'>Login/singin</Link>
                        </Box>
                        <Box>
                        <Link href='/register' color='inherit'>Register/CreateAccount</Link>
                        </Box>
                        <Box>
                        <Link href='/hospitalregister' color='inherit'>Add-Hospital</Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Messages</Box>
                        <Box>
                        <Link href='/' color='inherit'>Backup</Link>
                        </Box>
                        <Box>
                        <Link href='/' color='inherit'>History</Link>
                        </Box>
                    </Grid>
                </Grid>
                <Box textAlign='center' pt={{sx:5,sm:3}} pb={{sx:5,sm:3}}>
                    Bd Hospitals &reg;{new Date().getFullYear()}
                </Box>
            </Container>
        </Box>
    </footer>
  )
}

export default Footer