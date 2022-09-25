import './ItemListContainer.css';

import ItemList from './../ItemList/ItemList';

import { useState, useEffect  } from "react";
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../service/firebase';

const ItemListContainer = ({tittle}) =>{

    const [products, setProducts] = useState( [ ] );
    const[loading, setLoading] = useState(true);

    useEffect(() =>{

        getDocs( collection (db, 'products')).then (response => {
            const productsAdapted = response.docs.map (doc => {
                const data = doc.data()
                return {id: doc.id,...data}
            })
            setProducts(productsAdapted)
        }).catch (error => {
            console.log (error)
        }).finally ( ( )=> {
            setLoading(false)
        })

    }, [ ])

    if(loading){
        return <span>Loading...</span>
    }
    return (
    <>
        <span>{tittle}</span>
        <div className="Hetaira_Main row justify-content-center m-1 mt-4">
        <ItemList products={products}/>
        </div>
    </>    
    )
}

export default ItemListContainer;