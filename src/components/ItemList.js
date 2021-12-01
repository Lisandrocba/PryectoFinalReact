import Item from './Item'

const ItemList =({producto}) =>{
    
    return(
        <ul>
           {producto.map((prod =>{
               return(
                   <Item 
                   id={prod.id} 
                   name = {prod.name} 
                   categoria = {prod.categoria} 
                   stock = {prod.stock}/> 
               )
           }))}
        
       </ul>
        
        
    )

}

export default ItemList