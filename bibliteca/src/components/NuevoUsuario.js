import React, { useState } from 'react'
import '../Styles/NuevoUsuario.css'



export default function NuevoUsuario(props){ 

    const [usuario, setUsuario] = useState({})

    let [className, setClassName] = useState("formulario-desactive")

    function handleForm(e){

        setUsuario(
            {...usuario,
            [e.target.name] : e.target.value
            }
        )
    }

    function cargar(e){

        e.preventDefault();

        let dataDBArray = [...props.usuarios]
        dataDBArray.push(usuario)

        localStorage.setItem( "usuarios" , JSON.stringify(dataDBArray))
        props.addUser(dataDBArray)

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
                <button onClick={visible} className="select">Cargar Usuario</button>

                        <form className={className}>
                            <div>
                                
                                <button className="close-2" onClick={visible}>X</button>

                                <h3>CARGAR PRESTAMOS DE USUARIO</h3>

                                <label htmlFor="nombre">Nombre y Apellido</label>
                                <input className="input" id="nombre" name="nombre" onChange={handleForm}></input>

                                <label htmlFor="telefono">Telefono</label>
                                <input className="input" id="telefono" name="telefono" onChange={handleForm}></input>

                                <label htmlFor="direccion">Direccion</label>
                                <input className="input" id="direccion" name="direccion" onChange={handleForm}></input>

                                <label htmlFor="libro">Titulo del Libro</label>
                                <input className="input" id="libro" name="libro" onChange={handleForm}></input>

                                <label htmlFor="date">Fecha de Devolucion</label>
                                <input className="input date" id="date" name="date" type="date" onChange={handleForm}></input>

                                <input className="input-button" type="submit" value="Agregar" onClick={cargar}></input>
                            </div>
                        </form>

            </div>
        );
    }