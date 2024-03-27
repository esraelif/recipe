import React from 'react';
import { useState } from 'react';
import Sidebar from './Sidebar';
import { faHome, faList, faCog, faFire, faBellConcierge, faStar } from "@fortawesome/free-solid-svg-icons"
import { Link, useLocation } from "react-router-dom"


const links = [
    {
        name: "Home",
        path: "/",
        icon: faHome
    },
    {
        name: "Recipes",
        path: "/recipes",
        icon: faList
    },
    {
        name: "Settings",
        path: "/setting",
        icon: faCog
    },
    {
        name: "Calory",
        path: "/calory",
        icon: faFire

    },
    {
        name: "Menu",
        path: "/menu",
        icon: faBellConcierge
    },
    {
        name: "Register",
        path: "/register",
        icon: faStar
    }
]



const Navbar = () => {
    const location = useLocation()
    const [showSidebar, setShowSidebar] = useState(false)
    function closeSidebar() {
        setShowSidebar(false)
    }
    return (
        <>
            <div className='navbar container'>
                <a href="/" className='logo'>TAS<span>TE</span>MAP </a>
                <div className="nav-links">
                    {links.map(link => (
                        <Link className={location.pathname === link.path ? "active" : ""} to={link.path} href='#!' key={link.name}>{link.name}</Link>

                    ))}
                </div>
                <div onClick={() => setShowSidebar(true)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>


                </div>
            </div>
            {showSidebar && <Sidebar close={closeSidebar} links={links} />}

        </>
    );
}

export default Navbar;
