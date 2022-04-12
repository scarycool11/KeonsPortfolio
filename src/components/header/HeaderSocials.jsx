import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="www.linkedin.com/in/keon-dawson" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/scarycool11" target="_blank"><BsGithub /></a>
        <a href="dribble.com" target="_blank"></a>
    </div>
  )
}

export default HeaderSocials