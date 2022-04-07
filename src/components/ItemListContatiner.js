import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import customFetch from "../utils/customFetch"
const { products } = require('../utils/products')

const ItemListContainer = ()=>{

    const [datos, setDatos]=useState([])

    useEffect(() => {
        customFetch(2000, products)
            .then(result => setDatos(result))
            .catch(error => console.log(error))
    }, []);

    return(
        <>
            <div className="productos"><ItemList products={datos} /></div>
        </>
    )
}

export default ItemListContainer