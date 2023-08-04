
import './App.css';
import React from 'react';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Testimonials from './components/testimonials/Testimonial';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Work from './components/work/Work';

const App = () =>{
  return (
    <>
    
    <Header />
    
    <main classNmae='main'>
      <Home />
      <About />
      <Skills />
      <Services />
      <Qualification />
      <Work />
      <Testimonials />
      <Contact />
     
    </main>

    <Footer />

    </>
  )
}



export default App

