let data = [
    {
        "id":1,
        "name":"cocacola",
        "categoria":"gaseosa",
        "stock":4
    },
    {
        "id":2,
        "name":"fanta",
        "categoria":"gaseosa",
        "stock":3
    },
    {
        "id":3,
        "name":"fideos",
        "categoria":"comida",
        "stock":20
    },
    {
        "id":4,
        "name":"pure",
        "categoria":"comida",
        "stock":10
    },
    {
        "id":5,
        "name":"desodorante",
        "categoria":"consumo personal",
        "stock":17 
    }
];

const getProductos = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve(data)
        reject("Error")      
    }, 2000);
})

export default getProductos