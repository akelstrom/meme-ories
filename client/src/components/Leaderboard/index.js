import React/* , { useEffect } */ from 'react';
//import { useQuery } from '@apollo/react-hooks';
//import { useDispatch, useSelector } from 'react-redux';
//import { SOME ACTION } from '../../utils/actions';
//import { SOME QUERY } from '../../utils/query';
// Will we use idbPromise from modules for indexedDB? 
//import { idbPromise } from '../../utils/helpers';

function Leaderboard() {
    // variables for Redux State, will probably need to adjust later but this is a good baseline
    //const dispatch = useDispatch();
    //const gameHistoryState = useSelector(state => state.gameHistory);

    //Query to get the game history data
    //const { loading, data } = useQuery(SOME QUERY);

    // useEffect outline for storing to global state and saving to indexedDB if there is data and grabbing from indexedDB...
    // ...if there isn't any because we are offline get the data from indexedDB
    //useEffect(() => {
        //if (data) {
            //dispatch({
                //type: SOME ACTION,
                //gameHistory: data.gameHistory
            //});

            //data.gameHistory.forEach((game) => {
                //idbPromise('gameHistory', 'put', game);
            //});
        //} else if (!loading) {
            //idbPromise('gameHistory', 'get').then((games) => {
                //dispatch({
                    //type: SOME ACTION,
                    //gameHistory: gameHistory
                //});
            //});
        //}
    //}, [data, loading, dispatch]);

    // If statement for whether the user has played any games or not
    // If no game history display "No games played yet, grab some friends and start a game now!"
    //if (!gameHistory) {
        // return <p>You haven't played any gmaes yet, grab some friends and start a game now!</p>;
    //}

    return (
        <div>
            <h2>🤡 Leaderboard:</h2>
            <p>FRIEND has X laughs</p>
        </div>
    );
}

export default Leaderboard;