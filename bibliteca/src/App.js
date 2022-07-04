
import React, {useEffect, useState} from  'react'
import './App.css';

import NuevoUsuario from './components/NuevoUsuario'
import Socio from './components/Socio'
import Tabla from './components/Tabla'

function App() {

  let [usuarios, setUsuario] = useState([]);


        
  useEffect(() =>{
      const localStorageData = localStorage.getItem("usuarios")
      localStorageData && setUsuario( JSON.parse( localStorageData))


  },[])

  return (
    <div className="body">
      <div className="contenedor2">
        <Socio/>
        <NuevoUsuario addUser={setUsuario} usuarios={usuarios}/>
      </div>
        <Tabla usuarios={usuarios}/>
    </div>
  );
}

export default App;
