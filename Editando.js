import React, {useState} from "react";
import '../Styles/Editando.css'

export default function Editando({usuarios, actualizar}){
   
const [cambios, setCambios] = useState(usuarios)
   
function navegandoPa(e){
    setCambios({
        ...cambios,
        [e.target.name] : e.target.value
    })
}
   
    return(
        <div className="contenedor">
            <form  onSubmit={(e) => {e.preventDefault(); actualizar(usuarios.id, cambios)}}>
                            <div>
                                
                                <h3>EDITAR DATOS USUARIO</h3>

                                <label htmlFor="nombre">Nombre y Apellido</label>
                                <input className="input" id="nombre" value={cambios.nombre} name="nombre" onChange={navegandoPa} ></input>
                                <br/>

                                <label htmlFor="telefono">Telefono</label>  
                                <input className="input" id="telefono" value={cambios.tel} name="tel"onChange={navegandoPa} ></input>
                                <br/>

                                <label htmlFor="direccion">Direccion</label>
                                <input className="input" id="direccion" value={cambios.dir} name="dir" onChange={navegandoPa}></input>
                                <br/>

                                <label htmlFor="libro">Titulo del Libro</label>
                                <input className="input" id="libro" value={cambios.libro} name="libro" onChange={navegandoPa}></input>
                                <br/>

                                <label htmlFor="date">Fecha de Devolucion</label>
                                <input className="input date" id="date" value={cambios.fecha} name="fecha" type="date" onChange={navegandoPa} ></input>
                                <br/>

                                <input className="input-button" type="submit" value="Guardar"></input>
                            </div>
                        </form>
        </div>
    )
}