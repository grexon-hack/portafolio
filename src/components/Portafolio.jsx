import image from '../image/calculadoraApp.PNG';
import image2 from '../image/climaApp.PNG';
import image3 from '../image/countryApp.PNG';
import image4 from '../image/moviesApp.PNG';
import image5 from '../image/videogameApp.PNG';
import image6 from '../image/clock25+5.PNG';


let arrayPicture = [{
    nombre: 'Calculadora',
    img: image,
    info: 'calculadora creada con tecnologias como: html, css, react y redux',
    url: 'https://codepen.io/gregori-S23',

},{
    nombre: 'App-Meteorologica',
    img: image2,
    info: 'Aplicación creada haciendo peticion a API externa con tecnologias como: html, css, react, redux e integración de mapBox-GL',
    url: 'https://github.com/grexon-hack/app-meteorologica',

},{
    nombre: 'Countries-App',
    img: image3,
    info: 'Aplicacion creada con tecnologias como: html, css, react, redux, node.js, express, sequelize y postgres',
    url: 'https://github.com/grexon-hack?tab=repositories',

}, {
    nombre: 'Movies-App',
    img: image4,
    info: 'Aplicacion creada haciendo peticion a API externa con tecnologias como: html, css, react y redux',
    url: 'https://github.com/grexon-hack/movies',

}, {
    nombre: 'Sala-Videogame',
    img: image5,
    info: 'Aplicacion creada con tecnologias como: html, css y d3.js',
    url: 'https://codepen.io/gregori-S23',

}, {
    nombre: 'clock-Break',
    img: image6,
    info: 'Aplicacion creada con tecnologias como: html, css, less, react y redux',
    url: 'https://codepen.io/gregori-S23',

}]


export default function Portafolio() {

    return (
        <div className="container_portafolio">
            <div className="mostrador">

            <h1>
                mis proyectos
            </h1>
            <div className="mostrador-imagen">
                {
                    arrayPicture.map((data, i) => {
                        return(
                            <div key={i} className='imagenesApp'>
                                <h3>{data.nombre}</h3>
                                <img src={data.img} alt="imagen" />
                                <div className='capaInfo'>
                                    <p>{data.info}</p>
                                    <button><a href={data.url} target="_blank" rel="noopener noreferrer">Ver</a></button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            </div>
        </div>
    )
}