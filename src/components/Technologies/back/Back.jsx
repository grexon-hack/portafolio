import style from './back.module.css';
import { useState, useEffect } from 'react';
import { FaNodeJs, FaPauseCircle } from 'react-icons/fa';
import { SiExpress, SiSequelize, SiPostgresql, SiFirebase } from 'react-icons/si';
import { AiOutlineConsoleSql } from 'react-icons/ai';
import ListBack from './ListBack';



const Back = () => {

    const [velocidad, setVelocidad ] = useState(20);

    useEffect(() => {
        if(velocidad > 2 && velocidad !== 20) setVelocidad(velocidad - 1)
    },[velocidad])


    return (
        <div className={style.containerSpinnerBack}>
            <ListBack />
        <div className={style.menu} style={{animationDuration:`${velocidad}s`}}>
            <div className={style.toggle}
            onClick={() => velocidad === 20&& setVelocidad(10)}
            ><FaNodeJs color='black'/></div>
                <li className={style.li1}>
                    <span style={{boxShadow:velocidad < 20&&`2px 2px ${20 - velocidad}px aqua`}}><SiExpress color='blue'/></span>
                </li>
                <li className={style.li2}>
                    <span style={{boxShadow:velocidad < 20&&`2px 2px ${20 - velocidad}px aqua`}}><SiSequelize color='blue'/></span>
                </li>
                <li className={style.li3}>
                    <span style={{boxShadow:velocidad < 20&&`2px 2px ${20 - velocidad}px aqua`}}><AiOutlineConsoleSql color='blue'/></span>
                </li>
                <li className={style.li4}>
                    <span style={{boxShadow:velocidad < 20&&`2px 2px ${20 - velocidad}px aqua`}}><SiPostgresql color='blue'/></span>
                </li>
                <li className={style.li5}>
                    <span style={{boxShadow:velocidad < 20&&`2px 2px ${20 - velocidad}px aqua`}}><SiFirebase color='orange'/></span>
                </li>
        </div>

               {velocidad < 20 ? <div className={style.buttonSpinner} style={stylePause}>
                <span style={{cursor:'pointer', padding:'5px'}}>
                    <FaPauseCircle onClick={() => setVelocidad(20)}/>
                </span>
                </div>:
                <div className={style.buttonSpinner} style={stylePause}>
                <span style={{cursor:'pointer', padding:'5px'}} onClick={() => setVelocidad(velocidad - 5)}>
                    Girar
                </span>
                </div>}
        </div>
    )
}

const stylePause = { 
    color:'azure',
    fontSize:'20px',
    cursor:'pointer',
    marginTop:'20px'
}

export default Back