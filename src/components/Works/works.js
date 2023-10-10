import React from 'react';
import "./works.css";
import Portfolio1 from '../../assets/portfolio1.png'
import Portfolio3 from '../../assets/portfolio3.png'
import Portfolio6 from '../../assets/portfolio6.png'



const Works = () => {
    return (
        <section id= "works">
          <h2 className= "worksTitle">My Portfolio</h2>
          <span className= "worksDesc">Here, in this section you can see some of my projects. Some of them are rather small, some of them are bigger, some of them are responsive, some are not, but this section will keep growing as I do more projects, and learn more technologies.</span>
            <div className= "worksImgs">
                <img src= {Portfolio1} alt= "" className= "worksImg"/>
                <img src=  {Portfolio3} alt= "" className= "worksImg"/>
                <img src=  {Portfolio6} alt= "" className= "worksImg"/>
            </div>
            <button className= "workBtn">See More</button>
        </section>
    )
}

export default Works;