import React from "react";
import Auth from "../../utils/auth";
import { NavLink } from "react-router-dom";
import GameRules from "../../components/GameRules"
import "./nav.css";

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div>
          <ul id="nav_menu">
            <li className="nav_link">
              <NavLink
                className="link"
                activeClassName="nav-link-active"
                to="/dashboard"
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <a href="/" className="link" onClick={() => Auth.logout()}>
                Logout
              </a>
            </li>
            <li> <GameRules/></li>
          </ul>
        </div>
      );
    } else {
      return (
        <ul id="nav_menu">
          <li>
            <NavLink
              className="link"
              activeClassName="nav-link-active"
              to="/signup-login"
            >
              Login/Signup
            </NavLink>
          </li>
          <li className="nav_link">
            <NavLink className="link" activeClassName="nav-link-active" to="/">
              Home
            </NavLink>
          </li>
        </ul>
      );
    }
  }

  return <nav>{showNavigation()}</nav>;
}

export default Nav;
