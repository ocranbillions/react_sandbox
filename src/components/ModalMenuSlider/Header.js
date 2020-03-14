import React from 'react'

function Header(props) {
    const { toggleModal, toggleSideNav } = props;

    return (
        <header>
            <button id="toggle" className="toggle" onClick={toggleSideNav}>
                <i className="fa fa-bars fa-2x"></i>
            </button>

            <h1>My Landing Page</h1>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, amet!</p>

            <button className="cta-btn" id="open" onClick={toggleModal}>Sign Up</button>
        </header>
    )
}

export default Header
