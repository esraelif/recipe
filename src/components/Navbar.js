import React from 'react';
import { useState } from 'react';
import Sidebar from './Sidebar';
import { faHome, faList, faCog, faFire, faBellConcierge, faStar } from "@fortawesome/free-solid-svg-icons"

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
        path: "/settings",
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
        name: "Trend",
        path: "/trend",
        icon: faStar
    }
]



const Navbar = () => {
    const [showSidebar, setShowSidebar] = useState(false)
    function closeSidebar() {
        setShowSidebar(false)
    }
    return (
        <>
            <div className='navbar container'>
                <a href="#!" className='logo'>TAS<span>TE</span>MAP </a>
                <div className="nav-links">
                    {links.map(link => (
                        <a href='#!' key={link.name}>{link.name}</a>

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
