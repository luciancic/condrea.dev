import React from 'react'
import EmailIcon from '../images/email-icon.svg'
import GithubIcon from '../images/github-icon.svg'

function Intro() {
  return (
    <main>
      <div>
        <h1>Lucian Condrea</h1>
        <span>Fullstack Web Developer</span>
      </div>

      <address>
        <span>Contact Me</span>
        <a href="#"><img src={EmailIcon} alt="Email Icon Link"/></a>
        <a href="#"><img src={GithubIcon} alt="Git Hub Icon Link"/></a>
      </address>
    </main>
  )
}

export default Intro
