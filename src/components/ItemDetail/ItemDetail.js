import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ( { item } ) => {
    
    const [cantidad, setCantidad] = useState(1);
    
    const handleAgregar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1)  
        }

    const handleQuitar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
        }

    const handleConfirmar = () => {
        console.log(item);
        }

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
                        Stock: {item.stock}
                    </p>
            
                </section>
                <ItemCount cantidad={cantidad} handleAgregar={handleAgregar} handleQuitar={handleQuitar} handleConfirmar={handleConfirmar}/>
            
            </div>
        );
    }


export default ItemDetail;
