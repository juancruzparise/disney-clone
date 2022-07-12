import './styles/style.css';
import React, { useRef, useState } from "react";
import Header from './components/header';
import Carousel from './components/carousel';
import Categories from './components/categories';
import AllMovies from './components/recomendaciones';
import Novedades from './components/novedades';
import SeguirViendo from './components/SeguirViendo';
import Footer from './components/footer';
function App() {
  return (
    <div className='disney-body'>
      <Header />
      <Carousel />
      <Categories />
      <AllMovies />
      <Novedades />
      <SeguirViendo />
      <Footer />
    </div>
  );
}

export default App;
