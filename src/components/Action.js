import React from "react"
import EmailIcon from "../images/email.svg"
import GithubIcon from '../images/github.svg'
import LinkedinIcon from '../images/linkedin.svg'
import UpworkIcon from '../images/upwork.png'
import './Action.css'

function Action() {
  return (
    <nav>
      <span>
        <img src={LinkedinIcon} height="42" alt="email" />
      </span>
      <span>
        <img src={GithubIcon} height="42" alt="email" />
      </span>
      <span>
        <img src={EmailIcon} height="42" alt="email" />
      </span>
      <span>or</span>
      <button>
        Hire me <img src={UpworkIcon} />
      </button>
    </nav>
  )
}

export default Action
