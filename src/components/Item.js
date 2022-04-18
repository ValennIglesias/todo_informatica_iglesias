import React from "react"
import { Link } from "react-router-dom"
import ItemCount from "./ItemCount"

const Item= ({id,name,price,img})=>{
    return(
        <>
        <div className="contenedores">
            <img src={img}></img>
            <div>
            <h4>{name}</h4>
            <p>Precio: ${price}</p>
            <Link to={`/item/${id}`}><button className="btnDetalle">Detalle</button></Link>
            </div>
        </div>
        
        </>
    )
}

export default Item