

import { useEffect, useState } from 'react';
import getApi from '../helpers/getApi';


function Colombia() {

    const [data, setData] = useState([])
    

    const updateApi = () => {
        getApi()
            .then((newCharacter) => {
                setData(newCharacter);
            })
    }

    useEffect( () => {
        updateApi();
    }, [])


    // const filter = (pais) => {
    //     const result = data.filter((element) => {
    //         return element.category === pais
    //     })
    //     setData(result)
    // }

  return ( 
    <div className='container'>
    {
        data.map(element => (
            <div className='row' key={element.id}>
                <div className='col-10'>
                    <h4>{element.name}</h4>
                </div>
            </div>
        ))
    }

        {/* <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-6 border'>
                    <button onClick={ () => filter('Belgica')}>Cambio</button>
                </div>
            </div>
        </div> */}
    </div>
  )
}

export default Colombia
