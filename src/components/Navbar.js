import React from 'react';
import { useState } from 'react';


const Navbar = () => {
    const [showSidebar, setShowSidebar] = useState(false)
    return (
        <div className='navbar container'>
            <a href="#!" className='logo'>TAS<span>TE</span>MAP </a>
            <div className="nav-links">
                <a href="#!" className='active'>Home</a>
                <a href="#!">Our Recipes</a>
                <a href="#!">Settings</a>
            </div>
            <div onClick={() => setShowSidebar(!showSidebar)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>


            </div>
        </div>
    );
}

export default Navbar;
