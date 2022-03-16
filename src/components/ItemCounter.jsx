import React from 'react'
import {useState} from 'react';

const ItemCounter = ({contando, valorInitial}) => {
    const [contador, setContandor]=useState(valorInitial)
    const fechaActual = new Date();

    const sumar = ()=>{
        setContandor(contador +1)
    }
    const restar = ()=>{
        setContandor(contador -1)
    }
  return (
    <div>
        <p>{contando}</p>
        <p>Este mensaje viene desde El componente ItemCounter</p>
        <div>
            <h3>Haciendo Contador</h3>
            <button onClick={restar}>-</button>
            <span>{contador}</span>
            <button onClick={sumar}>+</button> 
        </div> <br />
        <div>
            Dìa: {fechaActual.getDate()} / {fechaActual.getMonth() +1} / {fechaActual.getFullYear()}</div>

          
             <br />  
            Hora: {fechaActual.getHours()} Minutos: {fechaActual.getMinutes()} Segundos: {fechaActual.getSeconds()} 
        
    </div>
  )
}

export default ItemCounter