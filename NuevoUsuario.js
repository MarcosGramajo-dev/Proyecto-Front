import React, { useState } from 'react'
import '../Styles/NuevoUsuario.css'



export default function NuevoUsuario({ id, addUser}){ 
    
    const [usuario, setUsuario] = useState({})
    const [sim, setSim] = useState(true)
    const [className, setClassName] = useState("formulario-active")

  /*   const vacio = {
        nombre:'',
        telefono:'',
        direccion:'',
        libro:'',
        date:''
    } */

    function handleForm(e){

        setUsuario(
            {...usuario,
            id: id, 
            socio : e.target.checked, //revisando inputs
            [e.target.name] : e.target.value
            }//agregar aqui el estado de edit??  se puede agregar afuera y elegir el item por ID
        )
    }
    
    /* function limpiar(){
        setUsuario(vacio)
    } */

    function enviar(e){
        e.preventDefault();
        addUser(usuario)
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

                        <form className={className} onSubmit={enviar}>
                            <div>
                                
                                <button className="close-2" onClick={visible}>X</button>

                                <h3>CARGAR PRESTAMOS DE USUARIO</h3>

                                <label htmlFor="nombre">Nombre y Apellido</label>
                                <input className="input" id="nombre" name="nombre" onChange={handleForm} required></input>
                                <br/>

                                <label htmlFor="telefono">Telefono</label>
                                <input className="input" id="telefono" name="telefono" onChange={handleForm} required></input>
                                <br/>

                                <label htmlFor="direccion">Direccion</label>
                                <input className="input" id="direccion" name="direccion" onChange={handleForm} required></input>
                                <br/>

                                <label htmlFor="libro">Titulo del Libro</label>
                                <input className="input" id="libro" name="libro" onChange={handleForm} required></input>
                                <br/>

                                <label htmlFor="socio">¿Socio?</label>
                                <input className="input" type="checkbox" id="socio" name="socio"  onChange={handleForm}></input>
                                <br/>



                                <label htmlFor="date">Fecha de Devolucion</label>
                                <input className="input date" id="date" name="date" type="date" onChange={handleForm} required></input>
                                <br/>

                                <input className="input-button" type="submit" value="Agregar"></input>
                            </div>
                        </form>

            </div>
        );
    }