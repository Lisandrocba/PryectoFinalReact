import { useState } from "react";
import ItemCount from "./ItemCount";

const ItemDetail = (props) =>{
    const { name, categoria, stock } = props.item;
    const [itemCarrito, setItemCarrito] = useState([]);

    function onAdd(count){
        const prod = {nombre:{name}, categoria:{categoria}, cantidad:{count}};
        setItemCarrito(prod)
    }

    console.log(itemCarrito)

    return(
        <>
        <div>
                <p>{name}</p>
                <p>{categoria}</p>
                <p>{stock}</p>
        </div>
        <ItemCount stock={stock} initial={1} onAdd = {onAdd}/>
        </>
    )
}

export default ItemDetail;