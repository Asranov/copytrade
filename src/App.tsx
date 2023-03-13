import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Main from './Pages/Main/Main';
import Signin from './Routers/Auth/Signin';
import Signup from './Routers/Auth/Signup';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="signin" element={<Signin />} />
          <Route path='signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
