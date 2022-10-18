import React, { useState } from 'react'
import '../styles/header.css'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Hamburger from 'hamburger-react'
import Fade from 'react-reveal/Fade'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import ISTE_Logo from '../images/iste_logo_hollow.svg'
import Bounce from 'react-reveal/Bounce'
import newgif from '../images/new.gif'

const StyledLink = styled(Link)`
  width: 80%;
  font-size: 1.8vw;
  text-decoration: none;
  color: white;
  padding: 1.8%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  border-radius: 10px 10px 0px 0px;
  @media screen and (max-width:1356px){
    font-size:40px;
    line-height: initial;
  }
  &::before {

    background: rgba(108, 50, 224, 0.3);
    transition: all 0.3s ease; */
  }

  &:hover:before {
    left: -10%;
  }
  transition: 0.2s;
  &:hover {
    font-size: 50px;
    background: rgba(22, 21, 22, 0.8);
    border-bottom: 0.5px solid rgba(108, 50, 224, 0.6);
    color: #fff;
  }
`
const Navmenu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`
const Menu = styled.div`
  font-size: 1vw;
  width: 40vw;
  height: 100vh;
  left: 0;
  z-index: 99;

  background-color: rgba(22, 21, 22, 0.7);
  backdrop-filter: blur(10px);
  @media screen and (max-width: 700px) {
    width: 100vw;
  }
  ul {
    text-align: center;
    margin-bottom:23px;
    padding-top: 25vh;
  }
`
const Menuburger = styled.div`
  position: absolute;
  right: 0;
  @media screen and (min-width: 699px) {
    display: none;
  }
`

const SocialLinks = styled.div`
  display: flex;
  position: absolute;
  left: 50%;
  width: 100%;
  bottom: 0;
  transform: translate(-50%, 0);

  div {
    flex: none;
    margin: auto 1%;
    svg {
      width: 2vw;
      height: 2vw;
      @media screen and (max-width: 1356px) {
        width: 43px;
        height: 43px;
      }
      @media screen and (max-width: 700px) {
        width: 30px;
        height: 30px;
      }
    }
    svg:hover{
      cursor: pointer;
    }
  }
`
const Img = styled.img`
  margin: 4%;
  width: 100px;
  position: absolute;
  left:0;
  top:0;
  @media screen and (max-width: 700px) {
    width: 70px;
  }
`

const ImgLogo = styled.img`
  margin: 2%;
  z-index: 100;
  width: 100px;
  left: 0;
  top: 0;
  position: fixed;
  @media screen and (max-width: 700px) {
    width: 70px;
  }
`

const ExtraForClose = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
`

const Navbar = () => {
  const [isOpen, setOpen] = useState(false)

  function clicked() {
    setOpen(!isOpen)
  }

  const ToggleNav = () => {
    return (
      <>
        <ExtraForClose onClick={clicked}></ExtraForClose>
        <Menu>
          <Fade bottom delay={900}>
            <Menuburger>
              <Hamburger
                toggled={isOpen}
                toggle={setOpen}
                color={'white'}
                direction={'right'}
              />
            </Menuburger>
            <div>
              <Img src={ISTE_Logo} />
            </div>
          </Fade>
          <ul>
            <Bounce right delay={100}>
              <StyledLink
                to='/'
                activeClassName='active'
                activeStyle={{
                  fontWeight: 'bold',
                  color: 'rgba(108, 50, 224, 0.7)',
                }}
              >
                Home
              </StyledLink>
            </Bounce>
              <br/>
            <Bounce right delay={120}>
              <StyledLink
                to='/projects'
                activeClassName='active'
                activeStyle={{
                  fontWeight: 'bold',
                  color: 'rgba(108, 50, 224, 0.7)',
                }}
              >
                Blog
              </StyledLink>
            </Bounce>
            <br/>
            <Bounce right delay={140}>
              <StyledLink
                to='/events'
                activeClassName='active'
                activeStyle={{
                  fontWeight: 'bold',
                  color: 'rgba(108, 50, 224, 0.7)',
                }}
              >
                Events
              </StyledLink>
            </Bounce>
            <br/>
            <Bounce right delay={180}>
              <StyledLink
                to='/members'
                activeClassName='active'
                activeStyle={{
                  fontWeight: 'bold',
                  color: 'rgba(108, 50, 224, 0.7)',
                }}
              >
                Members
              </StyledLink>
            </Bounce>
            <br/>
            <Bounce right delay={220}>
              <StyledLink
                to='/#about'
                activeClassName='active'
                activeStyle={{
                  fontWeight: 'bold',
                  color: 'rgba(108, 50, 224, 0.7)',
                }}
              >
                About
              </StyledLink>
            </Bounce>
            <br/>
            
                 <Bounce right delay={220}>
              <StyledLink
                to='http://hult.istenith.com/register'
                activeClassName='active'
                activeStyle={{
                  fontWeight: 'bold',
                  color: 'rgba(108, 50, 224, 0.7)',
                }} target="_blank"
              >
               Register for Hult Prize
                <img src={newgif} alt='new_gif' style={{position: 'fixed'}} />
              </StyledLink>
            </Bounce>
            <br/>
          </ul>
          <SocialLinks>
            <div>
              <Fade left delay={1400}>
                <a href='https://www.instagram.com/teamistenith/?hl=en'>
                  <InstagramIcon style={{ color: 'white'}} />
                </a>
              </Fade>
            </div>
            <div>
              <Fade left delay={1200}>
                <a href='https://www.facebook.com/teamistenith/'>
                  <FacebookIcon style={{ color: 'white' }} />
                </a>
              </Fade>
            </div>
            <div>
              <Fade left delay={1000}>
                <a href='https://www.linkedin.com/company/iste-nith'>
                  <LinkedInIcon style={{ color: 'white' }} />
                </a>
              </Fade>
            </div>
          </SocialLinks>
        </Menu>
      </>
    )
  }

  return (
    <div className='Navbar' style={{ zIndex: '+1000' }}>
      <span className='nav-logo'>
        <Link style={{ textDecoration: 'none', color: 'white' }} to='/'>
          {!isOpen ? <ImgLogo src={ISTE_Logo} /> : <></>}
        </Link>
      </span>
      <Hamburger
        toggled={isOpen}
        toggle={setOpen}
        color={'white'}
        direction={'right'}
      />
      <Navmenu>{isOpen ? <ToggleNav /> : <></>}</Navmenu>
    </div>
  )
}

export default Navbar
