import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext)
    
    const handleVaciar = () => {
        vaciarCarrito();
    }


    return (
        <div>
            <h1 className='text-3xl text-center m-4 font-bold'>Carrito de compras</h1>
            {
                carrito.map((prod) => (
                    <div className='gap-2 m-8' key={prod.id}>
                        <h2 className=' font-bold'>{prod.nombre}</h2>
                        <p>Precio unidad ${prod.precio}</p>
                        <p>Cantidad: {prod.cantidad}</p>
                        <br />
                    </div>
                ))
            }
            {
                carrito.length > 0 ?
                <div>
                    <h2 className='m-8 font-bold'>Total Compra: {precioTotal()}</h2>
                    <button className=' bg-sky-600 hover:bg-sky-500 p-4 rounded-lg m-8 text-white justify-center' onClick={handleVaciar}>Vaciar Carrito</button>
                    <Link to="/Checkout" >Finalizar Compra</Link>        
                </div>
                    :
                <h2 className=' text-center font-medium text-lg'>El carrito esta vacio</h2>    

            }
            
            
        </div>
    );

}

export default Cart;
