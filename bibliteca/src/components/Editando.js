import React, {useState} from "react";
import '../Styles/Editando.css'

export default function Editando({usuarios, actualizar, estado}){
   
const [cambios, setCambios] = useState(usuarios)
const [className, setClassName] = useState("formulario-active")
   
function navegandoPa(e){
    setCambios({
        ...cambios,
        [e.target.name] : e.target.value
    })
}

function visible(e){

    e.preventDefault()

  if(className === "formulario-active"){
    setClassName("formulario-desactive")
  }
  else{
    setClassName("formulario-active")
  }
}
   
    return(
        <div className="contenedor">
            <form  className={className} onSubmit={(e) => {e.preventDefault(); actualizar(usuarios.id, cambios); visible(e)}}>
                            <div className="conteinerEditar">
                                <button className="close-3" onClick={visible}>X</button>
                                <h3>EDITAR DATOS USUARIO</h3>

                                <label htmlFor="nombre">Nombre y Apellido</label>
                                <input className="input" id="nombre" value={cambios.nombre} name="nombre" onChange={navegandoPa} ></input>

                                <label htmlFor="telefono">Telefono</label>  
                                <input className="input" id="telefono" value={cambios.tel} name="tel"onChange={navegandoPa} ></input>

                                <label htmlFor="direccion">Direccion</label>
                                <input className="input" id="direccion" value={cambios.dir} name="dir" onChange={navegandoPa}></input>

                                <label htmlFor="libro">Titulo del Libro</label>
                                <input className="input" id="libro" value={cambios.libro} name="libro" onChange={navegandoPa}></input>

                                <label htmlFor="date">Fecha de Devolucion</label>
                                <input className="input date" id="date" value={cambios.fecha} name="fecha" type="date" onChange={navegandoPa} ></input>

                                <input className="input-button" type="submit" value="Guardar"></input>
                            </div>
                        </form>
        </div>
    )
}