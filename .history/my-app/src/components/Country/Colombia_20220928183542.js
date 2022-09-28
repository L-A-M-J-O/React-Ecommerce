import React from 'react';
import Cart from '../Cart/Cart'


import { useState, useEffect  } from "react";
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../service/firebase';

const Colombia = () => {

    const [products, setProducts] = useState( [ ] );
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        getDocs( collection (db, 'country'))
    })








    
    return (
        <div>
            <Cart/>
        </div>
    );
}

export default Colombia;
