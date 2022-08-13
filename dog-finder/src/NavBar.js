import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css';

function NavBar({ dogs }){
    return (
        <nav className="NavBar">
            <NavLink exact to="/dogs" activeClassName="NavBar-active">Home</NavLink>
            { dogs.map(dogsData => (<NavLink exact to={ `/dogs/${ dogsData.name.toLowerCase() }` } activeClassName="NavBar-active" key={ dogsData.name }>{ dogsData.name }</NavLink>)) }
        </nav>
    );
}

export default NavBar;