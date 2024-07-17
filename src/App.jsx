import './styles/style.css';
import React from "react";
import Header from './components/header.jsx';
import Carousel from './components/carousel.jsx';
import Categories from './components/categories.jsx';
import AllMovies from './components/recomendaciones.jsx';
import Novedades from './components/novedades.jsx';
import SeguirViendo from './components/SeguirViendo.jsx';
import Footer from './components/footer.jsx';

function App() {

  return (
    <>
      <div className='disney-body'>
      <Header />
      <Carousel />
      <Categories />
      <AllMovies />
      <Novedades />
      <SeguirViendo />
      <Footer />
    </div>
    </>
  )
}

export default App
