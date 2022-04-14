import React from "react"
import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import customFetch from "../utils/customFetch"
import { useParams } from "react-router-dom"
const { products } = require('../utils/products')

const ItemListContainer = ()=>{

    const [datos, setDatos]=useState([])
    const {Cid} = useParams()
    


    useEffect(() => {
        if (Cid === undefined) {
            customFetch(2000, products)
                .then(result => setDatos(result))
                .catch(error => console.log(error))
    }
        else{
            customFetch(2000, products.filter(item => item.Cid == Cid))
                .then(result => setDatos(result))
                .catch(error => console.log(error))
    }
    

            
    }, [Cid]);

    return(
        <>
            <div className="productos"><ItemList products={datos} /></div>
        </>
    )
}

export default ItemListContainer