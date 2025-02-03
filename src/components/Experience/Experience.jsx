import React from 'react'
import "./Experience.css"
import Data from './Data'
import Card from './Card'
const Experience = () => {
  return (
    <section className="resume container section" id="resume">
      <h2 className="section__title">Education</h2>
      <div className="resume__container grid">
        <div className="timeline grid">
            {Data.map((val, id) => {
                return (
                    <Card key={id} icon={val.icon} title={val.title} year={val.year} school={val.school} desc={val.desc}/>
                )
            })}
        </div>
      </div>
    </section>
  )
}

export default Experience
