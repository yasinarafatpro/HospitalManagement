import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from './pages/Auth';
import { Home } from './pages/Home';
import Hospitals from './pages/Hospitals';
import Register from './pages/Register';
import Signin from './pages/Signin';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/auth' element={<Auth/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/hospitals' element={<Hospitals/>}/>
        </Routes>
        </BrowserRouter>
        <form action="../../post" method="post" 
              className="form">
          <button type="submit">Connected?</button>
        </form>
      </header>
    </div>
  );
}

export default App;
