import logo from "./logo.svg";
import "./App.css";
import  'bootstrap/dist/css/bootstrap.min.css' ;
import About from "./components/about";
import Portafolio from "./components/Portafolio";
import Contactame from "./components/Contact";
import image from "./image/saludo.png";
import Social from "./components/social";
import { useState } from "react";
import { FaRegMoon, FaRegSun } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsFillArrowUpCircleFill } from 'react-icons/bs'


function App() {

  const [dark, setDark] = useState(false);


  window.addEventListener("scroll", function () {
    let elements = document.getElementsByClassName("scroll-page");
    let elementsLI = document.getElementsByClassName("navLink");
    let array = [...elementsLI];
    let screenSize = window.innerHeight;

    for (let i = 0; i < elements.length; i++) {
      let element = elements[i];

      if (element.getBoundingClientRect().top < screenSize - 50) {
        elementsLI[i].classList.add("active");
        array.forEach((elem) => {
          if (elem !== elementsLI[i]) elem.classList.remove("active");
        });

      }
    }
  });

  return (
    <div className="App" style={{ backgroundColor: dark && "black", color: dark && "azure" }}>
      <div className="modeLightDark" style={{ backgroundColor: !dark && 'black' }}>
        <div className="light" onClick={() => setDark(true)}>
            <FaRegMoon style={{ color: !dark && 'black' }}/>
        </div>
        <div className="ball" style={{ left: dark ? '15px' : '-15px', backgroundColor: !dark && 'azure' }}></div>
        <div className="dark" onClick={() => setDark(false)}>
        <FaRegSun style={{ color: !dark && 'black' }}/>
        </div>
      </div>
      
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Desarrollador Full-Stack</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link className='navLink' href="#home">Home</Nav.Link>
            <Nav.Link className='navLink' href="#portafolio">Portafolio</Nav.Link>
            <Nav.Link className='navLink' href="#acerca">Acerca de</Nav.Link>
            <Nav.Link className='navLink' href="#contactame">Contactáme</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="scroll-page prueba" id="Inicio">
        <div className="presentacion">
          <div className="targeta">
            <div>
            <img
              src={image}
              alt="saludo"
              style={{ width: "50px" }}
              className="saludar"
            />
            <h2>
              Hola, mi nombre es <span className="font" style={{ color: dark && 'violet' }}>José</span>,<br />
              vivo en medellin <br />
              y soy <br /> Desarrollador Full-Stack
            </h2>
            </div>
            <Social />
          </div>
        </div>
        <img
          className='imageInitial'
          src="https://itae.com.ar/wp-content/uploads/2019/11/entrenamiento-1024x768.png"
          alt="presentacion"
        />
      </div>
      <div className="App-fondo">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <Nav.Link  href="#Inicio">
      <BsFillArrowUpCircleFill className='buttonUp' />
      </Nav.Link>

      <div className="scroll-page" id="portafolio">
        <Portafolio />
      </div>
      <div className="scroll-page" id="acerca">
        <About />
      </div>
      <div className="scroll-page" id="contactame">
        <Contactame />
      </div>
    </div>
  );
}

export default App;
