import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { getOneProduct } from '../mock/data'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

  // const [loading, setLoading] = useState(false)
  const {id} = useParams()
    
  const [item, setItem] = useState({})
  
  useEffect(() => {
        getOneProduct(id)
        .then((res) => setItem(res))
        .catch((error) => console.log(error))
  }, [])
  
    return (

    <div>
        <ItemDetail item={item} ></ItemDetail>
    </div>

  )
}

export default ItemDetailContainer