import React from 'react'


const Signup = () => {
  return (
    <section className='contact-page'>
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
          <label className="contact-label" htmlFor="message">Password:</label><br/>
          <textarea name="message" rows="5" />
        </div>
        <div className='contact-div'>
        <CustomButton className="profile-btn" text={'Submit'}/>
        </div>
      </form>
  
      
    </section>
  )
}

export default Signup