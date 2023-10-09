import React, {useRef} from 'react';
import './contact.css';
import linkedinIcon from '../../assets/linkedinIcon.png';
import linkedinIcon2 from '../../assets/linkedinIcon2.png';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2khqck7', 'template_dqrv6oo', form.current, '4a9gXtC30KlkQLmzX')
            .then((result) => {
                console.log(result.text);
                e.target.reset()
                alert('Email Sent!')
                e.target.reset();
                alert('Email.Sent!');
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
  <section id= "contactPage">

      <div id= "contact">
    <h1 className= "contactPageTitle">Contact Me</h1>
        <span className= "contactDesc">Please fill out the form below to discuss any work opportunities.</span>
   <form className= "contactForm" ref={form} onSubmit={sendEmail}>
     <input type= "text" className= "name" placeholder= "Your Name" name= "your_name"/>
     <input type= "email" className= "email" placeholder= "Your Email" name= "your_email"/>
    <textarea className= "msg" name= "message" rows= "5" placeholder= "Your Message"></textarea>
     <button type= "submit" value= "send" className= "submitBtn">Submit</button>
     <div className= "links">
       <img src= {linkedinIcon} alt= "Linkedin" className= "link"/>
       <img src= {linkedinIcon2} alt= "Linkedin2" className= "link"/>
       <img src= {linkedinIcon} alt= "" className= "link"/>
     </div>
   </form>
      </div>
  </section>
    )
}

export default Contact;