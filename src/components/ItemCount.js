import React from "react"
import { useState } from "react"

const ItemCount =({agregar})=>{

    const [productos, setProductos] =useState(1)

    const aumentar = ()=>{
        if (productos < 10) {
            setProductos(productos+1)
        }
       
    }

    const disminuir = ()=>{
        if (productos>1) {
            setProductos(productos-1)
        }
       
    }

   
    return(
    <>
        <button className="btnProductos" onClick={disminuir}>-</button>
        <p className="contadorProductos"> Productos: {productos}</p>
        <button className="btnProductos" onClick={aumentar}>+</button>
        <button className="btnAgregar" onClick={()=> agregar(productos)}>Agregar al carrito</button>
    </>
    )
}

export default ItemCount