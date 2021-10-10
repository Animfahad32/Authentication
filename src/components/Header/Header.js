import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';


const Header = () => {
    const{user, logOut} = useAuth()
    return (
        <div className="header">
            <Link to="/home">Home</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Log-in</Link>
            <Link to="/shipping">Shipping</Link>
            <Link to="/place-order">Place-Order</Link>
            <span>{user.displayName} </span>
            {user?.email &&  <button onClick={logOut}>Log out</button>}
        </div>
    );
};

export default Header;