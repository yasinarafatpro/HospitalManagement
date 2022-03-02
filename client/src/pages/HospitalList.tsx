import { Button, Grid, Paper } from '@mui/material';
import React from 'react';
import '../pages/HospitalList.css'
import { useNavigate } from 'react-router-dom'
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';


const HospitalList: React.FC = () => {

    const navigate = useNavigate()
    return (
        <div>
            <div >
                <Grid container spacing={3}>
                    <Grid item xs={3} >
                        <Paper elevation={3}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQySz5jKMKf2MWyXiR_kcLLcckTMaz1xK4hEA&usqp=CAU" className='img' />
                            <Box paddingX={1}>
                                <Typography variant='subtitle1'>
                                    Shekhhasina Medical College
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Typography variant='body2' component='p'>
                                        5 hours
                                    </Typography>
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper elevation={3}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyuHsO3M74ZFqFJIVKq2h3W3SL65S1YeETBg&usqp=CAU" className='img' />
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper elevation={3}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO-yfdxWGlvmsZrGLArkEyJzuUOF43G_UFIA&usqp=CAU" className='img' />
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper elevation={3}>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0rarM9V28hOnv9NSjiQCIwTzd_-WKbJ0MjA&usqp=CAU' className='img' />
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper elevation={3}>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&usqp=CAU' className='img' />
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper elevation={3}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVGHL9r9OucwArH8yO3rEDPryG4V3tSCBw-w&usqp=CAUfavicon.ico" className='img' />
                        </Paper>
                    </Grid>
                </Grid>
            </div>
            <div>
                <Button variant="contained" onClick={() => { navigate('/hospitalregister') }}>Add Hospitals</Button>
            </div>
        </div>
    )
};

export default HospitalList
