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
    <div className="container_contactame">
      <div className="contact-target">
        <div className="formulario">
          <h1>Contáctame</h1>
          <form onSubmit={(e) => sendEmail(e)}>
            <input
              type="text"
              name="name"
              placeholder="nombre"
              autoComplete="off"
              required
            />
            <br />
            <input
              type="email"
              name="Correo"
              placeholder="Correo electronico"
              autoComplete="off"
              required
            />
            <br />
            <textarea
              name="message"
              rows="6"
              placeholder="mensaje"
              autoComplete="off"
              required
            />
            <br />
            <button className="buttonForm">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
}
