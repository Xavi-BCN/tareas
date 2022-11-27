import '../hojas-de-estilo/Tarea.css'
import cancelar from '../imagenes/cancelar.png'

function Tarea ({ id, texto, completada, completarTarea, eliminarTarea }){


  return(
    <div className={completada? 'tarea-contenedor completada': 'tarea-contenedor'} >
      <div className='tarea-texto'
        onClick={() => completarTarea(id)} >
        {texto}
      </div>
      <div className="tarea-contenedor-iconos"
        onClick={() => eliminarTarea(id)} >
        <img
          src={cancelar}
          alt="Icon"
         />
      </div>
    </div>
  );

}

export default Tarea;