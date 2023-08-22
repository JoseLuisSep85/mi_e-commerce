import React, { useEffect, useState } from 'react';
import { pedirProductos } from '../asyncMock/asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const [productos, setproductos] = useState([]);
    const categoria = useParams().categoria
    
    useEffect(() => {
        pedirProductos()
            .then((res) => {
                if (categoria) {
                    setproductos( res.filter((prod) => prod.categoria === categoria))
                } else {
                    setproductos(res)
                }
                    
            })
    },[categoria])
    

    return (
        <div>
            <ItemList productos={ productos } />
        </div>
    );
}

export default ItemListContainer;
