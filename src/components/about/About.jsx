import React from 'react'
import './about.css'
import ME from '../../assets/AboutPic.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolder} from 'react-icons/vsc'


const About = () => {
  return (
    <section id='About'>  
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About-iIage" />
          </div>
        </div>

        <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>New Grad</small>
              </article>
              
              <article className='about__card'>
                <FiUsers className='about__icon'/>
                <h5>Qualifications</h5>
                <small>Active Secret Clearance</small>
                
              </article>
              
              <article className='about__card'>
                <VscFolder className='about__icon'/>
                <h5>Projects</h5>
                <small>10+ Completed Projects</small>
              </article>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos id ut nemo, 
              tempora provident aut unde necessitatibus qui fugit, neque, quae vero 
              deserunt dolores cupiditate pariatur possimus deleniti quam vitae.
            </p>

            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About