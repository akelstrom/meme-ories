import React, {useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [name, setName ] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Here is your dashboard</p>
            <div className="joinContainer">
                <h1>Join</h1>
                <div>
                    <input 
                    placeholder="Name" 
                    className="joinInput" 
                    type="text"
                    onChange={(event) => setName(event.target.vaule)}
                    ></input>
                     <input 
                    placeholder="Room" 
                    className="joinInput" 
                    type="text"
                    onChange={(event) => setRoom(event.target.vaule)}
                    ></input>
               <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/gameroom?name=${name}&room=${room}`}>
                <button type="submit">Join Room</button>
               </Link>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;