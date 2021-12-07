import NavBar from "./components/NavBar";
import ItemListConteiner from "./components/ItemListConteiner"
import { Route, Routes } from "react-router";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import { createContext, useState } from "react";

export const themeContext = createContext();

function App() {
  const [itemCarrito, setItemCarrito] = useState([]);


  return (
    <div className="App">
      <NavBar />
     <themeContext.Provider value= {{itemCarrito, setItemCarrito}}>
      <Routes>
        <Route path="/" element={<ItemListConteiner greeting="Producto N°1" />} />
        <Route path="item/:id" element={<ItemDetailContainer />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
     </themeContext.Provider>
     
    </div>
  );
}

export default App;
