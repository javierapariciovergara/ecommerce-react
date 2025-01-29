import React from 'react'
import ItemCount from './ItemCount'
import CenteredComponent from './CenteredComponent'

const ItemDetail = ({item}) => {

    const onAdd = (cantidad) => {
        alert(`Agregaste ${cantidad} al carrito`)
    }

  return (
    <CenteredComponent>
        <h1>Detalle de : {item.name} </h1>
        <p> Descripcion : {item.description} </p>
        <p>Stock disponible : {item.stock} unidades </p>
        <p>Precio : ${item.price} </p>
        <ItemCount stock={item.stock} onAdd={onAdd}/>
        <img src={item.img} alt={item.name}/>
    </CenteredComponent>
  )
}

export default ItemDetail