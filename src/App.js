import NavBar from "./components/NavBar";
import ItemListConteiner from "./components/ItemListConteiner"
import { Route, Routes } from "react-router";
import ItemDetailContainer from "./components/ItemDetailContainer";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListConteiner greeting="Producto N°1" />} />
        <Route path="item/:id" element={<ItemDetailContainer />} />
      </Routes>
     
    </div>
  );
}

export default App;
