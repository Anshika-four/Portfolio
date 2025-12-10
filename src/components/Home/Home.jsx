import React from 'react'
import "./Home.css"
import Me from "../../assets/avatar-1.svg"
import ScrollDown from './ScrollDown'
import me from '../../assets/hi.jpeg'
const Home = () => {
  return (
    <section className="home" id="home">
        <div className="intro">
            
            <h1 className="home__name">Anshika Sharma</h1>
            <img src={me}  className='profile'/>
            <span className="home__education">MERN Stack web developer and DSA Anthusiast.</span>
            <p className="para">Hello Everyone! Welcome to my portfolio. Know more about me .</p>
        
        </div>
        
    </section>
  )
}

export default Home;
