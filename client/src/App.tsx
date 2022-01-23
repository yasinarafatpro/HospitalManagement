import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from './pages/Auth';
import { Home } from './pages/Home';

import Register from './pages/Register';
import Signin from './pages/Signin';
const Hospitals=React.lazy(()=>import('./pages/Register'))

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
            </Routes>
          </BrowserRouter>
          </Suspense>
          <form action="../../post" method="post"
            className="form">
            <button type="submit">Connected to React?</button>
          </form>
        </header>
      </div>
    </>
  );
}

export default App;
