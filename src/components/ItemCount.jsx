import React from 'react'
import {useState} from "react"
import useCounter from '../hooks/useCounter'

const ItemCount = ({stock, onAdd}) => {
    const {count, add, subtract} = useCounter(stock)
    
    
    // const [count, setCount] = useState(1);

    // const add = () => {
    //     if(count < stock) {setCount(count + 1);};
    // }
    // const subtract = () => {
    //     if(count > 0){setCount(count - 1);};
    // }

    // const addToCart = () => {
    //     setPurchase(true)
    //     onAdd(count)
    // }

return (
    <div>
        <div>
            <button className='btn btn-danger' onClick={subtract} disabled={count === 0} >-</button>
            <span className='btn'> {count} </span>
            <button className='btn btn-success' onClick={add} disabled={count === stock} >+</button>
        </div>
        <button className='btn btn-primary' disabled={count === 0 || stock === 0} onClick={()=>onAdd(count)}>Agregar al carrito</button>
    </div>
    )
}

export default ItemCount