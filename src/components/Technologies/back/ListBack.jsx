import { useState } from "react";
import style from "./back.module.css";

const descripcion = {
    node: `Ideado como un entorno de ejecución de JavaScript orientado a eventos asíncronos, Node.js está diseñado para crear aplicaciones network escalables.`,
    express:`Express es una infraestructura de aplicaciones web Node.js mínima y flexible que proporciona un conjunto sólido de características para las aplicaciones web y móviles.`,
    sequelize:`Sequelize es un ORM para Nodejs que nos permite manipular varias bases de datos SQL de una manera bastante sencilla, entre estas bases de datos podemos encontrar: mysql, sqlite, postgres, mssql.`,
    sql:`SQL por sus siglas en inglés significa Lenguaje de Consulta Estructurada (Structured Query Language), es un lenguaje de programación diseñado para actualizar, obtener, y calcular información en bases de datos relacionales.`,
    postgres:`PostgreSQL es un servidor de base de datos objeto relacional libre, ya que incluye características de la orientación a objetos, como puede ser la herencia, tipos de datos, funciones, restricciones, disparadores, reglas e integridad transaccional, liberado bajo la licencia BSD.`,
    firebase:`Firebase es una plataforma para dispositivos móviles que puede utilizar para desarrollar aplicaciones rápidamente. Le permite consultar fácilmente el rendimiento de sus aplicaciones.`
}


const ListBack = () => {

    const [ descList, setDescList ] = useState('');

  return (
    <div
      className={style.containerList}>
      {descList && <div className={style.descripcionList}>{descList}</div>}
      <ul>
        <li 
        onMouseOver={() => setDescList(descripcion.node)}
        onMouseLeave={() => setDescList('')}
        >NODE.JS</li>
        <li
        onMouseOver={() => setDescList(descripcion.express)}
        onMouseLeave={() => setDescList('')}
        >EXPRESS</li>
        <li
        onMouseOver={() => setDescList(descripcion.sequelize)}
        onMouseLeave={() => setDescList('')}
        >SEQUELIZE</li>
        <li
          onMouseOver={() => setDescList(descripcion.sql)}
          onMouseLeave={() => setDescList('')}
        >SQL</li>
        <li
          onMouseOver={() => setDescList(descripcion.postgres)}
          onMouseLeave={() => setDescList('')}
        >POSTGRESQL</li>
        <li
          onMouseOver={() => setDescList(descripcion.firebase)}
          onMouseLeave={() => setDescList('')}
        >FIREBASE</li>
      </ul>
    </div>
  );
};

export default ListBack;