import image from "../image/myself.jpg";
import logo from "../image/logo.png";

export default function About() {
  return (
    <div className="about">
      <div className="about-center">
        <img src={image} alt="about me" className="picture" />
        <div className="motivacion">
          <h2>Hola jefe</h2>
          <h3>mi nombre es José gregorio Sarabia lugo</h3>
          <p>
            Soy desarrollador full stack con bastante desempeño en las dos caras
            de la moneda (front-end, back-end), con capacidad de trabajar en
            equipo, bajo metodología SCRUM, construyendo aplicaciones web
            escalables. <br /> me considero una persona curiosa en este inmenso mundo
            de tecnologías maravillosas, todos los días estudio y aprendo algo
            nuevo para así agilizar mis trabajos a realizar y dar garantía de su
            funcionamiento. <br />soy Trabajador y estudiante, tambien responsable de una
            hermosa familia que no para de apoyarme y decirme que soy el mejor
            en lo que hago, asi que si quieres saber de que estoy hecho y
            necesitas a una persona responsable, con mucha creatividad y ansioso de seguir avanzando, escribeme, estare muy
            atento.
          </p>
        </div>
      </div>
      <div className="logoAbout">
        <img src={logo} alt="logo react-redux" className="App-logo" />
      </div>
    </div>
  );
}
