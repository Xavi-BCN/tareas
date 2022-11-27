import React, { useState} from 'react';
import '../hojas-de-estilo/TareaFormulario.css'
import { v4 as uuidv4 } from 'uuid';
//uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

function TareaFormulario(props){

  const [input, setInput] = useState('');
  
  const manejarCambio = e => {
    setInput(e.target.value);
  }
  
  const manejarEnvio = e => {
    e.preventDefault();
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    };
    props.onSubmit(tareaNueva);
  };

  return (
    <form className='tarea-formulario'
      onSubmit={manejarEnvio} >
      <input
        className='tarea-input'
        type='text'
        placeholder='Escriba una tarea'
        name='texto'
        onChange={manejarCambio}
      />
      <button className='tarea-boton' >
        Agregar Tarea 
      </button>
    </form>
  )
}
export default TareaFormulario;
