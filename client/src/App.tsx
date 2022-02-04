import { Button, Stack } from '@mui/material';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from './pages/Auth';
import { Home } from './pages/Home';
import HospitalList from './pages/HospitalList';
import HospitalRegister from './pages/HospitalRegister';

import Register from './pages/Register';
import Signin from './pages/Signin';
const Hospitals=React.lazy(()=>import('./pages/Hospitals'))

function App() {
  return (
    <>
      <div className='header'>
        <div className='bangladesh-logo'>
          <img alt="logo" src="http://dmc.gov.bd/themes/responsive_npf/img/logo/logo.png" width='5%' />
        </div>
        <div className='bangobondhu'>
          <img alt='logo' src="https://www.bsmmu.edu.bd/assets/images/mujib_logo.png" width="10%" />
          <h3>Welcome to Hospitas Bd</h3>
        </div>
        
      </div>
      <div className="App">
      
        <header className="App-header">
        <Suspense fallback={<p>Loading...</p>}>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/register' element={<Register />} />
              <Route path='/auth' element={<Auth />} />
              <Route path='/signin' element={<Signin />} />
              <Route path='/hospitals' element={<Hospitals />} />
              <Route path='/hospitallist' element={<HospitalList/>}/>
              <Route path='/hospitalregister' element={<HospitalRegister/>}/>
            </Routes>
          </BrowserRouter>
          </Suspense>
        </header>
      </div>
      <div className='homebtn'>
        <form action="../../post" method="post">
            <Button type="submit" variant='contained' style={{ margin: "20px" }}>Go Home</Button>
        </form>
      </div>
    </>
  );
}

export default App;
