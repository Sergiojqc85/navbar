import React from 'react'
import ItemCounter from '../ItemCounter'

const ItemListContainer = ({Saludo, contando}) => {
    
  return (
    <div>
        <h2>{Saludo}</h2>
        <ItemCounter contando={contando} valorInitial={1}/>
    </div>
  );
}

export default ItemListContainer