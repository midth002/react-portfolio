import React from 'react';
import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact" id="contact-me">
        <div className="contact-title"><h2>Get In Touch</h2></div>
        <div className='email-div'><a href='mailto: midthun23@gmail.com' className="email-link">midthun23@gmail.com</a></div>
        <div className="contact-description">
          <p>I am currently looking for a new opportunity. Whether you want to email me questions or connect with me, I will try my best to get back to you!</p>
        </div>
        <div className='mailTo'>
        <a href='mailto: midthun23@gmail.com'>Say Hello</a></div>
        <div className='copyright'>
          <p><a href="https://github.com/midth002/react-portfolio">Designed and Built by Andrew Midthun</a></p>
        </div>
    </div>
  )
}

export default Contact