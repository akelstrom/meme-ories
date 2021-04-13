import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField';

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

const Login = props => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);
  
    // update state based on form input changes
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value
      });
    };
  
    /// submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const { data } = await login({
        variables: { ...formState }
      });
    
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };
  
  return (
      <section className='login-page'>
      <h1 className='contact-header' data-testid="h1tag">Login here</h1>
      <form onSubmit={handleFormSubmit}>
        <div className='contact-div'>
          <label className="contact-label" htmlFor="email">Email</label><br/>
          <TextField
            type="email" 
            name="email"
            placeholder="Your email"
            id="email"
            value={formState.email}
            onChange={handleChange}
          />
        </div>
        <div className='contact-div'>
        <label className="contact-label" htmlFor="password">Password</label><br/>
          <TextField 
            type="password"
            placeholder="******"
            name="password"
            id="password"
            value={formState.password}
            onChange={handleChange}
          />
        </div>
        <div className='contact-div'>
        <Button>Submit</Button>
        </div>
      </form>
      {error && <div>Login failed</div>}
    </section>
  );
};
  
export default Login;