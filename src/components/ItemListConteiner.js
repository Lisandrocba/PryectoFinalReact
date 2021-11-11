import ItemCount from "./ItemCount"

const ItemListConteiner = ({greeting}) =>{
    return(
        <>
        <h1>Producto</h1>
        <h3>{greeting}</h3>
        <ItemCount stock={5} initial={1}/>
        </>
    )
}

export default ItemListConteiner;