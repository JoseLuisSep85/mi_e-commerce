import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Cart = () => {
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext)
    
    const handleVaciar = () => {
        vaciarCarrito();
    }


    return (
        <div>
            <h1 className='text-3xl text-center m-4'>Carrito de compras</h1>
            {
                carrito.map((prod) => (
                    <div className='gap-2 m-8' key={prod.id}>
                        <h2 className='container'>{prod.nombre}</h2>
                        <p>Precio unidad ${prod.precio}</p>
                        <p>Cantidad: {prod.cantidad}</p>
                    </div>
                ))
            }
            {
                carrito.length > 0 &&
                <h2 className='m-8'>Total Compra: {precioTotal()}</h2>

            }
            
            <button className=' bg-sky-600 hover:bg-sky-500 p-4 rounded-lg m-8 text-white justify-center' onClick={handleVaciar}>Vaciar Carrito</button>
        </div>
    );
}

export default Cart;
