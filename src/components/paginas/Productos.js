import React, { useEffect, useState } from 'react'
import Item from './Item'
import { getProductos } from '../../mocks/FakeApi'
import ItemDetailContainer from './components/ItemDetailContainer';

export default function Productos() {
  const [listaProductos, setListaProductos]= useState([])
  const [cargando, setCargando] = useState(false)
  


  
 console.log(getProductos)  

 useEffect (()=> {
   setCargando(true)
   getProductos
   .then((res) => setListaProductos(res))
   .catch((error) =>console.log(error))
   .finally(() => console.log('Se ejecuto el finally'))
   .finally(()=> setCargando(false))
 },[])

    console.log(listaProductos)
  return (
    
        <div className='row'>
          <h2>Lista de Productos</h2>
          {cargando ? <p>Cargando...</p> : listaProductos.map((producto)=><Item producto={producto} key={producto.id}/>)}  
          <ItemDetailContainer/>            
        </div>
        
        
    
  )
}


