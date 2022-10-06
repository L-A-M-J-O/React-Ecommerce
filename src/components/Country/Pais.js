import React from 'react'

import '../Country/Pais.css'


import { Link } from 'react-router-dom';

function Pais() {
  return (
    <div>
        <div className='container'>
            <div className='row g-2 justify-content-center text-center mt-2'>
                <div className='rb col-3 border'>
                    <img src='https://images.emojiterra.com/google/noto-emoji/v2.034/128px/1f1e8-1f1f4.png' alt='Colombia' width={30}/>
                    <Link to='/cervezas/Colombia' className="m-a-home nav-link active" aria-current="page">Colombia</Link>
                </div>
                <div className='col-3 border'>
                    <img src='https://images.emojiterra.com/google/noto-emoji/v2.034/128px/1f1e7-1f1ea.png' alt='Belgica' width={30}/>
                    <Link to='/cervezas/Belgica' className="m-a-home nav-link active" aria-current="page">Belgica</Link>
                </div>
                <div className='col-3 border'>
                    <img src='https://images.emojiterra.com/google/noto-emoji/v2.034/128px/1f1f2-1f1fd.png' alt='Mexico' width={30}/>
                    <Link to='/cervezas/Mexico' className="m-a-home nav-link active" aria-current="page">Mexico</Link>
                </div>
                <div className='col-3 border'>
                    <img src='https://images.emojiterra.com/google/noto-emoji/v2.034/128px/1f1fa-1f1f8.png' alt='Estados Unidos' width={30}/>
                    <Link to='/cervezas/Estados Unidos' className="m-a-home nav-link active" aria-current="page">Estados Unidos</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pais