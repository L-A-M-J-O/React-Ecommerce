import '../Cart/Cart.css';

import CartContext from '../../context/CartContext';
import Table from 'react-bootstrap/Table';
import BannerCart from '../Banner/BannerCart';

import {Link} from 'react-router-dom'
import {useContext} from 'react';


const CartDetail = () =>{
  const {cart, clearCart, removeItem, total} = useContext(CartContext)

  return(
      <>{cart.length === 0 ? 
      (<>
            <h1 className='text-center mt-4'>Your cart is empty</h1>
            <div className='row justify-content-center mt-3'>
                <div className='col-12 col-sm-12 col-md-5 col-lg-5 text-center'>
                <BannerCart/>
                <Link to='/cervezas' className="m-txt-a" aria-current="page"><button className='btnB mt-4'>CERVEZAS</button></Link>
                </div>
            </div>
        </>) :  
              (<>
                  <h1 className='text-center mt-4'>Your purchase</h1>
                  <div className='cart mt-4'>
                      <Table striped bordered hover>
                          <thead>
                              <tr>
                              <th/>
                              <th>Products</th>
                              <th>Price</th>
                              <th>Quantity</th>
                              <th>Total</th>
                              </tr>
                          </thead>
                          <tbody>
                              {cart.map(( guia ) => {
                                  return (
                                  <tr key={guia.id}>
                                  <td>
                                        <img width={28} src='https://www.flaticon.es/svg/vstatic/svg/3914/3914128.svg?token=exp=1662624312~hmac=5c4a140386722a79f79c41010be8e819' alt='borrar' onClick={ ( )=> removeItem(guia.id) } id={guia.id}/ >
                                  </td>
                                  <td>
                                      <Link className='n-a linkProduct ' to={`../Detail/${guia.id}`}>
                                          {guia.name}
                                      </Link>
                                  </td>
                                  <td>${guia.price}</td>
                                  <td>{guia.quantity}</td>
                                  <td>${guia.total}</td>
                                  </tr>)
                              })}
                              <tr>
                              <td colSpan={4}>Total</td>
                              <td>${total}</td>
                              </tr>
                          </tbody>
                      </Table>
                      {cart.length !== 0 && (
                      <div className='row justify-content-center'>
                        <div className='col-2'>
                            <button className='btnI' onClick={clearCart}>Clean cart</button>
                        </div>
                        <div className='col-2'>
                            <Link className='m-a-c' to='/cervezas'>Keep buying</Link>
                        </div>
                        <div className='col-2'>
                            <button className='btnI'>To buy</button>
                        </div>
                      </div>)}
                  </div>
              </>)
          }
      </>
  )
}

export default CartDetail