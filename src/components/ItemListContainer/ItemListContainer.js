import  { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore'
import {bd} from '../../firebase/config'

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);

    const categoria = useParams().categoria;
    
    useEffect(() => {
        const refProductos = collection(bd, "productos")

        const q = categoria ? query(refProductos, where("categoria", "==", categoria)) : refProductos

        getDocs(q)
            .then((resp) => {
                
                setProductos(
                    resp.docs.map((doc) => {
                        return {...doc.data(), id: doc.id}
                    })
                )
            })

    },[categoria])
    

    return (
        <div>
            <ItemList productos={ productos } />
        </div>
    );
}

export default ItemListContainer;
