import React from 'react';

const LeaderboardItem = ({ friend }) => {

    return (
        <div>
            <p>{friend.username} has {friend.score} laughs</p>
        </div>
    );
};

export default LeaderboardItem;