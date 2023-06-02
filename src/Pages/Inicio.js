import React, { useState } from 'react'
import Timeline from '../Componentes/TimeLine/TimeLine'
import graduacion from "../Images/Graduacion.png"
import "./Home.css"
import TimeLineExperience from '../Componentes/TimeLine/TimeLineExperience'
import skill from "../Images/skills.png"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import scared from "../Images/Scared.jpeg"
import frog from "../Images/frog.png"
import shooter from "../Images/shooter.png"
import gif from "../Images/gifs.png"
import pokedesk from "../Images/pokedesk.png"
import cubigHunting from "../Images/CubigHunting.jpeg"
import Modal from '@mui/material/Modal';
import languages from "../Images/languages.png"
import programing from "../Images/programing.jpg"
import databases from "../Images/databases.jpg"
import operatyingSystems from "../Images/operantingSystems.jpg"
import tools from "../Images/tools.png"
import map from "../Images/mapa.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ContactForm from '../Componentes/ContactForm/ContactForm'
import CV from "../Documents/CV Boris Javier Caiza en-US-1-3.pdf"
import CVES from "../Documents/CV Boris Javier Caiza.pdf"
import HorrorGame from "../Documents/HorroGame.apk"
import fps from "../Documents/fps movil.apk"
import frogApp from "../Documents/Frog.apk"


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);




export default function Inicio() {

  const [openLanguajes, setOpenLanguages] = React.useState(false);
  const handleOpenLangaujes = () => setOpenLanguages(true);
  const handleCloseLangaujes = () => setOpenLanguages(false);


  /*-------------*/

  const [openPrograming, setOpenprograming] = React.useState(false);
  const handleOpenPrograming = () => setOpenprograming(true);
  const handleClosePrograming = () => setOpenprograming(false);


  /*----------------- */

  const [openDataBases, setOpenDataBases] = React.useState(false);
  const handleOpenDataBases = () => setOpenDataBases(true);
  const handleCloseDataBases = () => setOpenDataBases(false);

  /*----------------------------*/


  const [openOperatyngSystem, setOpenOperatyngSystem] = React.useState(false);
  const handleOpenOperatyngSystem = () => setOpenOperatyngSystem(true);
  const handleCloseOperatyngSystem = () => setOpenOperatyngSystem(false);

  /*----------------------------------*/


  const [openTools, setOpenTools] = React.useState(false);
  const handleOpenTools = () => setOpenTools(true);
  const handleCloseTools = () => setOpenTools(false);


  /*---------------------------------*/

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


  return (
    <div className='container-fluid up'>

      <div className='row justify-content-center center'  id="aboutMe">


        <div className='mt-5'  id="aboutMe">

        </div>


        <div className='col-sm-4'>

          <img src={graduacion} alt='graduacion' />
        </div>

        <div  className='col-sm-4'>

          <h2>About me</h2>

          <p>Hello, my name is Boris Caiza and I am a Computer Science Engineering graduate from the Escuela Politécnica Nacional.</p>
          <p>I like web and mobile development, I also have knowledge in networks and artificial intelligence and machine learning</p>
          <a className = "mt-3" href={CV} download><button type="button" class="btn btn-dark">Dowload my CV ENGLISH</button></a> <br/> <br/>
          <a className = "mt-3" href={CVES} download><button type="button" class="btn btn-dark">Dowload my CV SPANISH</button></a>
        </div>

      </div>


      <div className='mt-5' id="education">

      </div>

      <div className='row justify-content-center center up' >

        <div className='col-sm-4'>
          <h2>Education</h2>
          <Timeline />
        </div>

        <div className='col-sm-4'>
          <h2>Work experience</h2>
          <TimeLineExperience />
        </div>
      </div>


      <div className='mt-5' id="skills">

      </div>



      <div className='row justify-content-center up'>

        <h2>Skills</h2>

        <div className='col-sm-4 mt-5'>

          <h2>Languages</h2>
          <img src={languages} className='img-fluid img-languaje' />
          <br />
          <br />
          <br />
          <button type="button" class="btn btn-dark btn-lg" onClick={handleOpenLangaujes}>Look</button>

          <Modal
            open={openLanguajes}
            onClose={handleCloseLangaujes}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Languages
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <ul>
                  <li>Spanis: Native</li>
                  <li>English: Advanced</li>
                </ul>
              </Typography>
            </Box>
          </Modal>

        </div>


    

        <div className='col-sm-4 mt-5'>

          <h2>Programing</h2>
          <img src={programing} className='img-fluid img-programing' />
          <br />
          <br />
          <br />
          <button type="button" class="btn btn-dark btn-lg" onClick={handleOpenPrograming}>Look</button>

          <Modal
            open={openPrograming}
            onClose={handleClosePrograming}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Programing
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <ul>
                  <li>Java Script</li>
                  <li>Java</li>
                  <li>Python</li>
                  <li>C#</li>
                  <li>PHP</li>
                </ul>
              </Typography>
            </Box>
          </Modal>

        </div>

        <div className='col-sm-4 mt-5'>

          <h2>Databases</h2>
          <img src={databases} className='img-fluid img-databases' />
          <br />
          <br />
          <br />
          <button type="button" class="btn btn-dark btn-lg" onClick={handleOpenDataBases}>Look</button>

          <Modal
            open={openDataBases}
            onClose={handleCloseDataBases}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Databases
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <ul>
                  <li>MySQL</li>
                  <li>SQL Server</li>
                  <li>PostgreSQL</li>
                  <li>MongoDB</li>
                </ul>
              </Typography>
            </Box>
          </Modal>

        </div>

        <div className='col-sm-4 mt-5'>

          <h2>Operating System</h2>
          <img src={operatyingSystems} className='img-fluid img-operatyngSystems' />
          <br />
          <br />
          <br />
          <button type="button" class="btn btn-dark btn-lg" onClick={handleOpenOperatyngSystem}>Look</button>

          <Modal
            open={openOperatyngSystem}
            onClose={handleCloseOperatyngSystem}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Operatyng Systems
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <ul>
                  <li>Windows</li>
                  <li>Linux</li>
                </ul>
              </Typography>
            </Box>
          </Modal>

        </div>


        <div className='col-sm-4 mt-5'>

          <h2>Tools And Frameworks</h2>
          <img src={tools} className='img-fluid img-operatyngSystems' />
          <br />
          <br />
          <br />
          <button type="button" class="btn btn-dark btn-lg" onClick={handleOpenTools}>Look</button>

          <Modal
            open={openTools}
            onClose={handleCloseTools}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Tools And Frameworks
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <ul>
                  <li>Power BI</li>
                  <li>Docker</li>
                  <li>Angular JS</li>
                  <li>React JS</li>
                  <li>Node JS</li>
                  <li>Unity</li>
                  <li>Flask</li>
                </ul>
              </Typography>
            </Box>
          </Modal>

        </div>





      </div>

      <div className='mt-5' id ="projects">


      </div>

      <div className='row justify-content-center up'>



        <h2>My Projects</h2>

        <div className='col-sm-3 up'>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={scared}
              title="Sleender Game"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Slender Game
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Game similar to the famous Slenderman game. You can play in the browser or you can download the apk file for android phones.
              </Typography>
            </CardContent>
            <CardActions>
              <a target="_blank" href="https://boriscai.itch.io/slender"><Button size="small">Play in the browser</Button></a>
              <a href={HorrorGame} download><Button size="small">Download the apk for Android cellphones</Button></a>
            </CardActions>
          </Card>
        </div>

        <div className='col-sm-3 up'>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={frog}
              title="Sleender Game"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Frog Harvesting
              </Typography>
              <Typography variant="body2" color="text.secondary">
                2D game where you have to catch all the available fruits
              </Typography>
            </CardContent>
            <CardActions>
              <a target="_blank" href="https://boriscai.itch.io/frogharvesting"><Button size="small">Play in the browser</Button></a>
              <a href={frogApp} download><Button size="small">Download the apk for Android cellphones</Button></a>
            </CardActions>
          </Card>
        </div>

        <div className='col-sm-3 up'>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={shooter}
              title="Sleender Game"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Shooter
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Third person shooter
              </Typography>
            </CardContent>
            <CardActions>
              <a target="_blank" href="https://boriscai.itch.io/shooter"><Button size="small">Play in the browser</Button></a>

            </CardActions>
          </Card>
        </div>


      </div>


      <div className='row justify-content-center'>


        <div className='col-sm-3 up'>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={gif}
              title="Gif Seacrh"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Gif Search Engine
              </Typography>
              <Typography variant="body2" color="text.secondary">
                GIF search engine made in Angular
              </Typography>
            </CardContent>
            <CardActions>
              <a target="_blank" href="https://sad-montalcini-1dbbb9.netlify.app/"><Button size="small">Try it in the Browser</Button></a>
            </CardActions>
          </Card>
        </div>

        <div className='col-sm-3 up'>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={pokedesk}
              title="PokedDesk"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Pokedesk
              </Typography>
              <Typography variant="body2" color="text.secondary">
                pokemon finder made in react
              </Typography>
            </CardContent>
            <CardActions>
              <a target="_blank" href="https://roaring-figolla-5c6c6e.netlify.app/pokemons"><Button size="small">TRY IT I THE BROWSER</Button></a>
              
            </CardActions>
          </Card>
        </div>

        <div className='col-sm-3 up'>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={cubigHunting}
              title="Cubig Hunting"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Cubig Hunting
              </Typography>
              <Typography variant="body2" color="text.secondary">
                First Person game, you have to destrol all red cubes
              </Typography>
            </CardContent>
            <CardActions>
              <a target="_blank" href="https://boriscai.itch.io/shootred"><Button size="small">Play in the browser</Button></a>
              <a href={fps} download><Button size="small">Download the apk for Android cellphones</Button></a>
            </CardActions>
          </Card>
        </div>

        <div className='row justify-content-center'>

        <div className='col-sm-3 up'>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={map}
              title="Cubig Hunting"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Application similar to google maps
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Made In Angular
              </Typography>
            </CardContent>
            <CardActions>
              <a target="_blank" href="https://64372d787a124304031564cf--lustrous-tulumba-b5e19a.netlify.app/"><Button size="small">Try it in the browser</Button></a>

            </CardActions>
          </Card>
        </div>

        </div>

      </div>

      <div className='mt-5' id="contacto">

      </div>


      <div className='row justify-content-center up'>
     

        <ContactForm/>

      </div>

    </div>
  )
}
