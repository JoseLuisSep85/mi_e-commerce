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
        <div className='flex flex-col m-8'>
            <h1 className=' font-semibold text-lg p-8'>Finalizar compra</h1>
            <form className='flex flex-col container p-8 gap-8' onSubmit={handleSubmit(comprar)}>
                
                <input className=' border-solid border-inherit' type="text" placeholder='Ingrese su nombre'{...register("nombre")} required/>
                <input type="email" placeholder='Ingrese su e-mail' {...register("email")} required/>
                <input type="phone" placeholder='Ingrese su teléfono'{...register("telefono")} required/>

                <button type='submit' className='text  bg-sky-600 hover:bg-sky-500 p-4 rounded-lg m-8 text-white justify-center w-24'>Comprar</button>

            </form>

        </div>
    );
}

export default CheckOut;
