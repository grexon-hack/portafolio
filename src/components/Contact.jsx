import React, { useEffect, useState } from "react";
import emailjs from '@emailjs/browser';
import image from '../image/thumbs.png'


export default function Contactame() {

    const [exit, setExit] = useState(false);
    const [error, setError] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_7d28fhe', 'template_92wp40v', e.target, 'OTkSGnY6v0ZwviSEg')
          .then((result) => {
              setExit(true)
             reset(e.target)
          }, (error) => {
              setError(true)
              reset(e.target)    
          });
    };

    const reset = (e) => {
        e.name.value = '';
        e.Correo.value = '';
        e.message.value = '';
    }

    useEffect(() => {
        setInterval(() => {
            setExit(false);
            setError(false)
        }, 15000);

    },[exit, error])

    return (
        <div className="container_contactame">
            {
                exit&&(
                    <div className="target exit">
                        <h2>
                            Tu mensaje fue enviado <br /> con Exito
                        </h2>
                        <div style={{backgroundImage: `url(${image})`, width:'100px', height:'100px', backgroundRepeat:'no-repeat'}}>

                        </div>
                    </div>
                )
                
            }
            {
                error&&(<div className="target error">
                <h2>
                    Tu mensaje no fue enviado <br /> con Exito
                </h2>
                </div>)
            }
            <div className="contact-target">
            <div className="formulario">

            <h1>
                contactame
            </h1>
            <form onSubmit={(e) => sendEmail(e)}>
                <input type="text" name="name" placeholder="nombre" autoComplete="off" required/>
                <br />
                <input type="email" name="Correo" placeholder="Correo electronico" autoComplete="off" required/>
                <br />
                <textarea name="message" rows="6" placeholder="mensaje" autoComplete="off" required/>
                <br />
                <button className="buttonForm">Enviar</button>
            </form>
            </div>
            </div>
        </div>
    )
}