import "./App.css";
import Home from "./components/home/home";
import Portafolio from './components/portafolio/Portafolio'
import ResponsiveAppBar from "./components/navbar/nav";
import Tecnologias from "./components/Technologies/tecnologias";
import About from "./components/about/about";
import Contactame from "./components/contact/Contact";



function App() {

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
      <Home />
      <Portafolio />
      <Tecnologias />
      <About />
      <Contactame />
    </div>
  );
}

export default App;
