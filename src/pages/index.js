import React from "react"
import EmailIcon from '../images/email.svg'
import GithubIcon from '../images/github.svg'
import LinkedinIcon from '../images/linkedin.svg'
import UpworkIcon from '../images/upwork.png'
import "normalize-css"
import "../styles.scss"

const IndexPage = () => (
  <div>
    <div className="cloudy-background" />
    <div className="top-white-bar" />
    <h1>Lucian Condrea</h1>
    <p>Front-End Development, Simplicity, Performance.</p>
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
  </div>
)

export default IndexPage
