import React from 'react'
import './App.css';
import { BrowserRouter } from 'react-router';
import Sidebar from './components/sidebar/Sidebar.jsx';
import Home from './components/Home/Home.jsx'
import About from './components/about/About.jsx'
import Portfolio from './components/portfolio/Portfolio.jsx'
import Contact from './components/Contact/contact.jsx'
import Experience from './components/Experience/Experience.jsx';
import Certifications from './components/Certifications/Certifications.jsx';
import Education from './components/Education/Education.jsx';
function App() {
  return (
    <>
      <BrowserRouter>
      <Sidebar/>
      <main className='main'>
        <Home/>
        <About/>
        <Experience/>
        <Education/>
        <Portfolio/>
        <Certifications/>
        <Contact/>
      </main>
      </BrowserRouter>
    </>
  );
}

export default App;
