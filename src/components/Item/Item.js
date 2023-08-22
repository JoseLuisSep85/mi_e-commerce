import React from 'react';
import { Link } from 'react-router-dom';

const Item = ( {productos} ) => {
    return (
        <div className='productoItem border flex flex-wrap flex-col w-80 rounded-md items-center p-3 text-center'>
            <picture>
                <img className='itemImg' src={productos.imagen} alt={productos.nombre} />
            </picture>
            <header className='header'>
                <h2 className='itemTitulo font-semibold text-lg mb-2'>{productos.nombre}</h2>
            </header>
            <section>
                <p className='info font-light text-lg mb-4'>Categoria: {productos.categoria}</p>
                <p className='info mb-8'>Precio: ${productos.precio}</p>
            </section>
            <footer className='itemFooter mb-8 bg-sky-500 hover:bg-sky-600 p-4 rounded-xl text-white'>
                <Link to={`/item/${productos.id}`}>Ver detalles</Link>
            </footer>
    </div>
    );
}

export default Item;
