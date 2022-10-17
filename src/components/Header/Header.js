import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    const { user, logout } = useContext(AuthContext);
    console.log(user);
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {user?.uid ?
                    <>
                        {/* <p>{user?.email}</p> */}
                        <Link onClick={logout} to='/login'><button className="btn btn-sm">Logout</button></Link>
                    </>
                    :
                    <>
                        <Link to="/signup">Sign Up</Link>
                        <Link to="/login">Login</Link>
                    </>
                }
            </div>
        </nav>
    );
};

export default Header;