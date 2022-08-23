import style from './game.module.css';
import ReactCardFlip from 'react-card-flip';
import backFace from '../../../image/Game/backcard.png'
import { useEffect, useState } from 'react';

const Card = ({ name, number, frontFace, flipCard, unFlippedCards, disabledCards, oportunity, puntaje }) => {

    const [ isFlipped, setIsFlipped ] = useState(false);
    const [ hasEvent, setHasEvent ] = useState(true);

    useEffect(() => {
        if(unFlippedCards.includes(number)) {
            setTimeout(() => setIsFlipped(false), 700); 
        }
        // eslint-disable-next-line
    },[unFlippedCards])

    useEffect(() => {
        if(disabledCards.includes(number)) {
            setHasEvent(false);
        }
        // eslint-disable-next-line
    },[disabledCards])

    useEffect(() => {
        if(oportunity === 0 || puntaje === 15) {
            setTimeout(() => {
                setIsFlipped(false);
                setHasEvent(true);
            }, 700);
        }
    }, [oportunity, puntaje])

    const handleClick = () => {
        const value = flipCard(name, number);

        if(value !== 0) setIsFlipped(!isFlipped)
    }

    return (
        <div className={style.card}>
            <ReactCardFlip isFlipped={isFlipped} flipDirection='vertical'>
                <img className={style.cardImage} src={backFace} alt="backface" onClick={hasEvent && handleClick}/>
                <img className={style.cardImage} src={frontFace} alt="frontface" onClick={hasEvent && handleClick}/>
            </ReactCardFlip>
        </div>
    )
}

export default Card