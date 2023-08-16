import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (    <nav className="navigation">
        <Link to="/">Home</Link>
        <Link to="../topics">Articles</Link>
        <Link to="../gallery">Gallery</Link>
        <Link to="../staff">Staff</Link>
        <Link to="../order">Order</Link>
    </nav>
    );
}


export default Nav;