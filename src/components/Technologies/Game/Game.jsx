import style from "./game.module.css";
import Card from "./Card";
import images from "../../../import";
import { useEffect, useState } from "react";

const Game = () => {
  const [cards, setCards] = useState([]);
  const [firstCard, setFirstCard] = useState({});
  const [secondCard, setSecondCard] = useState({});
  const [unFlippedCards, setUnFlippedCards] = useState([]);
  const [disabledCards, setDisabledCards] = useState([]);
  const [ oportunity, setOportunity ] = useState(10);
  const [ puntaje, setPuntaje ] = useState(0);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };

  useEffect(() => {
    shuffleArray(images);
    setCards(images);
  }, []);

  useEffect(() => {
    checkForMatch()
    // eslint-disable-next-line
  }, [secondCard]);

  useEffect(() => {
    if(oportunity === 0){
        setOportunity(10)
        setPuntaje(0)
        setTimeout(() => {
            shuffleArray(images);
            setCards(images);
        }, 700);
    }
  },[oportunity])

  useEffect(() => {
    if(puntaje === 15) {
      setOportunity(10);
      setPuntaje(0)
      setTimeout(() => {
          shuffleArray(images);
          setCards(images);
      }, 700);
    }
  }, [puntaje])

  const flipCard = (name, number) => {
    if (firstCard.name === name && firstCard.number === number) {
      return 0;
    }
    if (!firstCard.name) {
      setFirstCard({ name, number });
    } else if (!secondCard.name) {
      setSecondCard({ name, number });
    }

    return 1;
  };

  const checkForMatch = () => {
    if (firstCard.name && secondCard.name) {
      const match = firstCard.name === secondCard.name;

      match ? disableCards() : unflipCards();
    }
  };

  const disableCards = () => {
    setDisabledCards([firstCard.number, secondCard.number]);
    resetCards();
    setPuntaje(puntaje + 1)
  };

  const unflipCards = () => {
    setUnFlippedCards([firstCard.number, secondCard.number]);
    resetCards();
    setOportunity(oportunity - 1);
  };

  const resetCards = () => {
    setFirstCard({});
    setSecondCard({});
  };

  return (
    <div className={style.containerGame}>
      <div className={style.containerCard}>
        {cards.map((card, index) => {
          return (
            <Card
              name={card.name}
              number={index}
              frontFace={card.src}
              flipCard={flipCard}
              unFlippedCards = {unFlippedCards}
              disabledCards = {disabledCards}
              oportunity = {oportunity}
            />
          );
        })}
      </div>
      <div className={style.dataGame}>
        <div>
        <span>Oportunidad: </span>
        <span>{oportunity}</span>
        </div>
        <div>
        <span>Puntaje: </span>
        <span>{puntaje}</span>
        </div>
      </div>
    </div>
  );
};

export default Game;
