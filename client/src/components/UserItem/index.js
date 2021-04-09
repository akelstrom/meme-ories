import React from 'react';
import { Card, CardMedia, CardContent, Button } from '@material-ui/core'
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import FaceIcon from '@material-ui/icons/Face';

const UserItem = ({user}) => {

    return (
        <Card elevation={4} className='project-card'>
            <CardMedia>
            </CardMedia>
            <CardContent>
            <center>
            <FaceIcon/>
            <h2>{user.username}</h2>
            <Button>Add Friend <PersonAddIcon/></Button>
            </center>
            </CardContent>
        </Card>
    );
};

export default UserItem;