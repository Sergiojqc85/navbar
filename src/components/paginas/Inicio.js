import React from 'react';
import ItemListContainer from '../ItemlistContainer/ItemListContainer';
import Seccion1 from '../Secciones/Seccion1';

export default function Inicio() {
  return (
    <div>
        <h1>Pagina de inicio</h1>
        {/* <ItemListContainer Saludo='Bienvenidos a la pagina...'/> */}
        <Seccion1 greeting='Nueva sección con Greeting'/>
    </div>
  )
}
