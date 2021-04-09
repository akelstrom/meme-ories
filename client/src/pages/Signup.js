import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  const [addUser, { error }] = useMutation(ADD_USER);

  
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
    <section className='signup-page'>
    <h1 className='contact-header' data-testid="h1tag">Sign up here!</h1>
    <form onSubmit={handleFormSubmit}>
      <div className='contact-div'>
        <label className="contact-label" htmlFor="name">Username:</label><br/>
        <input 
          type="username" 
          name="username"
          placeholder="Your username"
          id="username"
          value={formState.username}
          onChange={handleChange} 
        />
      </div>
      <div className='contact-div'>
        <label className="contact-label" htmlFor="email">Email:</label><br/>
        <input 
          type="email" 
          name="email"
          placeholder="Your email"
          id="email"
          value={formState.email}
          onChange={handleChange}
        />
      </div>
      <div className='contact-div'>
        <label className="contact-label" htmlFor="password">Password:</label><br/>
        <input 
          type="password" 
          name="password"
          placeholder="******"
          id="password"
          value={formState.password}
          onChange={handleChange}
        />
      </div>
      <div className='contact-div'>
        <button>Submit</button>
      </div>
    </form>
    {error && <div>Sign up failed</div>}
  </section>
  );
};

export default Signup;