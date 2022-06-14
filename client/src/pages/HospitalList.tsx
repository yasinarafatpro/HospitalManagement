import { Button, Grid, Paper } from '@mui/material';
import React from 'react';
import '../pages/HospitalList.css'
import { useNavigate } from 'react-router-dom'
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import Rating from '@mui/material/Rating';
import { AccessTime } from '@mui/icons-material';



const HospitalList: React.FC = () => {

    const navigate = useNavigate()

    return (
        <div>
            <div>
                <Box>
                <Grid container spacing={3} style={{cursor:'pointer'}} maxWidth='large'>
                    <Grid item xs={3} >
                        <Paper elevation={3}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQySz5jKMKf2MWyXiR_kcLLcckTMaz1xK4hEA&usqp=CAU" className='img' alt='text'/>
                            <Box paddingX={1}>
                                <Typography variant='subtitle1'>
                                    Shekhhasina Medical College
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <AccessTime sx={{ width: 12.5 }}></AccessTime>
                                    <Typography variant='body2' component='p' marginLeft={0.5}>
                                        5 hours
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}
                                    marginTop={1}
                                >
                                    <Rating
                                        name='read-only'
                                        value={4.5}
                                        precision={.5}
                                        size="small" />

                                    <Typography
                                        variant='body2'
                                        component='p'
                                        marginLeft={0.5}>
                                        4.5
                                    </Typography>

                                    <Typography
                                        variant='body2'
                                        component='p'
                                        marginLeft={1.5}
                                    >
                                        (200 view)
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant='h5' component='h3' marginTop={0}>
                                        From C $
                                    </Typography>
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper elevation={3}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyuHsO3M74ZFqFJIVKq2h3W3SL65S1YeETBg&usqp=CAU" className='img' alt='text'/>
                            <Box paddingX={1}>
                                <Typography variant='subtitle1'>
                                    Dhaka Medical College
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <AccessTime sx={{ width: 12.5 }}></AccessTime>
                                    <Typography variant='body2' component='p' marginLeft={0.5}>
                                        5 hours
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}
                                    marginTop={1}
                                >
                                    <Rating
                                        name='read-only'
                                        value={4.5}
                                        precision={.5}
                                        size="small" />

                                    <Typography
                                        variant='body2'
                                        component='p'
                                        marginLeft={0.5}>
                                        4.5
                                    </Typography>

                                    <Typography
                                        variant='body2'
                                        component='p'
                                        marginLeft={1.5}
                                    >
                                        (200 view)
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant='h5' component='h3' marginTop={0}>
                                        From C $
                                    </Typography>
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper elevation={3}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO-yfdxWGlvmsZrGLArkEyJzuUOF43G_UFIA&usqp=CAU" className='img' alt='text'/>
                            <Box paddingX={1}>
                                <Typography variant='subtitle1'>
                                    Chottogram Medical College
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <AccessTime sx={{ width: 12.5 }}></AccessTime>
                                    <Typography variant='body2' component='p' marginLeft={0.5}>
                                        5 hours
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}
                                    marginTop={1}
                                >
                                    <Rating
                                        name='read-only'
                                        value={4.5}
                                        precision={.5}
                                        size="small" />

                                    <Typography
                                        variant='body2'
                                        component='p'
                                        marginLeft={0.5}>
                                        4.5
                                    </Typography>

                                    <Typography
                                        variant='body2'
                                        component='p'
                                        marginLeft={1.5}
                                    >
                                        (200 view)
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant='h5' component='h3' marginTop={0}>
                                        From C $
                                    </Typography>
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper elevation={3}>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0rarM9V28hOnv9NSjiQCIwTzd_-WKbJ0MjA&usqp=CAU' className='img' alt='text'/>
                            <Box paddingX={1}>
                                <Typography>
                                    Ragshahi Medical Collage
                                </Typography>
                                <Box sx={{display:'flex' ,alignItems:'center'}}>
                                    <AccessTime sx={{ width: 12.5 }}></AccessTime>
                                    <Typography variant='body2' component='p' marginLeft={.5}>
                                        2 hours
                                    </Typography>
                                </Box>
                                <Box sx={{display:'flex',alignItems:'center'}} marginTop={1}>
                                        <Rating 
                                        name='read-only' 
                                        value={4.5} 
                                        precision={.5}
                                        />
                                        <Typography 
                                        variant='body2' 
                                        component='p' 
                                        marginLeft={.5}>4.5
                                        </Typography>
                                        <Typography variant='body2' component='p' marginLeft={1.5}>
                                            (230 view)
                                        </Typography>
                                </Box>
                                <Box>
                                    <Typography variant='h5' component='h3'>
                                        From C $
                                    </Typography>
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper elevation={3}>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&usqp=CAU' className='img' alt='text'/>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper elevation={3}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVGHL9r9OucwArH8yO3rEDPryG4V3tSCBw-w&usqp=CAUfavicon.ico" className='img' alt='text'/>
                        </Paper>
                    </Grid>
                </Grid>
                </Box>
            </div>
        </div>
    )
};
export default HospitalList