import React, { useState } from 'react'
import '../Styles/NuevoUsuario.css'

export default function NuevoUsuario(){ 

    const [usuario, setUsuario] = useState([])

    const arrayUsuarios = []

    function handleForm(e){
        setUsuario(
            {...usuario,
            [e.target.name] : e.target.value
            }
        )
    }

    function cargar(e){

        e.preventDefault();

        console.log(usuario)
        arrayUsuarios.push(usuario)
        localStorage.setItem( "usuarios" , JSON.stringify(arrayUsuarios))
    }

    function mostrar(e){

        e.preventDefault();

        console.log(localStorage.getItem("usuarios"))
    }

        return(
            <div className="contenedor">
                <form className="formulario">
                    <label htmlFor="nombre">Nombre y Apellido</label>
                    <input id="nombre" name="nombre" onChange={handleForm}></input>

                    <label htmlFor="telefono">Telefono</label>
                    <input id="telefono" name="telefono" onChange={handleForm}></input>

                    <label htmlFor="direccion">Direccion</label>
                    <input id="direccion" name="direccion" onChange={handleForm}></input>

                    <label htmlFor="libro">Titulo del Libro</label>
                    <input id="libro" name="libro" onChange={handleForm}></input>

                    <label htmlFor="date">Fecha de Devolucion</label>
                    <input id="date" name="date" type="date" className="date" onChange={handleForm}></input>

                    <input type="submit" value="Agregar" onClick={cargar}></input>
                    <input type="submit" value="Mostrar" onClick={mostrar}></input>
                </form>
            </div>
        );
    }