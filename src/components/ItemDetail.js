import ItemCount from "./ItemCount";

const ItemDetail = (props) =>{
    const { name, categoria, stock } = props.item;
    return(
        <>
        <div>
                <p>{name}</p>
                <p>{categoria}</p>
                <p>{stock}</p>
        </div>
        <ItemCount stock={5} initial={1}/>
        </>
    )
}

export default ItemDetail;