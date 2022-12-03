import ItemDetail from '../ItemDetail/ItemDetail'

import { db } from '../../service/firebase';
import { getDoc, doc } from "firebase/firestore";
import { useState, useEffect  } from "react";
import {useParams} from "react-router-dom"



const ItemDetailContainer = () =>{

    const [product, setProduct] = useState();
    const [loadingDetail, setLoadingDetail] = useState  (true);

    const {prodId} = useParams();

    useEffect ( ( ) => {
        getDoc(doc(db, 'products', prodId)).then(response =>{
            const data = response.data
            console.log (data)
            const productsAdapted = {id: response.id, ...data}
            setProduct(productsAdapted)
        }).catch(error => {
            console.log(error)
        }).finally(( )=> {
            setLoadingDetail (false)
        })
    }, [ ] )
    if (loadingDetail){
        return <span>Loading...</span>
     }

    return(
        <div className='ItemDetailContainer'>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer