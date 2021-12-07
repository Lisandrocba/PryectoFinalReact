import React, { useContext } from 'react';
import { themeContext } from '../App';

export default function Cart() {

    const {itemCarrito} = useContext(themeContext)
    console.log(itemCarrito)

    return (
        <div>
            <h1>Carrito de compras</h1>
        </div>
    )
}

