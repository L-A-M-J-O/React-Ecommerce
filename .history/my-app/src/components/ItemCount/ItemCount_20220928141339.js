import './ItemCount.css'

import borrar from '../../Assets/img/basura.png';
import agregar from '../../Assets/img/boton-agregar.png';

import {useState} from 'react';

const Count = ({stock, onAdd, initial = 1}) =>{
    const [quantity, setQuantity] =  useState( stock>0 ? initial : stock);
    
    const handleChange = (parametro) =>{
        if(parametro.target.value <= stock){
            setQuantity(parametro.target.value)
        }
    }

    const add = () => {
        if (quantity<stock){
            setQuantity(Number(quantity) + 1)
        }
    } 

    const subtract = () => {
        if (quantity>0){
            setQuantity(quantity - 1)
        }
    }
    
    return(
        <>
            <div className='count'>
                <button onClick={subtract} className='btnC me-3'><img width={26} src='https://www.flaticon.es/svg/vstatic/svg/3914/3914128.svg?token=exp=1662624312~hmac=5c4a140386722a79f79c41010be8e819' alt='borrar'/ > </button>

                    <input sonChange={handleChange}  value={quantity}/>
 
                <button onClick={add} className='btnC ms-3'>
                    <img width={26} src={agregar} alt='agregar'/>
                </button>
            </div>
            <button className='btnB mt-5' onClick={()=> onAdd(quantity)}>Add to Cart</button>
        </>
    )
}

export default Count