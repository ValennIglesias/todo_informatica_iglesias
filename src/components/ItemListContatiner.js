import ItemCount from "./ItemCount"

const ItemListContainer = ({greeting})=>{
    return(
        <>
            <p>{greeting}</p>
            <ItemCount/>
        </>
    )
}

export default ItemListContainer