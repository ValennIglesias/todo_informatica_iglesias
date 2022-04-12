import { useEffect, useState } from "react"
import customFetch from "../utils/customFetch"
import { products } from "../utils/products"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = ()=>{
    
    const [detalle, setDetalle]= useState({})

    useEffect (()=>{
        customFetch(2000, products[2])
        .then(result =>setDetalle(result))
        .catch(error => console.log(error))
    },[])

    return(
        <>
            <ItemDetail item={detalle}/>
        </>
    )
}

export default ItemDetailContainer