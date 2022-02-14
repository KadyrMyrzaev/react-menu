import React from 'react';
import {Link} from "react-router-dom"
import Logo from "../assets/img/logo.png"


const Header = () => {
    return (
        <div className="header">
            <div className="container header-container">
                
                <img src={Logo} alt=""/>


            <ul className="menu">
                <li className="menu-item"><Link to="/home">Home</Link></li>
                <li className="menu-item"><Link to="/recipes">Recipes</Link></li>
                <li className="menu-item"><Link to="/meat">Meat</Link></li>
                <li className="menu-item"><Link to="/about">About</Link></li>
                <li className="menu-item"><Link to="/blog">Blog</Link></li>
                <li className="menu-item"><Link to="/support">Support</Link></li>
                    <button className="btn btn1">Sign in</button>
                    <button className="btn btn2">Request demo</button>
            </ul>
        </div>
        </div>
    );
};

export default Header;