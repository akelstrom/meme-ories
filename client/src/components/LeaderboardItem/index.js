import React from 'react';

const LeaderboardItem = ({ friend }) => {

    console.log(friend);

    return (
        <div>
            <p>{friend.username} has X laughs</p>
        </div>
    );
};

export default LeaderboardItem;