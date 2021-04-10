import React from 'react'
import { Container, Grid, Card, CardHeader, CardMedia, CardContent, Button } from '@material-ui/core'
/*DATA*/
import friendsData from '../utils/friendsData';
/*ICONS*/

import PersonAddIcon from '@material-ui/icons/PersonAdd';
import FaceIcon from '@material-ui/icons/Face';
import UserList from '../components/UserList';
import Search from '../components/Search';

const AddFriends = () => {
    return (
      <div>
        <Search/>
        <UserList />
      </div>
    )
}

export default AddFriends;