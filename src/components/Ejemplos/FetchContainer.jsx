import React, { useEffect, useState } from 'react'
import FetchList from './FetchList'

const FetchContainer = () => {
    const [personajes, setPersonajes] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(()=>{
        setLoading(true)
        setError(null)
        //Pedir los datos
        fetch('https://rickandmortyapi.com/api/character')
        .then((res) => res.json()) // convertimos o traducimos
        .then((data)=> setPersonajes(data.results)) // guardamos la respuesta
        .catch((error) => setError(true))
        .finally(() => setLoading(false))
    }, [])
    
    console.log(personajes.results, 'personajes')

    if(error){
        return <p> Lo sentimos, intente mas tarde </p>
    }
  return (

    <div>
        {loading ? <p>cargando personajes...</p>
        : <FetchList personajes={personajes} ></FetchList>
        }
        

    </div>
  
)
}

export default FetchContainer