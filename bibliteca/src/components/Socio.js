import React from 'react'
import '../Styles/NuevoUsuario.css'

function Socio() {
    return (
        <div className="contenedor">
            <form className="formulario">
                <label for="nombreSocio">Nombre de socio</label>
                <input id="nombreSocio" name="nombreSocio"></input>

                <label for="libro">Titulo del Libro</label>
                <input id="libro" name="libro"></input>

                <label for="date1">Fecha de Devolucion</label>
                <input id="date1" name="date1" type="date" className="date"></input>

                <input type="submit" value="Agregar" ></input>
            </form>
        </div>

    );
  }
  
  export default Socio;