import React from 'react'
import './portfolio.css'
import UI1 from '../../assets/UI1.jpeg'
import UI2 from '../../assets/UI2.jpeg'
import UI3 from '../../assets/UI3.jpeg'
import UI4 from '../../assets/UI4.jpeg'
import UI5 from '../../assets/UI5.jpeg'

const data = [
  {
    id: 1,
    image: UI1,
    title: 'Mobile App Dash',
    github: 'https://github.com',
    demo: 'https//dribble.com'
  },
  {
    id: 2,
    image: UI2,
    title: 'Admin Dashboard',
    github: 'https://github.com',
    demo: 'https//dribble.com'
  },
  {
    id: 3,
    image: UI3,
    title: 'Trading Platform',
    github: 'https://github.com',
    demo: 'https//dribble.com'
  },
  {
    id: 4,
    image: UI4,
    title: 'Banking App',
    github: 'https://github.com',
    demo: 'https//dribble.com'
  },
  {
    id: 5,
    image: UI5,
    title: 'Fortnite Tracking',
    github: 'https://github.com',
    demo: 'https//dribble.com'
  },
]

const Portfolio = () => {
  return (
    <section id='Portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio