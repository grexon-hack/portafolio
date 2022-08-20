import style from "./home.module.css";
import image from "../../image/myself.jpg";
import Avatar from "@mui/material/Avatar";
import Typewriter from "typewriter-effect";
import cv from '../../image/jose-sarabia.pdf'

const Home = () => {
  return (
    <div className={style.containerHome}>
      <div className={style.contentOne}>
        <div className={style.containerWriter}>
            <div className={style.typeWriter}>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Hola ")
              .pauseFor(1000)
              .typeString("<br /> Me llamó José ")
              .pauseFor(1000)
              .typeString("<br /> Vivo en Medellín-Colombia ")
              .pauseFor(1000)
              .typeString("<br /> y ")
              .pauseFor(1000)
              .typeString("<br /> Soy Desarrollador Full Stack")
              .start();
            }}
        />
            </div>
          

        </div>
      </div>
      <div className={style.contentTwo}>
        <div className={style.border}>
          <Avatar
            alt="Remy Sharp"
            src={image}
            sx={{ width: 280, height: 280 }}
          />
        </div>
        <div className={style.contentButton}>
            <a href={cv} download="CV"><span>Descargar CV</span></a>
            <a href="https://www.linkedin.com/in/jose-gregorio-sarabia-lugo-b28791219/" target="_blank" rel="noopener noreferrer"><span>Linkedin</span></a>
            <a href="https://github.com/grexon-hack" target="_blank" rel="noopener noreferrer"><span>Github</span></a>
        </div>
      </div>
    </div>
  );
};

export default Home;
