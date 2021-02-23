import React from 'react';
import './App.css';
import Header from './header';
import Why from './why';
import Testimonials from './testimonials'
import Footer from './Footer/footer'

function App() {
  return (
    <div className='landingbackground'>

    <div className='page-container'>
        <Header/>
        <Why/>
        <Testimonials/>
        <Footer/>
    </div>
    <div className='title'>
    </div>
      Gem Droppers
    </div>

  );
}

export default App;