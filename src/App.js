import Footer from "./components/Footer/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { CartContext } from "./context/CartContext";
import { useState } from "react";
import Cart from "./components/Cart/Cart";


function App() {
  
  const [carrito, setCarrito] = useState([]);
  const agregarAlCarrito = (item, cantidad) => {
    const itemAgregado = { ...item, cantidad }
        
    const nuevoCarrito = [...carrito];
    const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id);
        
    if (estaEnElCarrito) {
      estaEnElCarrito.cantidad += cantidad;
    } else {
      nuevoCarrito.push(itemAgregado)
    }
    setCarrito(nuevoCarrito)
  }

  const cantidadEnCarrito = () => {
    return carrito.reduce( (acc, prod) => acc + prod.cantidad, 0 )
  }

  const precioTotal = () => {
    return carrito.reduce( (acc, prod) => acc + prod.precio * prod.cantidad, 0 )
    
  }

  const vaciarCarrito = () => {
    setCarrito([])
  }

  return (

    <CartContext.Provider value={ { carrito, agregarAlCarrito, cantidadEnCarrito, precioTotal, vaciarCarrito} }>
      
      <BrowserRouter>
      
        <Navbar />
      
        <Routes>
        
          <Route path="/" element={<ItemListContainer greeting={'Bienvenidos a TecnoPlay'} />} />
        
          <Route path="/categoria/:categoria" element={<ItemListContainer />} />
        
          <Route path="/item/:id" element={<ItemDetailContainer />}/>

          <Route path="/carrito" element={<Cart />} />
        
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
      
        </Routes>
      
        <Footer />
    
      </BrowserRouter>
  
    </CartContext.Provider>
  
  );
  }


export default App;
