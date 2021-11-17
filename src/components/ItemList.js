import Item from './Item'

const ItemList =({producto}) =>{
    console.log("productos desde el itemList", producto)
    return(
        
       <ul>
           {producto.map((prod =>{
               return(
                   <Item 
                   key={prod.id} 
                   nombre = {prod.name} 
                   categoria = {prod.categoria} 
                   stock = {prod.stock}/> 
               )
           }))}

       </ul>
        
        
    )

}

export default ItemList