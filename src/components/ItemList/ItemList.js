import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ productos }) => {

    return (
        <div className='flex flex-wrap mt-5 mb-5 gap-8 justify-center'>
            {productos.map((prod) => <Item productos={ prod } key = {prod.id} /> ) }
        </div>
    );
}

export default ItemList;
