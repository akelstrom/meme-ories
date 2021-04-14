import React, { useState, useEffect } from "react";
import { Container, Grid } from "@material-ui/core";
import UserItem from "../UserItem";
import { useQuery } from "@apollo/react-hooks";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_USERS } from "../../utils/actions";
import { QUERY_USERS } from "../../utils/queries";
import "./UserList.css";

const UserList = () => {
  const dispatch = useDispatch();
  const usersState = useSelector((state) => state.users);

    const { loading, data } = useQuery(QUERY_USERS);
    const [searchUsers, setSearchUsers] = useState('');
    const [searchValue, setSearchValue] = useState([]);

    const handleSearchChange = event => {
        const filteredList = usersState.filter(user => user.username.includes(event)
        );
        setSearchValue(filteredList);
        console.log(searchValue, 'Break');
    }

  console.log(searchUsers);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_USERS,
        users: data.users,
      });
      handleSearchChange(searchUsers);
    }
  }, [data, loading, searchUsers, dispatch]);


  return (
    <div>
      <Container>
        <Grid item xs={6}>
          <form>
            <h3 className="search-caption">
              Search here for some friends to compete against!
            </h3>
            <input
              value={searchUsers}
              name="search"
              onChange={(e) => setSearchUsers(e.target.value)}
              type="text"
              placeholder="Start typing name here"
              className="search-form"
            />
          </form>
        </Grid>

        <Grid container>
          <Grid item xs={12} className="gridItem">
            {searchUsers === ""
              ? usersState.map((user) => (
                  <UserItem key={user._id} user={user} />
                ))
              : searchValue.map((user) => (
                  <UserItem key={user._id} user={user} />
                ))};
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default UserList;
