import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Grid } from '@mui/material'
import './index.scss'
import myMovie from './img/myMovie.png'
import portfolio from './img/portfolio.png'
import codex from './img/codex.png'
import MakeUpCatelogue from './img/MakeUpCatelogue.png'
const Cards = () => {
  const workObj = [
    {
      title: 'My Movies',
      image: myMovie,
      content: [
        'Objective: Developed an interactive movie website to showcase CRUD operations and advanced frontend technologies',
        'React Router for navigation. Context for state management. CRUD operations with Mock API. Material UI for modern design.',
        'Features: Browse movies, add new movies, update details, and delete movies.',
        'Tech: React, React Router, Context, CRUD, Material UI',
      ],
      url: 'https://moooovie.netlify.app/',
      git: 'https://github.com/zensei76/my_movie',
    },
    {
      title: 'Portfolio',
      image: portfolio,
      content: [
        'Objective: Built responsive portfolio website using React & SCSS.',
        'Features: Showcased projects, detailed descriptions. About me, contact, skills sections. Clean design, performance optimized.',
        'Technologies: React, SCSS, HTML, CSS, Git.',
      ],
      url: '',
      git: '',
    },
    {
      title: 'Codex',
      image: codex,
      content:[
        'Purpose: interact with OpenAI’s Codex API in real-time',
        'Functionality: input natural language queries and receive code suggestions and completions',
        'Developed with: JavaScript, HTML, CSS and vite tool',
        'Integrated third-party APIs and libraries into applications',
      ],
      url: 'https://codex-chat-hazel.vercel.app/',
      git: 'https://github.com/zensei76/codex_chat',
    },
    {
      title: 'MakeUp Catalog',
      image: MakeUpCatelogue,
      content:[
        'Description: Developed a web-based app for browsing and discovering cosmetic products.',
        'Asynchronous Techniques: Implemented asynchronous operations using Async/Await and Fetch API',
        'User Interface: Created an intuitive interface allowing users to search and explore cosmetic products.',
        'Integrated third-party APIs and libraries into applications',
      ],
      url: 'https://peaceful-semifreddo-9a5edf.netlify.app/',
      git: 'https://github.com/zensei76/makeUp-api',
    },
  ]
  return (
    <>
      {workObj.map((work)=>{
        return(<Grid xs={4} sx={{ mx: 'auto' }}>
        <Card className="work-card" sx={{ maxWidth: 352, m: 5  }}>
          <CardMedia
            className="card-media"
            component="img"
            alt={work.title}
            height="198"
            image={work.image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" className="card-title">
              {work.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <span>Key Features :</span>
              <ul className="features-list">
                {work.content.map((e) => (
                  <li>{e}</li>
                ))}
              </ul>
            </Typography>
          </CardContent>
          <CardActions>
            <a href={work.url}>
            <Button >Link</Button>

            </a>
            <a href={work.git}>
            <Button>Github</Button>

            </a>
          </CardActions>
        </Card>
      </Grid>)
      })}
    </>
  )
}
export default Cards
