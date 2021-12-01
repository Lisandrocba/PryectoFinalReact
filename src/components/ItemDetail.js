const ItemDetail = (props) =>{
    const { name, categoria, stock } = props.item;
    return(
        <div>
                <p>{name}</p>
                <p>{categoria}</p>
                <p>{stock}</p>
        </div>
    )
}

export default ItemDetail;