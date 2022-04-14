import React from "react"
import Item from "./Item"



const ItemList=({products})=>{
    return(
        <>
        
        {products.map(item => <Item id={item.id} Cid={item.Cid} name={item.name} price={item.price} img={item.img} />)}
        
        </>
        )
}
export default ItemList