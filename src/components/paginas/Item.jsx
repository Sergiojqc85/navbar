import React, { useState } from 'react';

const Item = ({producto}) => {
    const {name, img, description} = producto;
          
    

  return (
    
        
    <div className="card" style={{width:'18rem', margin:'12px'}}>
            <img src= {img} className="card-img-top" alt='...'/>
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
            <a href="#" className="btn btn-primary">Ver más...</a>
        </div>
    </div>
         
     
    )
};

export default Item