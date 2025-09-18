import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './pages/Home'

function App() {
  return (
    <div className='relative'>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </div>
  );
}

export default App;