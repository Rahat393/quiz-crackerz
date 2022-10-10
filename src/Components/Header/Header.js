import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <div>
                <h2>Explore Creativity</h2>
            </div>
            <div>
                <Link to='/'>Topic</Link>
                <Link to='/statistics'>Statistics</Link>
                <Link to='/blog'>blog</Link>
            </div>
        </nav>
    );
};

export default Header;