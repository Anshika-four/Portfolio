import React from 'react'
import './about.css'
const FILE_URL='http://localhost:3000/AnshikaSharmaResume_SWE.pdf'
const About = () => {
    const download = (url) => {
        const fileName = url.split('/').pop()
        const aTag = document.createElement('a')
        aTag.href=url
        aTag.setAttribute('download', fileName)
        document.body.appendChild(aTag);
        aTag.click()
        aTag.remove()
    }
  return (
    <section className="about container section" id="about">
        <h2 className="section__title">About Me</h2>
        <div className="about__container grid">
            
                <div className="about__info">
                    <p className="about__description">I am Anshika Sharma, a final-year B.Tech student in Mathematics and Computing at Madhav Institute of Technology and Science, Gwalior, with a CGPA of 9.05. <br/>I am passionate about building efficient, scalable, and user-focused applications, especially using the MERN stack. I enjoy transforming ideas into clean, functional products and solving problems using strong fundamentals in Data Structures and Algorithms, Operating Systems, OOPS, and DBMS.
                        <br/>I love solving problems, learning new technologies, and collaborating with teams to build impactful and user-centric solutions.<br/>
                    </p>
                    <button className="btn" onClick={()=>{download(FILE_URL)}}>Download CV</button>
                </div>
                <div className="about__skills grid">
                    <div className="skills__data">
                        <div className="skills__titles">
                            <h3 className="skills__name">Programming Languages</h3>
                            <ul className="skills__chips">
                                <li className="chip">C</li>
                                <li className="chip">C++</li>
                                <li className="chip">Python</li>
                                <li className="chip">R Programming</li>
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
                                <li>Bootsrap</li>
                                <li>Tailwind CSS</li>
                            </ul>   
                        </div>
                    </div>
                    <div className="skills__data">
                        <div className="skills__titles">
                            <h3 className="skills__name">Back-end Technologies and DataBases</h3>
                            <ul className="list">
                                <li>NodeJS</li>
                                <li>ExpressJS</li>
                                <li>MySQL</li>
                                <li>MongoDB</li>

                                
                            </ul>   
                        </div>
                    </div>
                    <div className="skills__data">
                        <div className="skills__titles">
                            <h3 className="skills__name">IT Constructs</h3>
                            <ul className="list">
                                <li>DSA</li>
                                <li>Operarting System</li>
                                <li>DBMS</li>
                                <li>Computer Network</li>

                                
                            </ul>   
                        </div>
                    </div>
                    
                </div>
            
        </div>

    </section>
  )
}

export default About;
