import Footer from "./components/Footer/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path = "/" element = {<ItemListContainer greeting={'Bienvenidos a TecnoPlay'}/>}/>
          <Route path = "/categoria/:categoriaId" element = {<ItemListContainer/>}/>
          <Route path = "/item/:id" element = {<ItemDetailContainer/>}/>
          <Route path = "*" element = {<h1>404 NOT FOUND</h1>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;
