import React,{useEffect, useState} from 'react'
import { getProductos } from '../mocks/FakeApi'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState({})
  const [carganding, setCarganding] = useState(false)

  useEffect(()=>{
    setCarganding(true)
    getProductos
    .then ((res)=> setProductDetail(res.find((item)=> item.id === '05')))
    .catch ((error)=> console.log (error))
    .finally(()=> setCarganding(false))
  }, [])
  

  return (
    <div>
      {carganding ? <p>Carganding</p>: <ItemDetail productDetail={productDetail}/>}
    </div>
  )
}

export default ItemDetailContainer