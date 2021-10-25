import './Navbar.css';
import {Link, NavLink} from 'react-router-dom';
//import Logo from '../../public/webshio.png';

function Navbar () {
    return (
        <>
        <div className='navbar'>
            <Link to='/'>
                <img className="logo" src='/webshio.png' alt='logo' />
            </Link>
            <Link to='/items'>
                <button>ESEMED</button>
            </Link>
            <Link to='/categories'>
                <button>KATEGOORIAD</button>
            </Link>
            <Link to='/admin'>
                <button>Admini vaatesse</button>
            </Link>
            <div className="navbar-right">
                <Link to='/cart'>
                    <img className="cart" src="cart.svg" alt="cart"/>
                </Link>
            </div>
        </div>

        </>
    );
}

export default Navbar;