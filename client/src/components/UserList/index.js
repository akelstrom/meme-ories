import React, { useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';
import UserItem from '../UserItem';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { useDispatch, useSelector } from 'react-redux';
import { UPDATE_USERS } from '../../utils/actions';
import { QUERY_USERS } from '../../utils/queries';
import { ADD_FRIEND } from '../../utils/mutations';


const UserList = () => {
    const dispatch = useDispatch();
    const usersState = useSelector(state => state.users);

    const { loading, data } = useQuery(QUERY_USERS);

    useEffect(() => {
        if (data) {
            dispatch({
                type: UPDATE_USERS,
                users: data.users
            });

            //idbpromise stuff
        } else if (!loading) {
            //idbpromise stuff
        }
    }, [data, loading, dispatch]);

    return (
        <div>
            <Container>
                <Grid container>
                    <Grid item xs={12} sm={12} md={3} lg= {3} className="gridItem">
                        {usersState.map(user => (
                            <UserItem key={user._id} user={user} />
                        ))}
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default UserList;