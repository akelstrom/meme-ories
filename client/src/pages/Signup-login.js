import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Login from './Login';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        justifyContent: "space-around",
        marginTop: "20px"
    }
}));

const Button = styled.button`
  border: 3px dotted var(--bright-pink);
  color: var(--gray);
  border-radius: 10px;
  text-decoration: none;
  font-weight: bold;
  padding: 10px;
  margin: 5px;
  background-color: var(--home-blue)
`

const Signup = () => {
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  const [addUser, { error }] = useMutation(ADD_USER);

  const classes = useStyles();
  
  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const { data } = await addUser({
        variables: { ...formState }
      });
    
      Auth.login(data.addUser.token);
      

    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Container>
    <Container className={classes.root}>
    <section className='signup-page'>
    <h1 className='contact-header' data-testid="h1tag">Sign-up here</h1>
    <form onSubmit={handleFormSubmit}>
      <div className='contact-div'>
        <label className="contact-label" htmlFor="name">Username</label><br/>
        <TextField 
          type="username" 
          name="username"
          placeholder="Your username"
          id="outlined-required"
          value={formState.username}
          onChange={handleChange} 
        />
      </div>
      <div className='contact-div'>
        <label className="contact-label" htmlFor="email">Email</label><br/>
        <TextField 
          type="email" 
          name="email"
          placeholder="Your email"
          id="outlined-required"
          defaultValue={formState.email}
          onChange={handleChange}
        />
      </div>
      <div className='contact-div'>
        <label className="contact-label" htmlFor="password">Password</label><br/>
        <TextField 
          type="password" 
          name="password"
          placeholder="******"
          id="outlined-password-input"
          value={formState.password}
          onChange={handleChange}
        />
      </div>
      <div className='contact-div'>
        <Button>Submit</Button>
      </div>
    </form>
    {error && <div>Sign up failed</div>}
  </section>
  <Login />
  </Container>
  </Container>
  );
};

export default Signup;