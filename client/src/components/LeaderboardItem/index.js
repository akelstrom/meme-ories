import React from 'react';

const LeaderboardItem = ({ friend }) => {

    return (
        <div>
            <p>{friend.username} has X laughs</p>
        </div>
    );
};

export default LeaderboardItem;