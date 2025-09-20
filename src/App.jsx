import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './pages/Home'
import SingleProduct from './pages/SingleProduct';

function App() {
  return (
    <div className='relative'>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product/:id" element={<SingleProduct />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;