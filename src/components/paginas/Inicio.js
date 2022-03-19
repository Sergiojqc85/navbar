import React, { useState } from 'react'
import ItemListContainer from '../ItemlistContainer/ItemListContainer';
import Seccion1 from '../Secciones/Seccion1';
import ItemCounter from '../ItemCounter';

export default function Inicio() {
  const contando ='(soy el contador) este mensaje viene desde App.js'
  const [mostrar, setMostrar] = useState(false)

  const verMas = () =>{
    setMostrar(!mostrar)
    console.log(mostrar)
       

  }

  
  return (
    <div>
        <h1>Pagina de inicio</h1>
        <ItemListContainer Saludo='Bienvenidos a la pagina...'/>        
        <Seccion1 greeting='Nueva sección con Greeting'/>
        <ItemCounter contando = {contando} valorInitial = {1} stock={5}/>
        {mostrar ? <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad error quo ducimus adipisci necessitatibus sint ea fugit dolore quibusdam architecto.</span> : ''}
        <button onClick={verMas}>{mostrar ? 'Ver menos' : 'Ver más'}</button>

    </div>
  )
}
