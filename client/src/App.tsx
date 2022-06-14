import { Button, Container } from '@mui/material';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchAppBar from './pages/AppBar';
import Footer from './pages/Footer';
import { Home } from './pages/Home';
import HospitalList from './pages/HospitalList';
import HospitalRegister from './pages/HospitalRegister';
import Photo from './pages/Photo';
import Register from './pages/Register';
import Signin from './pages/Signin';

const Hospitals = React.lazy(() => import('./pages/Hospitals'))

function App() {
  return (
    <>
      <SearchAppBar />
      <Container sx={{ marginY: 5 }}>
        <div className="App">
          <header className="App-header">
          </header>
          <body>
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/register' element={<Register />} />
                <Route path='/signin' element={<Signin />} />
                {/* <Route path='/signin/:adminName' element={<Signin />} /> */}
                <Route path='/hospitals' element={<Hospitals />} />
                <Route path='/hospitallist' element={<HospitalList />} />
                <Route path='/hospitalregister' element={<HospitalRegister />} />
                <Route path='/photo' element={<Photo />} />
              </Routes>
            </BrowserRouter>
            <div className='homebtn'>
              {/* <form action="../../post" method="post">
                <Button type="submit" variant='contained' style={{ margin: "20px", }}>Go Home</Button>
              </form> */}
            </div>
          </body>
        </div>
        </Container>
        <Footer />
      </>
  );
}
export default App;
