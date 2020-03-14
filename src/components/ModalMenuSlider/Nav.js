import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
    const { closeSideNav } = props;

    return (
        <nav>
            <div className="logo">
                <img src="https://randomuser.me/api/portraits/men/76.jpg" alt="user" />
            </div>
            <ul>
                <li><Link to="#" onClick={closeSideNav}>Home</Link></li>
                <li><Link to="#" onClick={closeSideNav}>Portfolio</Link></li>
                <li><Link to="#" onClick={closeSideNav}>Blog</Link></li>
                <li><Link to="#" onClick={closeSideNav}>Contact Me</Link></li>
            </ul>
        </nav>
    )
}

export default Nav
