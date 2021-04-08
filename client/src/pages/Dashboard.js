import React from 'react';
import GameHistory from '../components/GameHistory';
import QuestionForm from '../components/QuestionForm';


const Dashboard = () => {

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Here is your dashboard</p>
            <QuestionForm />
            <GameHistory />
        </div>
    );
};

export default Dashboard;