import React from 'react';
import "../styles/ContactForm.css"

const ContactForm = () => {

    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [message, setMessage] = useState("");

  return (
    <div className='contactform'>
        <form className='forms'
              action='https://formspree.io/f/mdojqggz' 
              method='POST' >
            <div className='form-group' >
                <label htmlFor='name'>Your Name:</label>
                <input type="text" 
                       id='name' 
                       name='name' 
                       placeholder="User Name"
                       autoComplete='off'
                       required 
                       />
            </div>
            <div className='form-group' >
                <label htmlFor='email'>Your Email:</label>
                <input type="text" 
                       id='email' 
                       name='email'  
                       placeholder="Your Email"
                       autoComplete="off"
                       required 
                       />
            </div>
            <div className='form-group' >
                <label htmlFor='message'>Your Message:</label>
                <textarea type="text" 
                       id='message' 
                       name='message'
                       autoComplete="off"
                       required 
                       />
            </div>
            <button type='submit' >Send</button>
        </form>
    </div>
  )
}

export default ContactForm