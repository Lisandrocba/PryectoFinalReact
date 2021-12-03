import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) =>{

    const [count, setCount] = useState(initial)

    const addItem = () =>{
        const newValue = count + 1;
        if(newValue <= stock){
            setCount(newValue);
        }
    }

    const quitItem = () =>{
        const newValue = count -1;
        if(newValue >= initial){
            setCount(newValue);
        }
    }

    const agregar = () =>{
      onAdd(count);
    }

    return(
        <>
        <div>
            <button onClick={addItem}>+</button>
            <h2>{count}</h2>
            <button onClick={quitItem}>-</button>
        </div>
        <button onClick={agregar}>Agregar</button>
        </>
    )
}

export default ItemCount;