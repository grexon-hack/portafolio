

export default function Tecnologias() {
    return(
        <div className="containerTecnologias">
            <h1>Mis tecnologias</h1>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <h3>Front End</h3>
                        <ul>
                            <li>Javascript</li>
                            <li>Jquery</li>
                            <li>React.js</li>
                            <li>Redux</li>
                            <li>Angular</li>
                            <li>Html</li>
                            <li>Css</li>
                        </ul>
                    </div>
                    <div className="col-lg-4 bg-dark text-white">
                        <h3>Back End</h3>
                        <ul>
                            <li>Node.js</li>
                            <li>Express</li>
                            <li>Sequelize</li>
                        </ul>
                    </div>
                    <div className="col-lg-4">
                        <div className="row">
                        <h3>Base de Datos</h3>
                            <ul>
                                <li>SQL</li>
                                <li>PostgreSQL</li>
                                <li>Firebase</li>
                            </ul>
                        </div>
                        <div className="row">
                            <h3>Extra</h3>
                            <ul>
                                <li>Bootstrap</li>
                                <li>Metodologia SCRUM</li>
                                <li>Trello</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}