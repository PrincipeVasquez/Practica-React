import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';
import Usuario from './componentes/Usuario';
import formularioInicioSesion from './componentes/formularioInicioSesion';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//       <h1>Hola, Alejandro</h1>
//   </React.StrictMode>
// );

const App = () => {

  const [sesion, cambiarEstadoSesion] = useState(false);

  return(
    sesion === true
  ?
  <>
    <Usuario />
    <button onClick={() => cambiarEstadoSesion(false)}>Cerrar Sesión</button>
  </>
  :
  <>
    <h2>No haz iniciado sesión</h2>
    <formularioInicioSesion />
    <button onClick={() => cambiarEstadoSesion(true)}>Iniciar Sesión</button>
  </> 
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);