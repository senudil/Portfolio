import React, { useRef } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lhypz3b', 'template_g9ynkji', form.current, 'A67j2cTRewZxySg2w')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Message Sent, I will get back to you shortly')
      }, (error) => {
          console.log(error.text);
      });
  }


  return (
    <div id="contact">
      <h1 className='contactPageTitle' style={{textAlign:'center'}}> <span style={{color:'yellow'}}>Contact</span> Me</h1>
      <span className='contactDesc'>Please fill out the form below to contact</span>
      <form className='contactForm' ref={form} onSubmit={sendEmail}>
        <input type="text" className='name' placeholder='Your Name' name='from_name' />
        <input type="email" className='email' placeholder='Your Email' name='from_email'/>
        <textarea className='msg' name="message" rows="5"></textarea> 
        <button type='submit' className='submitButton' value='Send' style={{textAlign:'center',marginTop:'1%'}}>Submit</button>
        <div className='links'>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
        </div>
      </form>
    </div>
  );
}

export default Contact;
