import React from 'react'
import './contact.css'
import linkedin from "../../assets/images/linkedin.png"
import github from "../../assets/images/github.png"
import leetcode from "../../assets/images/leetcode.png"
const contact = () => {
  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Contact Information</h2>
      <div className="contact__container grid">
        <p className='para'> Email-id: anshikasharma0282@gmail.com</p>
        <div className="home__socials">
          <a href="https://www.linkedin.com/in/anshika-sharma-46899a298/">
            <img src={linkedin} alt="" className="logo"/>
          </a>
          <a href="https://leetcode.com/u/Anshika__1/">
          <img src={leetcode} alt="" className="logo"></img></a>
           <a href="https://github.com/Anshika-sh">
           <img src={github} alt="" className="logo"></img></a>
        </div>
      </div>
    </section>
  )
}

export default contact;
