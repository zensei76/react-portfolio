import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoBB from '../../assets/images/logoBB.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faLinkedinIn,
  faSkype,
} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {


  return (
    <div className="nav-bar">
      <Link 
        className="logo" 
        to="/">

        <img src={LogoBB} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="BhargavBurgul" />

      </Link>
      <nav>

        <NavLink 
        exact="true" 
        activeclassname="active" 
        to="/">

          <FontAwesomeIcon icon={faHome} color="#D2D6DC" />

        </NavLink>

        <NavLink
          exact="true"
          activeClassname="active"
          className="about-link"
          to="/about"
        >

          <FontAwesomeIcon icon={faUser} color="#D2D6DC" />
          
        </NavLink>

        <NavLink
          activeclassname="active"
          className="work-link"
          to="/work"

        >
          <FontAwesomeIcon icon={faSuitcase} color="#D2D6DC" />
        </NavLink>

        <NavLink
          exact="true"
          activeClassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#D2D6DC" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/bhargav-burgul/"
          >
            <FontAwesomeIcon icon={faLinkedinIn} color="#D2D6DC" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/zensei76"
          >
            <FontAwesomeIcon icon={faGithub} color="#D2D6DC" />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href=" ">
            <FontAwesomeIcon icon={faSkype} color="#D2D6DC" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
