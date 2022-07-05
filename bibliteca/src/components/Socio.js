import React , {useState} from 'react'
import '../Styles/NuevoUsuario.css'
import '../Styles/Socio.css'
import '../Styles/Responsive.css'

export default function Socio({socios, usuarios, añadir}) {

    //const [seleccion, setSeleccion] = useState('')
    const [nombre, setNombre] = useState('')
    //const [libro, setLibro] = useState()

    const elegido = socios.filter(el => el.name === nombre)

  function ñandu(e){
    e.preventDefault();
    añadir(elegido)
  }


    console.log(nombre)

    const [className, setClassName] = useState("formulario-desactive")
    
        function visible(e){
          e.preventDefault();
          if(className === "formulario-active"){
            setClassName("formulario-desactive")
          }
          else{
            setClassName("formulario-active")
          }
        }
        function cargar(e){
          e.preventDefault();
          visible(e);
        }
      
      return (
        <div className="contenedor">
          <button onClick={visible} className="select">Cargar Socio</button>
            <form className={className} onSubmit={ñandu}>
              <div className="conteinerSocio">
              <button className="close-1" onClick={visible}>X</button>
                <h3>CARGAR PRESTAMOS DE SOCIO</h3>

                <label htmlFor="nombreSocio">Nombre de socio</label>               
                   <select id='nombreSocio' value={nombre} onChange={(e) => setNombre(e.target.value)}>
                        {socios.map(el =>
                          <option key={el.id} value={el.nombre}>{el.nombre}</option>
                        )}
                    </select>
                <label htmlFor="libro">Titulo del Libro</label>
                          <select id="libro">
                              {usuarios.map(el => <option>{el.libro}</option>)}
                          </select>
                <label htmlFor="date1">Fecha de Devolucion</label>
                <input id="date1" name="date1" type="date" className="date input-invalido"></input>
                <input  className="input-button" type="submit" value="Agregar" onClick={cargar}></input>
              </div>
            </form>
        </div>

    );
    
  }