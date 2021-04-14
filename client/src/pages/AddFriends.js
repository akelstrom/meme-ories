import React from 'react'
import UserList from '../components/UserList';
import Auth from '../utils/auth';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';

const AddFriends = () => {
  if (!Auth.loggedIn()) {
    return <Redirect to="/" />
  }

    return (
      <div>
        <Header/ >
        <UserList />
      </div>
    )
}

export default AddFriends;