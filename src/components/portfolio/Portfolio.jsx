import React, {useState} from 'react'
import {Link} from 'react-router'
import "./portfolio.css"
import Menu from "./Menu"

const Portfolio = () => {
  const [items, setItems] = useState(Menu);

  return (
    
      <section className="work container section" id="work">
        <h2 className="section__title">
          Projects
        </h2>
        <div className="work__container grid">
          {items.map((elem)=>{
            const {id, image, title,link} = elem;
            return(
              <div className ="work__card" key={id}>
                <div className="work__thumbnail">
                  <img src={image} className="work__img" alt=""/>
                  <div className="work__mask"></div>
                </div>
                <h3 className="work__title">{title}</h3>
                <Link to={link} className="work__button">
                  <i className="icon-link work__button-icon"></i>
                  </Link> 
              </div>
            )
          })}
        </div>
      </section>



    
  )
}

export default Portfolio
