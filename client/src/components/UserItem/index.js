import React from 'react';
import { Card, CardMedia, CardContent, Button } from '@material-ui/core'
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import FaceIcon from '@material-ui/icons/Face';
import { ADD_FRIEND } from '../../utils/mutations';
import { useMutation } from '@apollo/react-hooks';

const UserItem = ({ user }) => {
    const id = user._id;

    const [addFriend] = useMutation(ADD_FRIEND);

    const handleClick = async () => {
        try {
            await addFriend({
                variables: { id: id }
            });
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <Card elevation={4} className='project-card'>
            <CardMedia>
            </CardMedia>
            <CardContent>
            <center>
            <FaceIcon/>
            <h2>{user.username}</h2>
            <Button onClick={handleClick}>Add Friend <PersonAddIcon/></Button>
            </center>
            </CardContent>
        </Card>
    );
};

export default UserItem;