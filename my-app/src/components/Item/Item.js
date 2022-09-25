import '../../components/Item/Item.css'

import {Link} from 'react-router-dom'

const Item = ({id, name, price, description, img}) =>{
    return (
        <div className='m-card-m col-12 col-sm-4 col-md-2 col-lg-2'>
            <div className='m-card row gx-0 gy-0 mt-3'>
                <img className='m-card-img' src={img} alt='item imagen' />
            </div>
            <div className='row justify-content-center'>
                <div className='col-9 mt-4'>
                    <p className='name'>{name}</p>
                </div>
                <div className='col-8'>
                    <Link className='m-a-item' to={`/Detail/${id}`}><button className='btnI'>Description</button></Link>
                </div>
                <div className='col-4'>
                    <p>{price}</p>
                </div>
            </div>
        </div>
    )
}

export default Item