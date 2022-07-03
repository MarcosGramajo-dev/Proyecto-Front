import React, {Components}from 'react'
import '../Styles/NuevoUsuario.css'

class NuevoUsuario extends React.Component { 
    render() {
        return(
            <div className="contenedor">
                <form className="formulario">
                    <label for="nombre">Nombre y Apellido</label>
                    <input id="nombre" name="nombre"></input>

                    <label for="telefono">Telefono</label>
                    <input id="telefono" name="telefono"></input>

                    <label for="direccion">Direccion</label>
                    <input id="direccion" name="direccion"></input>

                    <label for="libro">Titulo del Libro</label>
                    <input id="libro" name="libro"></input>

                    <label for="date">Fecha de Devolucion</label>
                    <input id="date" name="date" type="date" className="date"></input>

                    <input type="submit" value="Agregar" ></input>
                </form>
            </div>
        );
    }
  }
  
  export default NuevoUsuario;