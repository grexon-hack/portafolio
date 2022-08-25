import style from "./home.module.css";
import image from "../../image/myself.jpg";
import Avatar from "@mui/material/Avatar";
import Typewriter from "typewriter-effect";
import cv from '../../image/jose-sarabia.pdf';
import Tilt from 'react-parallax-tilt';

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
              .pauseFor(500)
              .typeString("<br /> Me llamó José ")
              .pauseFor(500)
              .typeString("<br /> Vivo en Medellín-Colombia ")
              .pauseFor(500)
              .typeString("<br /> y ")
              .pauseFor(500)
              .typeString("<br /> Soy Desarrollador Full Stack")
              .start();
            }}
        />
            </div>
          

        </div>
      </div>
      <div className={style.contentTwo}>
        <div className={style.border}>
          <Tilt glareEnable={true}>
          <Avatar
            className={style.avatarImg}
            alt="Remy Sharp"
            src={image}
            sx={{ width: 280, height: 280 }}
          />
          </Tilt>
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
