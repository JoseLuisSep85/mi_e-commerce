import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({item}) => {
    return (
        <div className='border flex flex-wrap flex-col w-1/4 rounded-md items-center p-3 text-center m-auto mb-5 mt-5'>
        
        <picture>
            <img src={item.imagen} alt={item.nombre} />
        </picture>
        <header>
            <h2 className='font-semibold text-lg mb-2'>
                {item.nombre}
            </h2>
        </header>
        <section>
            <p>
                Categoria: {item.categoria}
            </p>
            <p>
                {item.descripcion}
            </p>
            <p>
                Precio: ${item.precio}
            </p>
            <p>
                Stock: {item.cantidad}
            </p>
        </section>
        <footer>
            {
                item > 0 ? (
                    
                    <Link to='../cart' className='boton bg-sky-600 rounded-lg h-12 p-3 hover:bg-sky-500 text-white m-8'>Terminar compra</Link>

                ) : (
                    
                    <ItemCount initial={1} stock={item.cantidad} onAdd={0}/>

                    )
            }
            
        </footer>
    </div>
    );
}

export default ItemDetail;
