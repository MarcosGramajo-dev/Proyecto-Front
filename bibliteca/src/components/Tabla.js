import React from 'react'
import '../Styles/Tabla.css'

function Tabla() {
    return (
        <div className="contenedor3">
            <table>
                <thead>
                    <tr>
                        <td>Nombre y Apellido</td>
                        <td>Telefono</td>
                        <td>Direccion</td>
                        <td>Titulo del Libro</td>
                        <td>Fecha de Devolucion</td>
                        <th>Editar</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Nombre y Apellido</td>
                        <td>Telefono</td>
                        <td>Direccion</td>
                        <td>Titulo del Libro</td>
                        <td>Fecha de Devolucion</td>
                        <th><div className="editar">/</div></th>
                        <th><div className="eliminar">X</div></th>
                    </tr>

                    <tr>
                        <td>Nombre y Apellido</td>
                        <td>Telefono</td>
                        <td>Direccion</td>
                        <td>Titulo del Libro</td>
                        <td>Fecha de Devolucion</td>
                        <th><div className="editar">/</div></th>
                        <th><div className="eliminar">X</div></th>
                    </tr>

                </tbody>
            </table>
        </div>

    );
  }
  
  export default Tabla;