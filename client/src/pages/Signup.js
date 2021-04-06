import React from 'react';
import Auth from '../utils/auth';

const Signup = () /*props*/ => {
        /* const [formState, setFormState] = useState({ email: '', password: '' });
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
       */
    return (
        <section className='signup-page'>
      <h1 className='contact-header' data-testid="h1tag">Sign up here!</h1>
      <form id="contact-form">
        <div className='contact-div'>
          <label className="contact-label" htmlFor="name">Username:</label><br/>
          <input type="text" name="name" />
        </div>
        <div className='contact-div'>
          <label className="contact-label" htmlFor="email">Email:</label><br/>
          <input type="email" name="email"/>
        </div>
        <div className='contact-div'>
          <label className="contact-label" htmlFor="password">Password:</label><br/>
          <input type="password" name="password"/>
        </div>
        <div className='contact-div'>
        <button>Submit</button>
        </div>
      </form>
  
      
    </section>
    );
};

export default Signup;