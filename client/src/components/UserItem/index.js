import React, { useEffect } from 'react';
import { Card, CardMedia, CardContent, Button } from '@material-ui/core'
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import FaceIcon from '@material-ui/icons/Face';
import { ADD_FRIEND } from '../../utils/mutations';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { useDispatch, useSelector } from 'react-redux';
import { UPDATE_FRIENDS } from '../../utils/actions';
import { QUERY_ME } from '../../utils/queries';

const UserItem = ({ user }) => {
    const dispatch = useDispatch();
    const friendsState = useSelector(state => state.friends);

    const { loading, data } = useQuery(QUERY_ME);

    const id = user._id;

    const [addFriend] = useMutation(ADD_FRIEND);
    const friendedUser = friendsState.find((friend) => friend._id === id);

    /* const checkFriendStatus = () => {

        if (friendedUser) {
            return <p>Already Friends</p>
        } else {
            return <Button onClick={handleClick}>Add Friend <PersonAddIcon/></Button>
        }
    } */

    const handleClick = async () => {
        try {
            await addFriend({
                variables: { id: id }
            });
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        if (data) {
            dispatch({
                type: UPDATE_FRIENDS,
                friends: data.me.friends
            });

            // idb stuff
        } else if (!loading) {
            //idb stuff
        }
    }, [data, loading, dispatch]);

    return (
        <Card elevation={4} className='project-card'>
            <CardMedia>
            </CardMedia>
            <CardContent>
            <center>
            <FaceIcon/>
            <h2>{user.username}</h2>
            {friendedUser ? (
                <p>Already Friends</p>
            ) : (
                <Button onClick={handleClick}>Add Friend <PersonAddIcon/></Button>
            )}
            </center>
            </CardContent>
        </Card>
    );
};

export default UserItem;