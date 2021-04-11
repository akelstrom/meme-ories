import React from 'react'
import UserList from '../components/UserList';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';

const AddFriends = () => {
  if (!Auth.loggedIn()) {
    return (
      <div>
        <h2>Oops, you must be logged in to view this page!</h2>
        <Link to='/login'>Login</Link>
        <Link to='/signup'>Signup</Link>
      </div>
    )
  }

    return (
      <div>
        <UserList />
      </div>
    )
}

export default AddFriends;