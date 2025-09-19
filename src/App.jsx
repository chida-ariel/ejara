import React from 'react'
import "./styles/App.css";
import Eja from './components/Header';
import Header from "./components/Header.jsx"
import Footer from './components/Footer.jsx';
import SavingsBox from './components/SavingsBox.jsx';
import Investment from './components/Investment.jsx';
import ProjectSavings from './components/ProjectSavings.jsx';
import Hero from './components/Hero.jsx';
import HeroImage from './components/HeroImage.jsx';

const App = () => {
  return (
    <div className='container'>
      <Header/>
      <Hero/>
      <HeroImage/>
      <SavingsBox/>
      <ProjectSavings/>
      <Investment/>
      <Footer/>
      
    </div>
  )
}

export default App
