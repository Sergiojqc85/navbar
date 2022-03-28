import React, { useEffect, useState } from 'react'
import Item from './Item'

export default function Productos() {
  const [listaProductos, setListaProductos]= useState([])
  const [cargando, setCargando] = useState(false)
  


  const productos = [
    {id:'1', name:'random1', description:'producto1', img:'./img/img01.jpg'},
    {id:'2', name:'random2', description:'producto2', img:'./img/img02.jpg'},
    {id:'3', name:'random3', description:'producto3', img:'./img/img03.jpg'},
    {id:'4', name:'random4', description:'producto4', img:'./img/img04.jpg'},
    {id:'5', name:'random5', description:'producto5', img:'./img/img05.jpg'},
    {id:'6', name:'random6', description:'producto6', img:'./img/img06.jpg'},
    {id:'7', name:'random7', description:'producto7', img:'./img/img07.jpg'},
    {id:'8', name:'random8', description:'producto8', img:'./img/img08.jpg'},
    {id:'9', name:'random9', description:'producto9', img:'./img/img09.jpg'}
  ]

  const getProductos = new Promise ((resolve, reject) => {

  let condition = true
  if(condition){
    setTimeout(() => {
      resolve(productos)

    }, 3000);
  }else{
    reject('Salio mal')
  }
})
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
    <div>
      <h2>Lista de Productos</h2>
      {cargando ? <p>Cargando...</p> : listaProductos.map((producto)=><Item producto={producto} key={producto.id}/>)}
      
        
    </div>
  )
}
