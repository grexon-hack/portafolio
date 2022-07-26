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
import Tecnologias from "./components/tecnologias";


function App() {

  const [dark, setDark] = useState(false);

  return (
    <div className="App" style={{ backgroundColor: dark && "black", color: dark && "azure" }}>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
        <Container>
          <Navbar.Brand href="#home">Desarrollador Full-Stack</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='navLink' href="#portafolio">Portafolio</Nav.Link>
            <Nav.Link className='navLink' href="#acerca">Acerca de</Nav.Link>
            <Nav.Link className='navLink' href="#contactame">Contáctame</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className='modeDark'>
        <div className="light" style={{display:!dark?'block':'none'}} onClick={() => setDark(true)}>
            <FaRegMoon style={{ color: !dark && 'black' }}/>
        </div>
        <div className="dark" style={{display:dark?'block':'none'}} onClick={() => setDark(false)}>
            <FaRegSun style={{ color: !dark && 'black' }}/>
        </div>
      </div>
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
              vivo en Colombia - Medellín <br />
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
      <div className="scroll-page" id="tecnologias">
        <Tecnologias />
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
