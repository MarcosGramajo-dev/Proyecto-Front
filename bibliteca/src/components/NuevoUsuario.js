import React, { useState } from 'react'
import '../Styles/NuevoUsuario.css'



export default function NuevoUsuario({ id, addUser}){ 
    
    const [className, setClassName] = useState("formulario-desactive")

        const [nombre, setNombre] = useState('')
        const [tel, setTel] = useState('')
        const [dir, setDir] = useState('')
        const [libro, setLibro] = useState('')
        const [socio, setSocio] = useState(false)
        const [fecha, setFecha] = useState(null)

    function enviarDatos(e){
        e.preventDefault()

        const paquete = { id, nombre, tel, dir, libro, socio, fecha}//VALIDAR
        addUser(paquete)
        setNombre('')
        setTel('')
        setDir('')
        setLibro('')
        setSocio(false)
        setFecha(null)   

        visible(e); 
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
                <button onClick={visible} className="select">Cargar Nuevo Usuario</button>
                        <form className={className} onSubmit={enviarDatos}>
                            <div className="conteinerUsuario">
                                
                                <button className="close-2" onClick={visible}>X</button>

                                <h3>CARGAR PRESTAMOS DE USUARIO</h3>

                                <label htmlFor="nombre">Nombre y Apellido</label>
                                <input className="input" id="nombre" value={nombre} name="nombre" onChange={(e) => setNombre(e.target.value)} ></input>

                                <label htmlFor="telefono">Telefono</label>
                                <input className="input" id="telefono" name="telefono" value={tel} onChange={(e) => setTel(e.target.value)} ></input>

                                <label htmlFor="direccion">Direccion</label>
                                <input className="input" id="direccion" name="direccion" value={dir} onChange={(e) => setDir(e.target.value)} ></input>

                                <label htmlFor="libro">Titulo del Libro</label>
                                <input className="input" id="libro" name="libro" value={libro} onChange={(e) => setLibro(e.target.value)} ></input>

                                <label htmlFor="socio">¿Socio?</label>
                                <input className="input" type="checkbox" id="socio" name="socio" value={socio} checked={socio}  onChange={(e) => setSocio(!socio)}></input>



                                <label htmlFor="date">Fecha de Devolucion</label>
                                <input className="input date" id="date" name="fecha" type="date" onChange={(e) => setFecha(e.target.value)} ></input>

                                <input className="input-button" type="submit" value="Agregar"></input>
                            </div>
                        </form>

            </div>
        );
    }