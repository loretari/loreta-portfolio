import React from 'react';
import './contact.css';
import linkedinIcon from '../../assets/linkedinIcon.png';
import linkedinIcon2 from '../../assets/linkedinIcon2.png';


const Contact = () => {
    return (
  <section id= "contactPage">

      <div id= "contact">
    <h1 className= "contactPageTitle">Contact Me</h1>
        <span className= "contactDesc">Please fill out the form below to discuss any work opportunities.</span>
   <form className= "contactForm">
     <input type= "text" className= "name" placeholder= "Your Name"/>
     <input type= "email" className= "email" placeholder= "Your Email"/>
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