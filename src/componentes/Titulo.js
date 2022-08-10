import React from "react";
import { ReactDOM } from "react";

const Titulo = ({usuario = 'Usuario', color = 'Grey'}) => {
    return(
        <h1 className='titulo' style={{color: color}}>Bienvenido {usuario}</h1>
    );
}

export {Titulo};