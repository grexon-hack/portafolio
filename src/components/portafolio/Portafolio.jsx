import style from './portafolio.module.css';
import image2 from '../../image/climaApp.PNG';
import image3 from '../../image/countryApp.PNG';
import image4 from '../../image/moviesApp.PNG';
import image7 from '../../image/yourjob.PNG';
import image8 from '../../image/softpel.PNG';



let arrayPicture = [
{
    nombre: 'YourJob',
    img: image7,
    info: 'aplicacion creada para busqueda tanto de trabajos, como de empleados. hecha con react.js, redux, node.js, sequelize, express, postgres',
    url: 'https://github.com/grexon-hack/Your-Job',
    deploy: 'https://your-job-seven.vercel.app'
},
{
    nombre :"Softpel",
    img:image8,
    info:"Software enfocado a la venta de servicios de peluquería a domicilio, con Paypal incorporado como metodo de pago",
    url:"https://github.com/grexon-hack?tab=repositories",
    deploy:"https://softpel2.vercel.app"
},
{
    nombre: 'App-Meteorologica',
    img: image2,
    info: 'Aplicación creada haciendo peticion a API externa con tecnologias como: html, css, react, redux e integración de mapBox-GL',
    url: 'https://github.com/grexon-hack/app-meteorologica',

},{
    nombre: 'Countries-App',
    img: image3,
    info: 'Aplicacion creada con tecnologias como: html, css, react, redux, node.js, express, sequelize y postgres',
    url: 'https://github.com/grexon-hack/Countries-PI',

},{
    nombre: 'Movies-App',
    img: image4,
    info: 'Aplicacion creada haciendo peticion a API externa con tecnologias como: html, css, react y redux',
    url: 'https://github.com/grexon-hack/movies',

}]


export default function Portafolio() {

    return (
        <div className={style.containerPort} id='portafolio'>
            <h1>
                Mis proyectos
            </h1>
            <div className={style.containerShowCard}>
                {
                    arrayPicture.map((data, index) => {
                        return (
                            <div key={index} className={style.containerCard}>
                                <div className={style.card}>
                                    <img src={data.img} alt={data.nombre} />
                                    <h2>{data.nombre}</h2>
                                    <p>{data.info}</p>
                                    <div className={style.buttonCard}>
                                    <a href={data.url} target="_blank" rel="noopener noreferrer"><span>Github</span></a>
                                    {data.deploy&&<a href={data.deploy} target="_blank" rel="noopener noreferrer"><span>Deploy</span></a>}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}