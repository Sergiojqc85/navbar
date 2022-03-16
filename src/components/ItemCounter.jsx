import React, {useState} from 'react'

const ItemCounter = ({ contando, valorInitial, stock }) => {

    const [contador, setContador] = useState(valorInitial);
    const fechaActual = new Date();
    
    const sumar = ()=>{
        if(contador < stock){
        setContador(contador +1);
         
    }  
}
    const restar = ()=>{
        if(contador > 0){
        setContador(contador -1);
         
    }  
}    
    
        return (
    <div>
        <p>{contando}</p>
        <p>Este mensaje viene desde El componente ItemCounter</p>
        <div>
            <h2>Haciendo Contador</h2>
            <h4>Stock de Articulos 5 en existencia</h4>
            <button onClick={restar}>-</button>
            <span>{contador}</span>
            <button onClick={sumar}>+</button> 
        </div> <br />
        <div>
            Día: {fechaActual.getDate()} / {fechaActual.getMonth() +1} / {fechaActual.getFullYear()}</div>
             <br />  
            Hora: {fechaActual.getHours()} Minutos: {fechaActual.getMinutes()} Segundos: {fechaActual.getSeconds()} 
        
        </div>
        )

}

export default ItemCounter
