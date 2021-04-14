import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Login from './Login';
import { makeStyles } from '@material-ui/core/styles';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import gif from '../images/blinking-meme.gif';
import Header from '../components/Header';

const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        justifyContent: "space-around",
        marginTop: "20px"
    }
}));

const Signup = () => {
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

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
      toast.error(
        <div className='toast-img'>
          <img src={gif} alt='error' />
          Signup Failed: Please Try Again!
        </div>
        );
    }
  };

  return (
    <div>
      <Header/>
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
        <button className="link">Submit</button>
      </div>
    </form>
  </section>
  <Login />
  </Container>
  </Container>
  </div>
  );
};

export default Signup;