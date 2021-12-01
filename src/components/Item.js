import { Link } from "react-router-dom";


const Item = ({ id, name, categoria, stock })=>{

    console.log("este",id)
    return(
        <Link to={`/item/${id}`}>
            <li>
                <h2>{name}</h2>
                <p>{categoria}</p>
                <p>{stock}</p>
            </li>
        </Link>
    )
}

export default Item;