import { Link, NavLink, useNavigate } from 'react-router-dom'
import './index.scss'
import LogoBB from '../../assets/images/logoBB .png'
// import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {

  faEnvelope,
  faHome,
  faSuitcase,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faLinkedinIn,
  faSkype,
} from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

const Sidebar = () => {
  // const [showNav, setShowNav] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const navigate = useNavigate()

  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoBB} alt="logo" />
        {/* <img className="sub-logo" src={LogoSubtitle} alt="BhargavBurgul" /> */}
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#e2314f" />
        </NavLink>

        <NavLink
          exact="true"
          activeClassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#e2314f" />
        </NavLink>

        <NavLink activeclassname="active" className="work-link" to="/work">
          <FontAwesomeIcon icon={faSuitcase} color="#e2314f" />
        </NavLink>

        <NavLink
          exact="true"
          activeClassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#e2314f" />

        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/bhargav-burgul/"
          >
            <FontAwesomeIcon icon={faLinkedinIn} color="#e2314f" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/zensei76"
          >
            <FontAwesomeIcon icon={faGithub} color="#e2314f" />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href=" ">
            <FontAwesomeIcon icon={faSkype} color="#e2314f" />
          </a>
        </li>
      </ul>

      <div className="show-on-mobile">
        <IconButton
          className="hamburger-icon"
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={{ color: '#e2314f' }}
        >
          <MenuIcon fontSize="large" />
        </IconButton>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem
            onClick={() => {
              setAnchorEl(null)
              navigate('/')
            }}
          >
            Home
          </MenuItem>

          <MenuItem
            onClick={() => {
              setAnchorEl(null)
              navigate('/about')
            }}
          >
            About
          </MenuItem>
          <MenuItem
            onClick={() => {
              setAnchorEl(null)
              navigate('/work')
            }}
          >
            My Work
          </MenuItem>
          <MenuItem
            onClick={() => {
              setAnchorEl(null)
              navigate('/contact')
            }}
            className="contact-link"
          >
            Contact
          </MenuItem>
        </Menu>
      </div>
    </div>
  )
}

export default Sidebar
