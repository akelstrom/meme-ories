import React from "react";
import Header from '../components/Header';
// Do we want to use Jumbotron like Shop Shop used?
//import Jumbotron from "../components/Jumbotron";

const NoMatch = () => {
    return (
        <div>
            <Header />
            <h1 className="no-match">404 Page Not Found 🙄</h1>
        </div>
    );
};

export default NoMatch;