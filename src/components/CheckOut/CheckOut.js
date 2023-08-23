import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { bd } from '../../firebase/config';
import { CartContext } from '../../context/CartContext';

const CheckOut = () => {

    const [pedidoId, setPedidoId] = useState("");
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
    const { register, handleSubmit } = useForm();

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }
        console.log(pedido);

        const refPedido = collection(bd, "pedidos");
        
        addDoc(refPedido, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
                vaciarCarrito()
        })

    }

    if (pedidoId) {
        return (
            <div className=' container'>
                <h1>Muchas gracias por su Compra</h1>
                <p>Tu número de pedido es : {pedidoId}</p>
            </div>
        )
    }


    return (
        <div className=' container'>
            <h1>Finalizar compra</h1>
            <form onSubmit={handleSubmit(comprar)}>
                
                <input type="text" placeholder='Ingrese su nombre'{...register("nombre")} />
                <input type="email" placeholder='Ingrese su e-mail' {...register("email")} />
                <input type="phone" placeholder='Ingrese su teléfono'{...register("telefono")} />

                <button type='submit'>Comprar</button>

            </form>

        </div>
    );
}

export default CheckOut;
