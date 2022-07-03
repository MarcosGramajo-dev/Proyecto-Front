import logo from './logo.svg';
import './App.css';

import NuevoUsuario from './components/NuevoUsuario'
import Socio from './components/Socio'
import Tabla from './components/Tabla'

function App() {
  return (
    <div className="body">
      <div className="contenedor2">
        <Socio/>
        <NuevoUsuario/>
      </div>
        <Tabla/>
    </div>
  );
}

export default App;
