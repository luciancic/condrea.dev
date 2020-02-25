import React from "react"
import EmailIcon from "../images/email.svg"
import GithubIcon from '../images/github.svg'
import LinkedinIcon from '../images/linkedin.svg'
import UpworkIcon from '../images/upwork.png'

function Action() {
  return (
    <nav>
      <div>
        <span>
          <img src={LinkedinIcon} height="42" alt="LinkedIn" />
        </span>
        <span>
          <img src={GithubIcon} height="42" alt="GitHub" />
        </span>
        <span>
          <img src={EmailIcon} height="42" alt="Email" />
        </span>
      </div>
      <span>or</span>
      <button>
        Hire me <img src={UpworkIcon} alt="" />
      </button>
    </nav>
  )
}

export default Action
