import React, { useEffect, useState } from 'react'
import Item from './Item'

export default function Productos() {
  const [listaProductos, setListaProductos]= useState([])
  const [cargando, setCargando]= useState (true)


  const productos = [
    {id:'1', name:'random1', description:'producto1', img:'./src/img/img01.jpg'},
    {id:'2', name:'random2', description:'producto2', img:'./src/img/img02.jpg'},
    {id:'3', name:'random3', description:'producto3', img:'./src/img/img03.jpg'},
    {id:'4', name:'random4', description:'producto4', img:'./src/img/img04.jpg'},
    {id:'5', name:'random5', description:'producto5', img:'./src/img/img05.jpg'},
    {id:'6', name:'random6', description:'producto6', img:'./src/img/img06.jpg'},
    {id:'7', name:'random7', description:'producto7', img:'./src/img/img07.jpg'},
    {id:'8', name:'random8', description:'producto8', img:'./src/img/img08.jpg'},
    {id:'9', name:'random9', description:'producto9', img:'./src/img/img09.jpg'}
  ]

  const obtenerProductos = new Promise((resolve, reject) => {

  let condition = true
  if(condition){
    setTimeout(() => {
      resolve(productos)

    }, 3000);
  }else{
    reject('Salio mal')
  }
})
//  console.log(obtenerProductos)  

 useEffect (()=> {
   obtenerProductos
   .then((res) => setListaProductos(res))
   .catch((error) =>console.log(error))
   .finally(() => console.log('Se ejecuto el finally'))
 },[])

    console.log(listaProductos)
  return (
    <div>
      <h2>Lista de Productos</h2>
      {listaProductos.map((producto)=><Item producto={producto}/>)}
        
    </div>
  )
}
