import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './pages/Home'
import SingleProduct from './pages/SingleProduct';
import ScrollToTop from './Components/Scroll';
import Category from './pages/Category';

function App() {
  return (
    <div className='relative'>
      <Navbar />
      <ScrollToTop />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product/:id" element={<SingleProduct />} />
          <Route path="categories" element={<Category />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;