import Footer from "./components/Footer/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";
import CheckOut from "./components/CheckOut/CheckOut";


function App() {
  
  
  return (

    <CartProvider>
      <BrowserRouter>
        <Navbar />
      
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={'Bienvenidos a TecnoPlay'} />} />
          <Route path="/categoria/:categoria" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />}/>
          <Route path="/carrito" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      
        <Footer />
      </BrowserRouter>
    </CartProvider>
  
  );
  }


export default App;
