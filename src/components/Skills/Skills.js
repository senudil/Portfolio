import React from 'react'
import './Skills.css'
import UI from '../../assets/UI.jpeg';
import DC from '../../assets/DC.jpeg';

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What <span style={{color:"yellow"}}>I do ?</span></span>
        <span className='skillDesc'></span>
        <div className='SkillBars'>
            <div className='SkillBar' id='UI'>
                <img src={UI} alt="" className='skillBarImg' />
                <div className='skillBarText'>
                    <h3>UI Design</h3>
                    <p>working on local and overseas projects I gained experience in this area </p>
                </div>
            </div>
            <div className='SkillBar'>
                <img src={DC} alt="" className='skillBarImg' />
                <div className='skillBarText'>
                    <h3>Digital Content Design</h3>
                    <p>As a Former creative designer of Bitzquad I gained experience in this area.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills;