import React from 'react';
import './Navbar.style.css';

const Navbar = ({ tipoMenu, handleMenu }) => {

    return (
        <div className="navbar">
            <button className="btn-menu" onClick={() => handleMenu()}>
                <i className="fas fa-bars"></i>
            </button>

            <img src="/images/logoACT.jpg" className="user-ciclo" alt="user" />
        </div>
    );
};

export default Navbar;