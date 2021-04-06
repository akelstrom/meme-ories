import React from 'react'


const Signup = () => {
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
  )
}


export default Signup;