import style from './front.module.css';
import { TbBrandJavascript, TbBrandHtml5 } from 'react-icons/tb';
import { TiCss3 } from 'react-icons/ti';
import { FaReact, FaAngular, FaBootstrap, FaPauseCircle } from 'react-icons/fa';
import { SiTypescript, SiJquery, SiRedux } from 'react-icons/si';
import { useState, useEffect } from 'react';
import ListFront from './ListFront';

const Front = () => {

    const [velocidad, setVelocidad ] = useState(20);

    useEffect(() => {
        if(velocidad > 2 && velocidad !== 20){
            setTimeout(() => {
                setVelocidad(velocidad - 1)
            }, 1000);
        }
    },[velocidad])


    return (
        <div className={style.containerSpinnerFront}>
        <ListFront />
        <div className={style.menu} style={{animationDuration:`${velocidad}s`}}>
            <div className={style.toggle}
            onClick={() => velocidad === 20&& setVelocidad(19)}
            ><TbBrandJavascript color='orange'/></div>
                <li className={style.li1}>
                    <span style={{boxShadow:velocidad < 20&&`2px 2px ${20 - velocidad}px crimson`}}><TbBrandHtml5 color='orange'/></span>
                </li>
                <li className={style.li2}>
                    <span style={{boxShadow:velocidad < 20&&`2px 2px ${20 - velocidad}px crimson`}}><TiCss3 color='blue'/></span>
                </li>
                <li className={style.li3}>
                    <span style={{boxShadow:velocidad < 20&&`2px 2px ${20 - velocidad}px crimson`}}><FaReact color='blue'/></span>
                </li>
                <li className={style.li4}>
                    <span style={{boxShadow:velocidad < 20&&`2px 2px ${20 - velocidad}px crimson`}}><FaAngular color='crimson'/></span>
                </li>
                <li className={style.li5}>
                    <span style={{boxShadow:velocidad < 20&&`2px 2px ${20 - velocidad}px crimson`}}><FaBootstrap color='purple'/></span>
                </li>
                <li className={style.li6}>
                    <span style={{boxShadow:velocidad < 20&&`2px 2px ${20 - velocidad}px crimson`}}><SiJquery color='purple'/></span>
                </li>
                <li className={style.li7}>
                    <span style={{boxShadow:velocidad < 20&&`2px 2px ${20 - velocidad}px crimson`}}><SiTypescript color='blue'/></span>
                </li>
                <li className={style.li8}>
                    <span style={{boxShadow:velocidad < 20&&`2px 2px ${20 - velocidad}px crimson`}}><SiRedux color='lightpurple'/></span>
                </li>
        </div>

               {velocidad < 20 ? <div className={style.buttonSpinner} style={stylePause}>
                <span style={{cursor:'pointer', padding:'5px'}}>
                    <FaPauseCircle onClick={() => setVelocidad(20)}/>
                </span>
                </div>:
                <div className={style.buttonSpinner} style={stylePause}>
                <span style={{cursor:'pointer', padding:'5px'}} onClick={() => setVelocidad(19)}>
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

export default Front