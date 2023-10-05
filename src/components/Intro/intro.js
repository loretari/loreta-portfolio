import React from 'react';
import './intro.css';
// import bg from '../../assets/atsisiųsti (1.1.1).jpg'
import bg from '../../assets/panels-dark.png'
import btnImg from '../../assets/contact.png'
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id= "intro">
            <div className= "introContent">
               <span className= "hello">Hello,</span>
                <span className= "introText">I'm
                    <span className= "introName"> Loreta</span>
                    <br />
                    Front-End React Developer</span>
                <p className= "introPara">I am a Front-End React Developer
                     <br />with a master's degree in development economics and a bachelor's degree
                    in engineering, with over 10 years of private practice in the field of fashion.</p>
                <Link><button className= "btn"><img src= { btnImg } alt= "Contact Me" className= "btnImg"/>Contact Me</button></Link>
            </div>
            <img src={bg} alt="profile" className= "bg" />
        </section>
    )
}

export default Intro;