import React from "react"
import EmailIcon from "../images/email-icon.svg"
// import GithubIcon from '../images/github-icon.svg'

function Action() {
  return (
    <nav>
      <ul>
        <li>
          <span>
            <img src={EmailIcon} alt="email" />
          </span>
        </li>
        <li>
          <span>
            <img src={EmailIcon} alt="email" />
          </span>
        </li>
        <li>
          <span>
            <img src={EmailIcon} alt="email" />
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
