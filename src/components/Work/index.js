import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Unstable_Grid2'
import Cards from './Cards'

const Work = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const idTimeOut = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(idTimeOut)
  }, [])

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'My Work'.split('')}
            idx={15}
          />
        </h1>
        <span className='para'>  
        <p className='half'>
          Step into my portfolio, a realm where imagination takes form in
          digital wonders. Embark on a journey through a collection of
          captivating projects that reflect my fervor for web development. Each
          piece is a testament to my dedication, and I'm thrilled to share this
          snapshot of my creative voyage with you.
        </p>
        </span>
        <container>
          <Box sx={{ flexGrow: 1, mx: 'auto' }}>
            <Grid container spacing={10}>
              <Cards />
            </Grid>
          </Box>
        </container>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Work
