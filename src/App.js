import "./App.css";
import Home from "./components/home/home";
import Portafolio from './components/portafolio/Portafolio'
import ResponsiveAppBar from "./components/navbar/nav";
import Tecnologias from "./components/Technologies/tecnologias";
import About from "./components/about/about";
import Contactame from "./components/contact/Contact";
import { BiUpArrowCircle } from 'react-icons/bi';
import { useState } from "react";



function App() {

  const [ show, setShow ] = useState(false);


    window.onscroll = function() {
      let y = window.scrollY;
      if(y > 500) setShow(true)
        else setShow(false)
    };
  
  return (
    <div className="containerApp">
      <ResponsiveAppBar />
      <div className="container">
        <div className="bubbles">
          <span style={{animation:'animate 15s linear infinite'}}></span>
          <span style={{animation:'animate 8s linear infinite'}}></span>
          <span style={{animation:'animate 25s linear infinite'}}></span>
          <span style={{animation:'animate 12s linear infinite'}}></span>
          <span style={{animation:'animate 23s linear infinite'}}></span>
          <span style={{animation:'animate 10s linear infinite'}}></span>
          <span style={{animation:'animate 14s linear infinite'}}></span>
          <span style={{animation:'animate 18s linear infinite'}}></span>
          <span style={{animation:'animate 20s linear infinite'}}></span>
          <span style={{animation:'animate 7s linear infinite'}}></span>
          <span style={{animation:'animate 19s linear infinite'}}></span>
        </div>
      </div>
      <div id='home'>
      <Home />
      </div>
      {show&&<a className='linkCircle' href='#home'><BiUpArrowCircle className='buttonArriba'/></a>}
      <div id='portafolio'>
      <Portafolio />
      </div>
      <div id='tecnologias'>
      <Tecnologias />
      </div>
      <div id='acerca'>
      <About />
      </div>
      <div id='contáctame'>
      <Contactame />
      </div>
    </div>
  );
}

export default App;
