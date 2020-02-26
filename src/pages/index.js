import React from "react"
import EmailIcon from '../images/email.png'
import GithubIcon from '../images/github.png'
import LinkedinIcon from '../images/linkedin.png'
import UpworkIcon from '../images/upwork.png'
import "normalize-css"
import "../styles.scss"

const IndexPage = () => (
  <div className="container">
    <div className="cloudy-background" />
    <div className="top-white-bar" />
    <header>
      <h1>Lucian Condrea</h1>
      <p>I build great user interfaces</p>
    </header>
    <nav>
      <div className="social-links">
        <a href="#">
          <img src={LinkedinIcon} alt="LinkedIn" className="social-icon" />
        </a>
        <a href="#">
          <img src={GithubIcon} alt="GitHub" className="social-icon" />
        </a>
        <a href="#">
          <img src={EmailIcon} alt="Email" className="social-icon" />
        </a>
      </div>
      <span>or</span>
      <button>
        Hire me <img src={UpworkIcon} alt="" />
      </button>
    </nav>
    <footer>© Lucian Condrea 2020</footer>
  </div>
)

export default IndexPage
