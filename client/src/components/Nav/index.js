import React from 'react';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';

function Nav() {

    function showNavigation() {
        if (Auth.loggedIn()) {
            return (
                <ul>
                    <li>
                        <Link to="/dashboard">
                            Dashboard
                        </Link>
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
                <ul>
                    <li>
                        <Link to='/signup'>
                            Signup
                        </Link>
                    </li>
                    <li>
                        <Link to='/login'>
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link to='/gameboard'>
                            GameBoard
                        </Link>
                    </li>
                </ul>
            );
        }
    }

    return (
        <header>
            <h1>
                <Link to='/'>
                    Sh*ts n' Giggles
                </Link>
            </h1>

            <nav>
                {showNavigation()}
            </nav>
        </header>
    );
}

export default Nav;