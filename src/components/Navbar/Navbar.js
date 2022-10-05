import '../Navbar/Navbar.css';

import { Link } from 'react-router-dom';

import CartWidget from '../CartWidget/CartWidget';

function NavbarMain () {
    return (
      <div className='m-header'>
        <Link to='/' className="m-a-home nav-link active" aria-current="page">Home</Link>
        <Link to='/cervezas/Colombia' className="m-a-home nav-link active" aria-current="page">Colombia</Link>
        <CartWidget/>
      </div>
    );
}

export default NavbarMain;