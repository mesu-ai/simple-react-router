import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <nav>
            <NavLink activeClassName="active" to='/home'>Home</NavLink>
            <NavLink  to='/about'>About</NavLink>
            <NavLink  to='/about/culture'>Culture</NavLink>
            <NavLink to='/users'>Users</NavLink>
           
        </nav>
    );
};

export default Header;