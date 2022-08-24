import style from './contact.module.css';
import img1 from '../../image/contact/contact1.png';
import img2 from '../../image/contact/contact2.png';
import img3 from '../../image/contact/contact3.png';
import emailjs from "@emailjs/browser";
import Swal from 'sweetalert2';

export default function Contactame() {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7d28fhe",
        "template_92wp40v",
        e.target,
        "OTkSGnY6v0ZwviSEg",
      )
      .then(
        () => {
          Swal.fire({
            title: 'Genial, pronto me pondre en contacto',
            icon:'success',
            width: 400,
            padding: '3em',
            color: '#2ec4b6',
            background: '#fff',
            backdrop: `
              rgba(0,0,123,0.4)
              left top
              no-repeat
            `
          })
          reset(e.target);
        },
        (error) => {
          Swal.fire({
            title: 'Opss.. Algo a salido mal',
            icon:'warning',
            width: 400,
            padding: '3em',
            color: '#2ec4b6',
            background: '#ff4d6d',
            backdrop: `
              rgba(0,0,12,0.4)
              left top
              no-repeat
            `
          })
          reset(e.target);
        },
      );
  };

  const reset = (e) => {
    e.name.value = "";
    e.Correo.value = "";
    e.message.value = "";
  };

  return (
    <div className={style.containerCont}>
      <div className={style.containerCard}>
          <h1>Contáctame</h1>
        <div className={style.form}>
          <form onSubmit={(e) => sendEmail(e)}>
            <label htmlFor="name">Nombre</label>
            <br />
            <input
              type="text"
              name="name"
              placeholder="Nombre Completo"
              autoComplete="off"
              required
            />
            <br />
            <label htmlFor="Correo">Correo Electronico</label>
            <br />
            <input
              type="email"
              name="Correo"
              placeholder="joseSarabia@ejemplo.com"
              autoComplete="off"
              required
            />
            <br />
            <label htmlFor="message">Mensaje</label>
            <br />
            <textarea
              name="message"
              rows="6"
              placeholder=""
              autoComplete="off"
              required
            />
            <br />
            <button className="buttonForm" type='submit'>Enviar</button>
          </form>
          <div className={style.containerImage}>
            <img src={img1} alt="one" style={{transform:'translate(-200px, -60%)'}}/>
            <img src={img2} alt="two" style={{transform:'translate(-300px, 180%)'}}/>
            <img src={img3} alt="three" style={{transform:'translate(100px, 120%)'}}/>
          </div>
        </div>
      </div>
    </div>
  );
}
