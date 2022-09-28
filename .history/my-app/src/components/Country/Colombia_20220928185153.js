import React from 'react';

import ItemList from '../ItemList/ItemList';

import { useState, useEffect  } from "react";
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../service/firebase';

const Colombia = () => {

    const [products, setProducts] = useState( [ ] );
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        getDocs( collection (db, 'products')).then (response => {
            const productsAdapted = response.docs.map ( element => {
                const data = element.data()
                // console.log(data)
                if(data.country === 'Colombia'){
                    return {id: element.country,...data}
                }
                return {id: element.id,...data}
                
                // return {id: element.id,...data}

            })
            setProducts(productsAdapted)
        }).catch (error => {
            console.log(error)
        }).finally (()=> {
            setLoading(false)
        })
    })
    
    if(loading){
        return<span>Cargando..</span>
    }
    
    return (
        <div>
            <ItemList products={products}/>
        </div>
    );
}

export default Colombia;
