import React from 'react';
import { Link } from "react-router-dom";


function Header() {
    return (
        <header style={headerStyle} >
            <h1>To Do List</h1>
            <Link style={linkStyle} to="/">HOME </Link> | 
            <Link style={linkStyle} to="/about"> ABOUT</Link>
        </header>
    )
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

export default Header;