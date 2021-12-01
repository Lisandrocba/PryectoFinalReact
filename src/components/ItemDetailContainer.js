import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getProductos from "../services/handMadePromice";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () =>{
    const [item, setItem] = useState({});
    const { id } = useParams();
    console.log(id);

    useEffect(()=>{
        getProductos.then((res)=>{
            setItem(res.find((prod) => prod.id === parseInt(id)));
        })
    },[id])
    return (
        <ItemDetail item={item}/>
    )
}

export default ItemDetailContainer;