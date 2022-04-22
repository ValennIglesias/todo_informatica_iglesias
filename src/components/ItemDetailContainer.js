import React from "react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import customFetch from "../utils/customFetch"
import { products } from "../utils/products"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = ()=>{
    
    const [detalle, setDetalle]= useState({})
    const {Iid} = useParams()
    
    useEffect (()=>{

        if (Iid) {
            customFetch(2000, products.find(element=> element.id=== parseInt(Iid)))
        .then(result =>setDetalle(result))
        .catch(error => console.log(error))
        }
        
    },[Iid])

    return(
        <>
            <ItemDetail item={detalle}/>
        </>
    )
}

export default ItemDetailContainer