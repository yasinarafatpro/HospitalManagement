import { AppBar, Button, Container, IconButton, MenuItem, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  {Home}  from './pages/Home';
import HospitalList from './pages/HospitalList';
import HospitalRegister from './pages/HospitalRegister';
import Register from './pages/Register';
import Signin from './pages/Signin';
import { color, textAlign } from '@mui/system';
const Hospitals = React.lazy(() => import('./pages/Hospitals'))

function App() {
  return (
    <>
      <Container >
        <div className="App">
          <AppBar position='absolute'>
            <Toolbar>
              <IconButton
                size='large'
                edge='start'

              >
                <MenuIcon />
              </IconButton>
              <Typography>
                <img alt="logo" src="http://dmc.gov.bd/themes/responsive_npf/img/logo/logo.png" width='50%' />
              </Typography>
              <Button color='inherit'>LogIn</Button>
            </Toolbar>
          </AppBar>
          <h2 style={{padding:'80px',textAlign: 'center',color:'blueviolet'}}>BD HOSPITALS</h2>
          <header className="App-header">
              <BrowserRouter>
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/register' element={<Register />} />
                  <Route path='/signin' element={<Signin />} />
                  {/* <Route path='/signin/:adminName' element={<Signin />} /> */}
                  <Route path='/hospitals' element={<Hospitals />} />
                  <Route path='/hospitallist' element={<HospitalList />} />
                  <Route path='/hospitalregister' element={<HospitalRegister />} />
                </Routes>
              </BrowserRouter>
          </header>
        </div>
        <div className='homebtn'>
          <form action="../../post" method="post">
            <Button type="submit" variant='contained' style={{ margin: "20px", }}>Go Home</Button>
          </form>
        </div>
      </Container>
    </>
  );
}

export default App;
