import React from 'react'
import './about.css'

const About = () => {
  return (
    <section className="about container section" id="about">
        <h2 className="section__title">About Me</h2>
        <div className="about__container grid">
            <div className = "about__data grid">
                <div className="about__info">
                    <p className="about__description">I am Anshika Sharma, a student pursuing Bachelor of Technology, currently in the third year. I like creating amazing websites using MERN stack and solving problems using Data Structures and Algorithms. I am always eager to learn and grow. I am looking for opportunities to collaborate on exciting projects.</p>
                    <a href="https://drive.google.com/file/d/1m-QZfK1M6Rh-532EZSsFwOBibNE9wU4o/view?usp=sharing" download="Resume" className="btn">Download CV</a>
                </div>
                <div className="about__skills grid">
                    <div className="skills__data">
                        <div className="skills__titles">
                            <h3 className="skills__name">Programming Languages</h3>
                            <ul className="list">
                                <li>C</li>
                                <li>C++</li>
                                <li>Python</li>
                                <li>R</li>
                            </ul>   
                        </div>
                    </div>
                    <div className="skills__data">
                        <div className="skills__titles">
                            <h3 className="skills__name">Front-end Technologies</h3>
                            <ul className="list">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>ReactJS</li>
                            </ul>   
                        </div>
                    </div>
                    <div className="skills__data">
                        <div className="skills__titles">
                            <h3 className="skills__name">Back-end Technologies and DataBases</h3>
                            <ul className="list">
                                <li>NodeJS</li>
                                <li>MySQL</li>
                                <li>MongoDB</li>
                                
                            </ul>   
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

    </section>
  )
}

export default About;
