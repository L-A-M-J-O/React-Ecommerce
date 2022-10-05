
import { useState, useEffect } from 'react'

import ItemList from './../ItemList/ItemList';

import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../service/firebase';



function Colombia() {
  
  const [products, setProducts] = useState( [ ] );
  const[loading, setLoading] = useState(true);

  useEffect(() =>{

      getDocs( collection (db, 'products')).then (response => {
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
    <div className="Hetaira_Main row justify-content-center m-1 mt-4">
    <ItemList products={products}/>
    </div>
</>
  )
}

export default Colombia
