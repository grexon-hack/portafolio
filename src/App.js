import logo from './logo.svg';
import './App.css';
import About from './components/about';
import Portafolio from './components/Portafolio';
import Contactame from './components/Contact';
import image from './image/saludo.png'
import Social from './components/social';
import burguerIcon from './image/burguer.png';
import equis from './image/equis.png';
import { useState } from 'react';

function App() {

  const [mostrar , setMostrar] = useState(false)
 
  window.addEventListener('scroll', function()  {
    let elements = document.getElementsByClassName('scroll-page');
    let elementsLI = document.getElementsByClassName('navLink');
    let array = [...elementsLI]
    let screenSize = window.innerHeight;
  
      for(var i = 0; i < elements.length; i++) {
        let element = elements[i];
  
        if(element.getBoundingClientRect().top < screenSize - 50) {
          elementsLI[i].classList.add('active')
          array.forEach(elem => {
            if(elem !== elementsLI[i]) elem.classList.remove('active')
          })
        }
      }
  });


  return (
    <div className="App">
      <div className='fuera'>
        {
          !mostrar?<img src={burguerIcon} alt="burguerIcon" onClick={() => setMostrar(true)}/> : <img src={equis} alt="equis" onClick={() => setMostrar(false)}/>
        }
      </div>
      <nav style={{top: mostrar&&'0px'}}>
        <ul>
          <li className='navLink'><a href='#Inicio'>Inicio</a></li>
          <li className='navLink'><a href='#portafolio'>Portafolio</a></li>
          <li className='navLink'><a href='#acerca'>Acerca de mi</a></li>
          <li className='navLink'><a href='#contactame'>Contactame</a></li>
        </ul>
      </nav>
      <Social />
      <div className='scroll-page prueba' id='Inicio'>
        <div className='presentacion'>
        <div className='targeta'>
        <img src={image} alt="saludo" style={{width:'50px'}} className='saludar'/>
        <h2>Hola, mi nombre es <span className='font'>José</span>,<br />vivo en medellin <br />
         y soy <br /> Desarrollador Full-Stack
        </h2>
        </div>
        </div>
        <img src="https://itae.com.ar/wp-content/uploads/2019/11/entrenamiento-1024x768.png" alt="" />
      </div>
      <div className="App-fondo">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className='scroll-page' id='portafolio'>

      <Portafolio />
      </div>
      <div className='scroll-page' id='acerca'>

      <About />
      </div>
      <div className='scroll-page' id='contactame'>

      <Contactame />
      </div>

    </div>
  );
}

export default App;
