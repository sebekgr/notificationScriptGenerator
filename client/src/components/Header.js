import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => (
    <header>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/profile/editor">CreateScript</Link>
    </header>
);

export default Header;