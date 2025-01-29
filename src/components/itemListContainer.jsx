import Button from "react-bootstrap/Button"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { getProducts } from "../mock/data"

import ItemCount from "./ItemCount"
import ItemList from "./ItemList"

import CenteredComponent from "./CenteredComponent"


const ItemListContainer = (props) => {
    const {greeting} = props

    const [productsList, setProductsList ] = useState([])
    const [loader, setLoader] = useState(false);

    const {categoryId} = useParams()
   
    console.log(categoryId)
    useEffect(() => {
        // prender el loader
        setLoader(true)
        // llamamos a la promesa
        getProducts()
        //tratamos la promesa y la guardamos en un estado
        .then((res) => {
            if(categoryId){
                setProductsList(res.filter((item) => item.category === categoryId))
            }else{
                setProductsList(res)
            }
        })
        //atrapamos el error
        .catch((error) => console.log(error))
        //apagar el loader
        .finally(() => setLoader(false))
    },[categoryId]);
    
    //console.log(productsList, "datos")

    return(
        <CenteredComponent>
            {/* componentes viejos del proyecto */}
            {/* <Button>boton de prueba</Button> */}
            {/* {productsList.map((product) => <p key={product.id}>{product.name} </p> )} */}
            
            <h1>{greeting} {categoryId && <span style={{color:"aquamarine"}}>{categoryId}</span>}</h1>
                        
            {loader
            ? <p>Cargando...</p>
            :<ItemList productsList={productsList}/>}
                        
        </CenteredComponent>

    )
}

export default ItemListContainer