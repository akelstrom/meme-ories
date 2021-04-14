import React from 'react';

const LeaderboardItem = ({ friend }) => {
    let laugh;
    if (friend.score === 1) {
        laugh = 'laugh';
    } else {
        laugh = 'laughs';
    }

    return (
        <div>
            <p>{friend.username} has {friend.score} {laugh}</p>
        </div>
    );
};

export default LeaderboardItem;