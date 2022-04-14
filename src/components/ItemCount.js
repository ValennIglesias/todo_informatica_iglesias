import React from "react"
import { useState } from "react"

const ItemCount =()=>{

    const [productos, setProductos] =useState(1)

    const aumentar = ()=>{
        if (productos<5) {
            setProductos(productos+1)
        }
       
    }

    const disminuir = ()=>{
        if (productos>1) {
            setProductos(productos-1)
        }
       
    }

    const agregar=()=>{
        alert("Producto agregado")
    }
    return(
    <>
        <button className="btnProductos" onClick={disminuir}>-</button>
        <p className="contadorProductos"> Productos: {productos}</p>
        <button className="btnProductos" onClick={aumentar}>+</button>
        <button className="btnAgregar" onClick={agregar}>Agregar al carrito</button>
    </>
    )
}

export default ItemCount