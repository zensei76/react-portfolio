import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-B.png'
import './index.scss'
import { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
// import Logo from './Logo';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['h', 'a', 'r', 'g', 'a', 'v']
  const jobStr = "web  developer ."
  const jobArray = jobStr.split("")

  useEffect(() => {
    const idTimeOut = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(idTimeOut)
  }, [])

  return (
    <>
    <div className="container home-page ">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass}_12`}>i,</span>

          <br />

          <span className={`${letterClass}_13`}>I</span>
          <span className={`${letterClass}_14`}>'m,</span>

          <img src={LogoTitle} alt="developer" />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={21}
          />
        </h1>
        <h2> Fullstack Developer / Frontend Developer</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      {/* <Logo/> */}
    </div>
    <Loader type='pacman' />
    </>

  )
}

export default Home
