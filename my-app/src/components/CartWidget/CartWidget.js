import './CartWidget.css';

import CartContext from '../../context/CartContext';
import Carrito from '../../Assets/img/carrito.png'

import { useContext } from 'react';
import { Link } from 'react-router-dom';

const CartWidget = () =>{
    const {getQuantity} = useContext(CartContext)
    const quantity = getQuantity()
    
    return(
        <Link to='Cart' className='m-a-cart'>
        <div className="CartWidget me-3">
            <img className='carrito' src={Carrito} alt='carrito de compras'/>
            <span className='m-span-cart'>{quantity}</span>
        </div>
        </Link>

    )
}

export default CartWidget