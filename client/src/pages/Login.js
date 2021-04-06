import React from 'react'


const Login = () => {
  return (
    <section className='login-page'>
      <h1 className='contact-header' data-testid="h1tag">Login here!</h1>
      <form id="contact-form">
        <div className='contact-div'>
          <label className="contact-label" htmlFor="email">Email:</label><br/>
          <input type="email" name="email"/>
        </div>
        <div className='contact-div'>
          <label className="contact-label" htmlFor="message">Password:</label><br/>
          <textarea name="message" rows="5" />
        </div>
        <div className='contact-div'>
        <button>Submit</button>
        </div>
      </form>
  
      
    </section>
  )
}
export default Login;