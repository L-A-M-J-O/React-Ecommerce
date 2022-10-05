import './ItemListContainer.css';

import ItemList from './../ItemList/ItemList';

import { useState, useEffect  } from "react";
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../service/firebase';

const ItemListContainer = ({tittle}) =>{

    const [products, setProducts] = useState( [ ] );
    const[loading, setLoading] = useState(true);

    const {country} = useParams();

    useEffect(() =>{

        const collectionRef = country ? query(collection(db, 'products'), where('country','==', country)):null

        getDocs(collectionRef).then (response => {
            const productsAdapted = response.docs.map (element => {
                const data = element.data()
                return {id: element.id,...data}
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