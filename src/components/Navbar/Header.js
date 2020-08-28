import React from 'react';
import './Header.css';
import logo from "./logo.png";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import Login from './Login';

function Header() {
    return (
        <nav className="header">
            {/* logo */}
            <Link to="/">
                <img src={logo} className='headerLogo' alt=""></img>
            </Link>

            {/* 3 Links */}

            <div className="headerNav">
                <div className="headerLink">
                    <Login/>
                </div>
                <Link to="/login" className="headerLink">
                    <Button className="navBTN" color="secondary">Register</Button>
                </Link>
                <div className='checkout'>
                <i className="ni ni-cart navCart"></i>
                <span className="cartCount">0</span>
                </div>

            </div>


            {/* Basket icon with number */}
        </nav>
    )
}

export default Header
