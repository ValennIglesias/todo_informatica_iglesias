import React, { useState } from "react"
import Buy from "./Buy"
import ItemCount from "./ItemCount"

const ItemDetail = ({item})=>{

    const [itemCount, setItemCount]= useState(0)

    const agregar=(cant)=>{
        alert(cant + " producto/s agregado/s")
        setItemCount(cant)
    }
    return(
        <>
        {<div className="detalle">
            <img src={item.img}/>
            <ul>
            <li><h3>{item.name}</h3></li>
            <li><p>{item.description}</p></li>
            <li><p>Precio: ${item.price}</p></li>
            <li><p>Stock: {item.stock}</p></li>
            </ul>

            {
                itemCount === 0
                ?   <div className="contadorProductos"><ItemCount agregar={agregar}/></div>
                :   <Buy/>
            }        
                
            
            
        </div>
        }   
        </>
    )}

export default ItemDetail