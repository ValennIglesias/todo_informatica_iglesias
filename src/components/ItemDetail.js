import ItemCount from "./ItemCount"

const ItemDetail = ({item})=>{
    return(
        <>
        {<div className="detalle">
            <img src={item.img}/>
            <ul>
            <li><p>{item.name}</p></li>
            <li><p>{item.description}</p></li>
            <li><p>Precio: ${item.price}</p></li>
            </ul>
            <div className="contadorProductos"><ItemCount/></div>
        </div>
        }
        </>
    )}

export default ItemDetail