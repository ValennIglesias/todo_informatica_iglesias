import ItemCount from "./ItemCount"

const Item= ({id,name,price,img})=>{
    return(
        <>
       
        <div >
            <img src={img}></img>
            <div>
            <p>{name}</p>
            <p>Precio: {price}</p>
            <p>Id:{id}</p>
            </div>
            {<ItemCount/>}
        </div>
        
        </>
    )
}

export default Item