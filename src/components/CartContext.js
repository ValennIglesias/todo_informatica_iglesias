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

    const calcCant = ()=>{
        let cant = cartList.map(item=> item.cantItem)
        console.log(cant)
        return cant.reduce(((cantAnterior, cantNueva) => cantAnterior + cantNueva),0)
       
    }

    const calcPriceItem= (Iid)=>{
        let price = cartList.map(item => item.Iid).indexOf(Iid)
        return cartList[price].priceItem * cartList[price].cantItem
        
    }

    const calcTotal= ()=>{
        let total = cartList.map(item => calcPriceItem(item.Iid));
        return total.reduce((precioAnterior, precioNuevo) => precioAnterior + precioNuevo);
    }

    return(
        <CartContext.Provider value={{cartList, addToCart, removeItem, clear, calcCant, calcPriceItem, calcTotal}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider