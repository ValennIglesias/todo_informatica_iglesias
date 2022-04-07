import Item from "./Item"



const ItemList=({products})=>{
    return(
        <>
        
        {products.map(item => <Item key={item.id} name={item.name} price={item.price} img={item.img} />)}
        
        </>
        )
}
export default ItemList