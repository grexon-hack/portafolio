import style from "./about.module.css";
import image from "../../image/desarrollador.png";
import Tilt from "react-parallax-tilt";


export default function About() {

  return (
    <div className={style.containerAbout}  data-aos="zoom-in">
      <div className={style.containerCenter}>
        <Tilt>
          <div className={style.blockCenter}>
            <div className={style.motivation}>
              <h1>¿Quién soy?</h1>
              <p>
                <strong>mi nombre es José gregorio Sarabia lugo</strong>
              </p>
              <p>
                Soy desarrollador full stack, Me gusta trabajar en equipo,
                solucionar problemas y dar pequeñas pero muy buenas Ideas para
                el Desarrollo de trabajos a realizar.
                <br />
                Me considero una persona curiosa en este inmenso mundo de
                tecnologías maravillosas, todos los días estudio y aprendo algo
                nuevo para así agilizar mis trabajos a realizar y dar garantía
                de su funcionamiento.
                <br />
                Soy Trabajador y estudiante, también responsable de una hermosa
                familia que no para de apoyarme y decirme que soy el mejor en lo
                que hago, así que si quieres saber de que estoy hecho y
                necesitas a una persona responsable, con mucha creatividad y
                ansioso por seguir avanzando, escríbeme, estaré muy atento.
              </p>
            </div>
            <div className={style.containerImage}>
              <img src={image} alt="about" />
            </div>
          </div>
        </Tilt>
      </div>
    </div>
  );
}
