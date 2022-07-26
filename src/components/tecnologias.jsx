import { TbBrandJavascript } from 'react-icons/tb';
import { DiJqueryLogo } from 'react-icons/di';
import { FaReact, FaHtml5, FaCss3, FaNode, FaBootstrap, FaTrello } from 'react-icons/fa';
import { SiRedux, SiAngular, SiExpress, SiSequelize, SiMicrosoftsqlserver, SiPostgresql, SiFirebase } from 'react-icons/si'

export default function Tecnologias() {
    return(
        <div className="containerTecnologias">
            <h1>Mis Herramientas de trabajo</h1>
            <br />
            <br />

            <div className="container border">
                <div className="row">
                    <div className="col-lg-4">
                        <h3>Front End</h3>
                        <ul>
                            <li><TbBrandJavascript style={{fontSize: '20px', color:'darkOrange'}}/> Javascript</li>
                            <li><DiJqueryLogo style={{fontSize: '20px'}}/> Jquery</li>
                            <li><FaReact style={{fontSize: '20px', color:'blue'}}/> React.js</li>
                            <li><SiRedux style={{fontSize: '20px', color:'purple'}}/> Redux</li>
                            <li><SiAngular style={{fontSize: '20px', color:'red'}}/> Angular</li>
                            <li><FaHtml5 style={{fontSize: '20px', color:'darkOrange'}}/> Html</li>
                            <li><FaCss3 style={{fontSize: '20px', color:'blue'}}/> Css</li>
                        </ul>
                    </div>
                    <div className="col-lg-4 bg-dark text-white">
                        <h3>Back End</h3>
                        <ul>
                            <li><FaNode style={{fontSize: '20px'}}/> Node.js</li>
                            <li><SiExpress style={{fontSize: '20px'}}/> Express</li>
                            <li><SiSequelize style={{fontSize: '20px'}}/> Sequelize</li>
                        </ul>
                    </div>
                    <div className="col-lg-4">
                        <div className="row">
                        <h3>Base de Datos</h3>
                            <ul>
                                <li><SiMicrosoftsqlserver style={{fontSize: '20px'}}/> SQL</li>
                                <li><SiPostgresql style={{fontSize: '20px'}}/> PostgreSQL</li>
                                <li><SiFirebase style={{fontSize: '20px', color:'orange'}}/> Firebase</li>
                            </ul>
                        </div>
                        <div className="row">
                            <h3>Extra</h3>
                            <ul>
                                <li><FaBootstrap style={{fontSize: '20px', color:'purple'}}/> Bootstrap</li>
                                <li> Metodologia SCRUM</li>
                                <li><FaTrello style={{fontSize: '20px'}}/> Trello</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}