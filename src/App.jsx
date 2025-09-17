import React from 'react'
import "./styles/App.css";
import Eja from './components/Header';
import Header from "./components/Header.jsx"
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <div className='container'>
      <Header/>
      <Footer/>
    </div>
  )
}

export default App
