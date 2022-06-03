import image from "../image/myself.jpg";
import logo from '../image/logo.png'

export default function About() {
  return (
    <div className="about">
      <div className="about-center">
        <img src={image} alt="about me" className="picture"/>
        <div className="motivacion">
            <h2>Hola jefe</h2>
            <h3>mi nombre es José gregorio Sarabia lugo</h3>
          <p>
            Trabajador y estudiante, soy el responsable de una hermosa familia que no para 
            de apoyarme y decirme que soy el mejor en lo que hago, asi que si quieres saber de que estoy hecho y necesitas a una persona responsable,
            con mucha creatividad y con desespero de aprender, mejorar y asi avanzar, escribeme, estare muy atento.
          </p>
        </div>
      </div>
        <div className="logoAbout">
            <img src={logo} alt="logo react-redux" className="App-logo"/>
        </div>
    </div>
  );
}
