import { useState } from "react";
import style from "./front.module.css";

const descripcion = {
  javascript: `JAVASCRIPT es un lenguaje de secuencias de comandos que 
    te permite crear contenido de actualización dinámica, controlar multimedia, 
    animar imágenes y prácticamente todo lo demás. (Está bien, no todo, pero es 
    sorprendente lo que puedes lograr con unas pocas líneas de código JavaScript)`,
  html:`El Lenguaje de Marcado de Hipertexto (HTML) es el código que se utiliza 
    para estructurar y desplegar una página web y sus contenidos.`,
  css: `Hojas de Estilo en Cascada (del inglés Cascading Style Sheets) o CSS es 
  el lenguaje de estilos utilizado para describir la presentación de documentos HTML 
  o XML (en-US) (incluyendo varios languages basados en XML como SVG, MathML o XHTML).`,
  typescript:`TYPESCRIPT es un lenguaje de programación libre y de código abierto desarrollado y 
  mantenido por Microsoft. Es un superconjunto de JavaScript, que esencialmente añade 
  tipos estáticos y objetos basados en clases`,
  react: `REACT es una biblioteca Javascript de código abierto diseñada para crear interfaces
   de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola 
   página. Es mantenido por Facebook y la comunidad de software libre.`,
  redux:`REDUX es un patrón de arquitectura de datos que permite manejar el estado de la 
  aplicación de una manera predecible. Está pensado para reducir el número de relaciones 
  entre componentes de la aplicación y mantener un flujo de datos sencillo.`,
  angular:`ANGULAR es un Framework de JavaScript de código abierto escrito en TypeScript. 
  Su objetivo principal es desarrollar aplicaciones de una sola página. Google se 
  encarga del mantenimiento y constantes actualizaciones de mejoras para este framework`,
  bootstrap:`BOOTSTRAP es una biblioteca multiplataforma o conjunto de herramientas de 
  código abierto para diseño de sitios y aplicaciones web.`,
  jquery:`JQUERY es una librería desarrollada en 2006 por John Resig que permite añadir una 
  capa de interacción AJAX entre la web y las aplicaciones que desarrollemos controlando 
  eventos, creando animaciones y diferentes efectos para enriquecer la experiencia de 
  usuario`
};

const ListFront = () => {

    const [ descList, setDescList ] = useState('');

  return (
    <div
      className={style.containerList}>
      {descList && <div className={style.descripcionList}>{descList}</div>}
      <ul>
        <li 
        onMouseOver={() => setDescList(descripcion.javascript)}
        onMouseLeave={() => setDescList('')}
        >JAVASCRIPT</li>
        <li
        onMouseOver={() => setDescList(descripcion.html)}
        onMouseLeave={() => setDescList('')}
        >HTML</li>
        <li
        onMouseOver={() => setDescList(descripcion.css)}
        onMouseLeave={() => setDescList('')}
        >CSS</li>
        <li
          onMouseOver={() => setDescList(descripcion.typescript)}
          onMouseLeave={() => setDescList('')}
        >TYPESCRIPT</li>
        <li
          onMouseOver={() => setDescList(descripcion.react)}
          onMouseLeave={() => setDescList('')}
        >REACT</li>
        <li
          onMouseOver={() => setDescList(descripcion.redux)}
          onMouseLeave={() => setDescList('')}
        >REDUX</li>
        <li
          onMouseOver={() => setDescList(descripcion.angular)}
          onMouseLeave={() => setDescList('')}
        >ANGULAR</li>
        <li
          onMouseOver={() => setDescList(descripcion.bootstrap)}
          onMouseLeave={() => setDescList('')}
        >BOOTSTRAP</li>
        <li
        onMouseOver={() => setDescList(descripcion.jquery)}
        onMouseLeave={() => setDescList('')}
        >JQUERY</li>
      </ul>
    </div>
  );
};

export default ListFront;
