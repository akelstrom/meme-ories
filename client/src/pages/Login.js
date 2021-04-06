import React from 'react';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/react-hooks';
import { LOGIN_USER } from '../utils/mutations';

const Login = props => {
const [formState, setFormState] = useState({ email: '', password: '' });
const [login, { error }] = useMutation(LOGIN_USER);
  
    // update state based on form input changes
    const handleChange = event => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value
      });
    };
  
    /// submit form
  const handleFormSubmit = async event => {
    event.preventDefault();
  
    try {
      const { data } = await login({
        variables: { ...formState }
      });
    
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
  };
  
    return (
        <section className='login-page'>
        <h1 className='contact-header' data-testid="h1tag">Login here!</h1>
        <form onSubmit={handleFormSubmit}>
          <div className='contact-div'>
            <label className="contact-label" htmlFor="email">Email:</label><br/>
            <input type="email" 
            name="email"
            placeholder="Your email"
            value={formState.email}
            onChange={handleChange}
            />
          </div>
          <div className='contact-div'>
          <label className="contact-label" htmlFor="password">Password:</label><br/>
            <input 
            type="password"
            placeholder="******"
             name="password"
             value={formState.password}
            onChange={handleChange}
            />
          </div>
          <div className='contact-div'>
          <button>Submit</button>
          </div>
        </form>
        {error && <div>Login failed</div>}
        
      </section>
    );
  };
  
  export default Login;
  