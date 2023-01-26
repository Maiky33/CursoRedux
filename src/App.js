import React from 'react';
import Jugadores from './components/Jugadores'
import EquipoSeleccionado from './components/EquipoSeleccionado'
import { Provider } from "react-redux"//react-redux, con provider Proveemos la store Para poder usarla
import Store from './Store'
import './Styles/App.css'

//encerramos con la etiqueta Provider toda app para asi poder acceder a la store dede cualquier punto(redux)
const App = () => (
  <Provider store={Store}>  
    <main className='Main'>  
      <h1>Ed Manager</h1>
      <Jugadores />
      <EquipoSeleccionado/>    
    </main>
  </Provider>
)
  


export default App;
