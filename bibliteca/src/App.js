
import React, {useEffect, useState} from  'react'
import './App.css';
import './Styles/Responsive.css'
import Editando from './components/Editando'
import NuevoUsuario from './components/NuevoUsuario'
import Tabla from './components/Tabla'
import Socio from './components/Socio'


function App() {
  

  const localStorageData = localStorage.getItem("usuarios")

  const [usuarios, setUsuario] = useState(() =>
     {if(localStorageData)
      {return JSON.parse(localStorageData)}
      else{
        return []
      }
    }
      );
    
      const filtroSocios = usuarios.filter(el => el.socio === true)

      const [estado, setEstado] = useState(false)
      const [dataEdit, setDataedit] = useState(null)

      const [id, setId] = useState(0) //REVISAR

    useEffect(
          ()=> {localStorage.setItem("usuarios", JSON.stringify(usuarios))}
    , [usuarios])
  
  function añadir(nuevoItem){
    setId(id + 1) //REVISAR
    setUsuario([...usuarios, nuevoItem])
    localStorage.setItem("usuarios", JSON.stringify(usuarios))
  }
  
  function jirafa(id, enEdicion){
    setEstado(true)
    setDataedit(enEdicion)
  }

  function guardarCambios(id, hipopotamo){
    setEstado(false)
    setUsuario(usuarios.map(el => (el.id === id ? hipopotamo : el)))
  }//ME GUARDA LOS CAMBIOS SEGUN EL ID... 🦛 = AL USUARIO ACTUAL||

  function borrar(id){
    const borrador = usuarios.filter(el => el.id !== id)
    setUsuario(borrador)
  }

  return (
    <div className="body">
      <div className="contenedor2">
      <Socio socios={filtroSocios} usuarios={usuarios} añadir={añadir}/>
        { estado ? <Editando usuarios={dataEdit} actualizar={guardarCambios}/>
        : <NuevoUsuario id={id} addUser={añadir} />}
      </div>
        <Tabla usuarios={usuarios} editando={jirafa} borrar={borrar}/>
    </div>
  );
}

export default App;
  