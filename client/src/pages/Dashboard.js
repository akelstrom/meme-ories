import React, {useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {

    const [room, setRoom] = useState('');
    
    return (
        <div>
            <h1>Dashboard</h1>
            <p>Here is your dashboard</p>
            <div className="joinContainer">
                <h1>Join</h1>
                <div>
                     <input 
                    placeholder="Room" 
                    type="text"
                    onChange={(event) => setRoom(event.target.vaule)}
                    ></input>
               <Link onClick={event => (!room) ? event.preventDefault() : null} to={`/gameroom?room=${room}`}>
                <button type="submit">Join Room</button>
               </Link>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;