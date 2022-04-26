import Reacts, { useContext } from "react"
import BackHome from "./BackHome"
import { CartContext } from "./CartContext"

const Cart = ()=>{

    const myContext = useContext(CartContext)
    
    return(
        <>
        <h1>Mi carrito</h1>
        {
            myContext.cartList.length>0
            ?<button className="elimnarTodo" onClick={myContext.clear}>Eliminar todo</button>
            : <BackHome/>
        }
        
        {
            myContext.cartList.length > 0 
            ?   myContext.cartList.map(item =>
                <div className="productosCarrito" key={item.id}>
                    <img src={item.imgItem}></img>
                    <h3>Producto:{item.nameItem} </h3>
                    <p>Precio: {item.priceItem}</p>
                    <p>Cantidad: {item.cantItem}</p>
                    <p>Total: {myContext.calcPriceItem(item.Iid)}</p>
                    <button onClick={()=> myContext.removeItem(item.Iid)}>Eliminar Producto</button>
                </div>)
                
        : <p>El carrito esta vacio</p>
            
        }
        {
            myContext.cartList.length > 0 &&
            <>
                <div className="totalPrice">
                    Precio Total:{parseInt( myContext.calcTotal())} 
                    
                </div>
                <button>Comprar</button>
        </>
        }    
        </>
    )
    }

export default Cart