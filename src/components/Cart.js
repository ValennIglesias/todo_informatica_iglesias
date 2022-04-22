import Reacts, { useContext } from "react"
import { CartContext } from "./CartContext"

const Cart = ()=>{

    const myContext = useContext(CartContext)
    
    return(
        <>
        <h1>Mi carrito</h1>
        {
            myContext.cartList.length>0
            ?<button onClick={myContext.clear}>Eliminar todo</button>
            : <></>
        }
        
        {
            myContext.cartList.length > 0 
            ?   myContext.cartList.map(item =>
                <div key={item.id}>
                    <img src={item.imgItem}></img>
                    <h3>Producto:{item.nameItem} </h3>
                    <p>Precio: {item.priceItem}</p>
                    <p>Cantidad: {item.cantItem}</p>
                    <button onClick={()=> myContext.removeItem(item.Iid)}>Eliminar Producto</button>
                </div>)
        : <p>El carrito esta vacio</p>
        }
        
        </>
    )
}

export default Cart