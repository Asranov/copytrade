import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Main from './Pages/Main/Main';
import Signin from './Routers/Auth/Signin';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
