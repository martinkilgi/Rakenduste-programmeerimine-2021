import './Navbar.css';
import {Link, NavLink} from 'react-router-dom';
//import Logo from '../../public/webshio.png';

function Navbar () {
    return (
        <>
        <div className='navbar'>
            <Link to='/'>
                <img className="logo" src='webshio.png' alt='logo' />
            </Link>
            <Link to='/items' className="link">
                <button>ESEMED</button>
            </Link>
            <Link to='/categories' className="link">
                <button>KATEGOORIAD</button>
            </Link>
            <Link to='/cart'>
                <img className="cart" src="cart.svg" alt="cart"/>
            </Link>
        </div>

        </>
    );
}

export default Navbar;