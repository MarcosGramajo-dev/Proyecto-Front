import React , {useState} from 'react'
import '../Styles/NuevoUsuario.css'

export default function Socio({socios, usuarios, añadir}) {

    const [nombre, setNombre] = useState('')
    const [libro, setLibro] = useState('')

  const pacu = socios.filter(el => nombre === el.nombre) // sacar el objeto este y crear uno nuevo con el dato de Nombre y Libro, al objeto que sacamos de aqui lo pasamos a añadir
  
  
  console.log(pacu)
  function ñandu(e){
    e.preventDefault();
    const dorado = {nombre, libro}
    añadir(dorado)
    setNombre('')
    setLibro('')
    
  }


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
          
            <form className={className} onSubmit={ñandu}>
              <div>

                <h3>CARGAR PRESTAMOS DE SOCIO</h3>

                <label htmlFor="nombreSocio">Nombre de socio</label>               
                   <select id='nombreSocio' value={nombre} required onChange={(e) => setNombre(e.target.value)}>
                        <option>{''}</option>
                        {socios.map(el =>
                          <option key={crypto.randomUUID()} value={el.nombre}>{el.nombre}</option>
                          )}
                    </select>
                <br/>
                <label htmlFor="libro">Titulo del Libro</label>
                          <select id="libro" value={libro} required onChange={e => setLibro(e.target.value)}>
                              <option>{''}</option>
                              {usuarios.map(el => <option key={crypto.randomUUID()}>{el.libro}</option>)}
                          </select>


                <br/>
                <label htmlFor="date1">Fecha de Devolucion</label>
                <input id="date1" name="date1" type="date" className="date input-invalido"></input>
                <br/>
                <input  className="input-button" type="submit" value="Agregar"></input>


              </div>
            </form>
        </div>

    );
  }