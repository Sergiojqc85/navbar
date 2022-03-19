import React, { useState } from 'react'
import Productos from './Productos';

const Item = ({Productos}) => {
    const {name, img, description} = Productos;
    const [show, setShow]= useState(false);

    const verMas = () =>{
        console.log(show)
        setShow(!show)    
    }

    const onAdd = () => {
        console.log ('agregue al carrito');
    }
       
    

  return (
        <div className="card" style="width: 18rem;">
                <img src="{img}" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>)
};

export default Item