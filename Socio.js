import React , {useState} from 'react'
import '../Styles/NuevoUsuario.css'

function Socio() {
    const socios = [
        {
          nombre: "Marcos Gramajo",
          telefono: 3814675299,
          direccion: "Av. Juan B. Justo 2649" 
        },
        {
          nombre: "Isabel Mateos",
          telefono: 3816342952,
          direccion: "Cl. Jordi, 6, Casa 1" 
        },
        {
          nombre: "Maria Piedad Caamaño",
          telefono: 3815606219,
          direccion: "Vereda Ordoñez, 488, Piso 49" 
        },
        {
          nombre: "Jose Alejandro Borrego",
          telefono: 3813418914,
          direccion: "Cl. Patricia Márquez, Apto 83" 
        },
        {
          nombre: "Roman Rivera",
          telefono: 3815875313,
          direccion: "Cl. Carbajal, Apto 69" 
        }
      ]

    if(localStorage.getItem("socio")){
        console.log("existe")
    }

    else{
        localStorage.setItem("socios", JSON.stringify(socios))
    }

    let [socio, setSocio] = useState([])

    let [className, setClassName] = useState("formulario-desactive")
    
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
          
            <form className={className}>
              <div>

              <button className="close-1" onClick={visible}>X</button>

                <h3>CARGAR PRESTAMOS DE SOCIO</h3>

                <label htmlFor="nombreSocio">Nombre de socio</label>
                <input className="input-success" type="select" id="nombreSocio" name="nombreSocio"></input>
                <br/>
                <label htmlFor="libro">Titulo del Libro</label>
                <input  className="input-invalido"id="libro" name="libro"></input>
                <br/>
                <label htmlFor="date1">Fecha de Devolucion</label>
                <input id="date1" name="date1" type="date" className="date input-invalido"></input>
                <br/>
                <input  className="input-button" type="submit" value="Agregar" onClick={cargar}></input>


              </div>
            </form>
        </div>

    );
  }
  
  export default Socio;