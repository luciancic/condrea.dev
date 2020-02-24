import React from "react"
import EmailIcon from "../images/email.svg"
import GithubIcon from '../images/github.svg'
import LinkedinIcon from '../images/linkedin.svg'
function Action() {
  return (
    <nav>
      <ul>
        <li>
          <span>
            <img src={LinkedinIcon} height="42" alt="email" />
          </span>
        </li>
        <li>
          <span>
            <img src={GithubIcon} height="42" alt="email" />
          </span>
        </li>
        <li>
          <span>
            <img src={EmailIcon} height="42" alt="email" />
          </span>
        </li>
      </ul>
      <span>or</span>
      <button>
        Hire me <i src={EmailIcon} />
      </button>
    </nav>
  )
}

export default Action
