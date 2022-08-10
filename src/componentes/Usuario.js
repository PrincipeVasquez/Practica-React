import React from "react";
import { ReactDOM } from "react";
import {Titulo} from "./Titulo";

const Usuario = () => {
    const amigos = ['Harol', 'Alan', 'Roger'];
    const pais = undefined

    return(
      <>
        <Titulo usuario="Alan" color = 'Red' />
        <Titulo usuario = 'Ruytell' color = 'Green' />
        <p>Estoy aprendiendo React</p>
        {pais && <p>Tú eres de {pais}</p>}
        {amigos.map((amigo, index) => <li key={index}>{amigo}</li>)}
      </>
    )
  }

  export default Usuario;