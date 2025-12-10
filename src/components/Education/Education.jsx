import React from 'react'
import "./Education.css"
import Card from './Card'
import Data from './Data'

const Education = () => {
  return (
    <section className="experience container section" id="experience">
      <h2 className="section__title">Experience</h2>
      <div className="exp__container">
        <div className="divisions">
            {Data.map((val, id) => {
                return (
                    <Card key={id} item={val}/>
                )
            })}
        </div>
      </div>
    </section>
    
  )
}

export default Education
