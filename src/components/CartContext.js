import React, { useState } from "react"
import { createContext } from "react"

export const CartContext = createContext()

const CartContextProvider = ({children})=>{

    const [cartList, setCartList] = useState([])

    const addToCart = (item, cant) =>{ 
        const duplicado = cartList.find(producto=> producto.Iid == item.id)
        if (duplicado == undefined) {
            setCartList([...cartList, 
                {Iid: item.id,
                imgItem: item.img,
                nameItem: item.name,   
                priceItem: item.price,
                cantItem: cant}
            ])
        } else {
            duplicado.cantItem+= cant
        }
        
    }

    

    const clear = ()=>{
        setCartList ([])
    }

    const removeItem = (id)=>{
        let borrar = cartList.filter(item => item.Iid != id)
        setCartList(borrar)
    }

    return(
        <CartContext.Provider value={{cartList, addToCart, removeItem, clear}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider