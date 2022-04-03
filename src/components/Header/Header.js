import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='nav'>
            <h1>Welcome to tshirtMania</h1>
            <Link to="/">Home</Link>
            <Link to="/order-review">Order Review</Link>
        </div>
    );
};

export default Header;<h1>welcome</h1>