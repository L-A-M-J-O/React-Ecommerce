import '../Navbar/Navbar.css';

import { Link } from 'react-router-dom';

import CartWidget from '../CartWidget/CartWidget';

function NavbarMain () {
    return (
      <div className='m-header'>
        <Link to='/' className="m-a-home nav-link active" aria-current="page">Home</Link>
        <Link to='/Pais' className="m-a-home nav-link active" aria-current="page">Countries</Link>
        <CartWidget/>
      </div>
    );
}

export default NavbarMain;