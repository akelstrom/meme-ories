import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LeaderboardItem from '../LeaderboardItem';
import { useQuery } from '@apollo/react-hooks';
import { useDispatch, useSelector } from 'react-redux';
import { UPDATE_FRIENDS } from '../../utils/actions';
import { QUERY_ME } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

function Leaderboard() {
    // variables for Redux State, will probably need to adjust later but this is a good baseline
    const dispatch = useDispatch();
    const friendsState = useSelector(state => state.friends);

    //Query to get the friends data
    const { loading, data } = useQuery(QUERY_ME);

    // useEffect outline for storing to global state and saving to indexedDB if there is data and grabbing from indexedDB...
    // ...if there isn't any because we are offline get the data from indexedDB
    useEffect(() => {
        if (data) {
            dispatch({
                type: UPDATE_FRIENDS,
                friends: data.me.friends
            });

            data.me.friends.forEach((friend) => {
                idbPromise('friends', 'put', friend);
            });
        } else if (!loading) {
            idbPromise('friends', 'get').then((friends) => {
                dispatch({
                    type: UPDATE_FRIENDS,
                    friends: friends
                });
            });
        }
    }, [data, loading, dispatch]);

    // If statement for whether the user has friends or not
    if (!friendsState || !friendsState.length) {
        return (
            <div>
                <p>Add some friends and see how you match up!</p>
                <Link to='/addFriends'>Add Friends!</Link>
            </div>
        ) 
    }

    return (
        <div>
            <h2>🤡 Leaderboard:</h2>
            <p>You have {data.me.score} laughs!</p>
            {friendsState.map(friend => (
                <LeaderboardItem key={friend._id} friend={friend} />
            ))}
            <Link to='/addFriends'>Find More Friends!</Link>
        </div>
    );
}

export default Leaderboard;