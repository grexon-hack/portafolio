import { useState } from 'react';
import Back from './back/Back';
import Front from './front/Front';
import style from './tecnologia.module.css';

export default function Tecnologias() {

  const [front, setFront] = useState(true);
  const [back, setBack] = useState(false);
  const [game, setGame] = useState(false);

  const handleFront = () => {
    setFront(true);
    setBack(false);
    setGame(false);
  }
  const handleBack = () => {
    setFront(false);
    setBack(true);
    setGame(false);
  }
  const handleGame = () => {
    setFront(false);
    setBack(false);
    setGame(true);
  }

  return (
    <div className={style.containerTech}>
    <div className={style.containerButton}>
      <div className={front?style.active:style.btn} onClick={handleFront}><span>Front End</span></div>
      <div className={back?style.active:style.btn} onClick={handleBack}><span>Back End</span></div>
      <div className={game?style.active:style.btn} onClick={handleGame}><span>Juego</span></div>
    </div>
    <div className={style.containerFBG}>
     {front && <Front />}
     {back && <Back />}
    </div>
    </div>
  );
}
