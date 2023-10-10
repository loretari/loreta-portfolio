import React from "react";
import "./skils.css";
import energy from '../../assets/energetic.png'
import flexible from '../../assets/flexible.png'
import motivation from '../../assets/motivation.png'
import learning from '../../assets/learning.png'
import challenges from '../../assets/challenges.png'
import challenges_other from '../../assets/challenges2.png'
import motivate from '../../assets/motivate_others.png'
import intelligence from '../../assets/emotional_inteligency.png'
import solving from '../../assets/problem_solving.png'


const Skills =() => {
    return (
        <section id= "skills">

            <span className= "skillTitle">About Me</span>
            <span className= "skillDesc">

            </span>
            <div className= "skillBars">
                    <div className= "skillBar">
                        <img src= { energy } alt= "skill-icon" className= "skillBarImg"/>
                        <img src= { flexible } alt= "skill-icon" className= "skillBarImg"/>
                        <img src= { motivation } alt= "skill-icon" className= "skillBarImg"/>

                        <div className= "skillBarText">
                            <p>Energetic, flexible, highly motivated, positive team player.</p>
                        </div>

                    </div>
                <div className= "skillBar">
                    <img src= { learning } alt= "skill-icon" className= "skillBarImg"/>
                    <img src= { challenges } alt= "skill-icon" className= "skillBarImg"/>
                    <img src= { challenges_other } alt= "skill-icon" className= "skillBarImg"/>

                    <div className= "skillBarText">
                        <p>Eager to learn and open to new challenges</p>
                    </div>
                </div>
                <div className= "skillBar">
                    <img src= { motivate } alt= "skill-icon" className= "skillBarImg"/>
                    <img src= { intelligence } alt= "skill-icon" className= "skillBarImg"/>
                    <img src= { solving } alt= "skill-icon" className= "skillBarImg"/>

                    <div className= "skillBarText">
                        <p>Possessing high emotional intelligence, the potential to motivate and support others, and problem solving skills.
                        </p>
                    </div>
                </div>



                </div>

        </section>
    )
}

export default Skills;