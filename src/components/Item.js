const Item = (props)=>{

    console.log()
    return(
        <li>
            <h2>{props.nombre}</h2>
            <p>{props.categoria}</p>
            <p>{props.stock}</p>
        </li>
    )
}

export default Item;