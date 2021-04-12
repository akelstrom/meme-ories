import React from 'react';
import Auth from '../../utils/auth';
import { NavLink } from 'react-router-dom';
import './nav.css'



function Nav() {

    function showNavigation() {
        if (Auth.loggedIn()) {
            return (
                <ul id="nav_menu">
                    <li className="nav_link">
                           <NavLink className="link" activeClassName="nav-link-active" to="/dashboard">
                            Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <a href="/" onClick={() => Auth.logout()}>
                            Logout
                        </a>
                    </li>
                </ul>
            );
        } else {
            return (
                <ul id="nav_menu">
                    <li >
                      
                        <NavLink className="link" activeClassName="nav-link-active" to='/signup'>
                            Signup
                        </NavLink>
                     
                    </li>
                    <li className="nav_link">
                        <NavLink className="link" activeClassName="nav-link-active" to='/login'>
                            Login
                        </NavLink>
                    </li>
                </ul>
            );
        }
    }

    return (
        <header>

            <nav>
                {showNavigation()}
            </nav>
        </header>
    );
}

export default Nav;