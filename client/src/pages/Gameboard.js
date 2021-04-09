import React from 'react';
import io from 'socket.io-client';

const Gameboard = () => {
const { token } = sessionStorage;
const socket = io("http://localhost:3001", {
    query: {token}
})
    return (
        <div>
            <h1>Gamebard</h1>
            <p id="gameArea">This is the gameboard page</p>
        </div>
    );
};

export default Gameboard;