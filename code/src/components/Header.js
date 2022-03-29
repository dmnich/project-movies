import React from "react";
import {Link, NavLink} from 'react-router-dom';

const Header = ()=> {
    return (
        <header>
            <nav>
{/*                 LINKS
                <Link to="/details">Details</Link>
                <Link to="/">List</Link> */}
                {/* <NavLink className={({isActive}) => 'default-class' + (isActive ? " my-custom-classname" : "")} to="/details">Details</NavLink>
                <NavLink className={({isActive}) => 'default-class' + (isActive ? " my-custom-classname" : "")} to="/">List</NavLink> */}\
                <NavLink to="/details">Details</NavLink>
                <NavLink to="/">List</NavLink>
            </nav>
        </header>
    )
}

export default Header;