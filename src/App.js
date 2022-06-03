import logo from "./logo.svg";
import "./App.css";
import About from "./components/about";
import Portafolio from "./components/Portafolio";
import Contactame from "./components/Contact";
import image from "./image/saludo.png";
import Social from "./components/social";
import burguerIcon from "./image/burguer.png";
import equis from "./image/equis.png";
import { useState } from "react";

function App() {
  const [mostrar, setMostrar] = useState(false);

  const [dark, setDark] = useState(false);

  window.addEventListener("scroll", function () {
    let elements = document.getElementsByClassName("scroll-page");
    let elementsLI = document.getElementsByClassName("navLink");
    let array = [...elementsLI];
    let screenSize = window.innerHeight;

    for (var i = 0; i < elements.length; i++) {
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
    <div className="App" style={{ backgroundColor: dark&&"black", color: dark&&"azure" }}>
      <div className="modeLightDark" style={{backgroundColor: !dark&&'black'}}>
        <div className="light" onClick={() => setDark(true)}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            style={{color: !dark&&'black'}}
          >
            <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"></path>
            <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"></path>
          </svg>
        </div>
        <div className="ball" style={{left: dark?'15px':'-15px', backgroundColor:!dark&&'azure'}}></div>
        <div className="dark" onClick={() => setDark(false)}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            style={{color: !dark&&'black'}}
          >
            <path d="M494.2 221.9l-59.8-40.5 13.7-71c2.6-13.2-1.6-26.8-11.1-36.4-9.6-9.5-23.2-13.7-36.2-11.1l-70.9 13.7-40.4-59.9c-15.1-22.3-51.9-22.3-67 0l-40.4 59.9-70.8-13.7C98 60.4 84.5 64.5 75 74.1c-9.5 9.6-13.7 23.1-11.1 36.3l13.7 71-59.8 40.5C6.6 229.5 0 242 0 255.5s6.7 26 17.8 33.5l59.8 40.5-13.7 71c-2.6 13.2 1.6 26.8 11.1 36.3 9.5 9.5 22.9 13.7 36.3 11.1l70.8-13.7 40.4 59.9C230 505.3 242.6 512 256 512s26-6.7 33.5-17.8l40.4-59.9 70.9 13.7c13.4 2.7 26.8-1.6 36.3-11.1 9.5-9.5 13.6-23.1 11.1-36.3l-13.7-71 59.8-40.5c11.1-7.5 17.8-20.1 17.8-33.5-.1-13.6-6.7-26.1-17.9-33.7zm-112.9 85.6l17.6 91.2-91-17.6L256 458l-51.9-77-90.9 17.6 17.6-91.2-76.8-52 76.8-52-17.6-91.2 91 17.6L256 53l51.9 76.9 91-17.6-17.6 91.1 76.8 52-76.8 52.1zM256 152c-57.3 0-104 46.7-104 104s46.7 104 104 104 104-46.7 104-104-46.7-104-104-104zm0 160c-30.9 0-56-25.1-56-56s25.1-56 56-56 56 25.1 56 56-25.1 56-56 56z"></path>
          </svg>
        </div>
      </div>
      <div className="fuera">
        {!mostrar ? (
          <img
            src={burguerIcon}
            style={{ backgroundColor: "azure" }}
            alt="burguerIcon"
            onClick={() => setMostrar(true)}
          />
        ) : (
          <img src={equis} alt="equis" onClick={() => setMostrar(false)} />
        )}
      </div>
      <nav style={{ top: mostrar && "0px" }}>
        <ul>
          <li className="navLink">
            <a href="#Inicio">Inicio</a>
          </li>
          <li className="navLink">
            <a href="#portafolio">Portafolio</a>
          </li>
          <li className="navLink">
            <a href="#acerca">Acerca de mi</a>
          </li>
          <li className="navLink">
            <a href="#contactame">Contactame</a>
          </li>
        </ul>
      </nav>
      <Social />
      <div className="scroll-page prueba" id="Inicio">
        <div className="presentacion">
          <div className="targeta">
            <img
              src={image}
              alt="saludo"
              style={{ width: "50px" }}
              className="saludar"
            />
            <h2>
              Hola, mi nombre es <span className="font" style={{color:dark&&'violet'}}>José</span>,<br />
              vivo en medellin <br />
              y soy <br /> Desarrollador Full-Stack
            </h2>
          </div>
        </div>
        <img
          src="https://itae.com.ar/wp-content/uploads/2019/11/entrenamiento-1024x768.png"
          alt=""
        />
      </div>
      <div className="App-fondo">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
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
