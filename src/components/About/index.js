import { useEffect, useState } from 'react'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const idTimeOut = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(idTimeOut)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a passionate web developer weaving digital wonders with a
            palette of <span>React</span> , <span> JavaScript </span>,{' '}
            <span>jQuery</span> , <span> HTML </span> , <span>CSS</span>,{' '}
            <span>Bootstrap</span>, <span>Node.js</span>, and
            <span>MongoDB</span>. My journey is fueled by a relentless pursuit
            of excellence, guided by the philosophy of understanding the 'why'
            behind each line of code. This curiosity not only fuels my
            problem-solving abilities but also fuels my eagerness to embrace new
            technologies and stacks.
          </p>
          <p align="LEFT">
            My portfolio is a testament to my commitment. Through projects that
            blend creativity with functionality, I've honed my skills in both
            frontend and backend development. But it's not just about the past;
            it's about the future. I'm not content to rest on my laurels; I'm
            continually learning and growing to stay at the forefront of
            innovation. Join me in crafting the digital landscapes of tomorrow.
          </p>
          <p>
            Let's connect and embark on a journey of innovation, learning, and
            limitless possibilities."
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNodeJs} color="#68a063" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
