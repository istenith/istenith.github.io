import React from 'react'
// import '../styles/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { faEnvelope, faMap } from '@fortawesome/free-regular-svg-icons'

const Footer = styled.div`
.container{
  background-color: #101010;
  padding-top: 2rem;
  .contact-row{
    margin: 0rem 4rem 0rem 4rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
    font-size: 1rem;
    a{
      font-weight: medium;
      padding: 2px;
    }
    a:hover{
      /* font-weight: bold; */
      color: rgba(108, 50, 224, 0.8);
      transition: 0.2s ease-in-out;
    }s
  }
  a{
    text-decoration: none;
    color: white;
  
  }
  .social-icons{
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0.25rem;
    li{
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.5rem;
      margin: 0.25rem;
      FontAwesomeIcon{
        color: black;
      }
      .main-icon{
        font-size: 28px;
      }
      .main-icon:hover{
        transition: 0.25s ease-in-out;
        color: rgba(108, 50, 224, 0.99);
      }
    }

  }
  .social-icons:hover{
    cursor: pointer;
    transition: 0.3s ease-in-out;
    background-color: #161516;
    border-radius: 10px;
  }
  .copyright{
    background-color: #161516;
    padding: 1rem;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: medium;
  }
}

`
const footer = () => {
  return (
    <Footer>
      <footer className='site-footer'>
        <div className="container">
          <div className="contact-row">
            <a href='https://www.google.com/maps/place/National+Institute+of+Technology,+Hamirpur+(NIT+-+Hamirpur)/@31.7084291,76.5273526,17z/data=!3m1!4b1!4m5!3m4!1s0x3904d5487e12c4a1:0x395f92d3a202a7d0!8m2!3d31.7084291!4d76.5273526'><div className="location"><FontAwesomeIcon icon={faMap} size='1x' /> National Institute of Technology, Hamirpur</div></a>
            <a href='mailto:teamiste@gmail.com'><div className="email"><FontAwesomeIcon icon={faEnvelope} size='1x' /> teamiste@gmail.com</div></a>
          </div>
          <div className="social-icons">
            <li>
              <Link
                className='main-icon'
                to='https://www.facebook.com/teamistenith/'
              >
                <FontAwesomeIcon icon={faFacebook} size='1x' />
              </Link>
            </li>
            <li>
              <Link className='main-icon' to='https://twitter.com/istenith'>
                <FontAwesomeIcon icon={faTwitter} size='1x' />
              </Link>
            </li>
            <li>
              <Link
                className='main-icon'
                to='https://github.com/istenith'
              >
                <FontAwesomeIcon icon={faGithub} size='1x' />
              </Link>
            </li>
            <li>
              <Link
                className='main-icon'
                to='https://www.instagram.com/teamistenith/?hl=en'
              >
                <FontAwesomeIcon icon={faInstagram} size='1x' />
              </Link>
            </li>
            <li>
              <Link className='main-icon' to='#'>
                <FontAwesomeIcon icon={faLinkedin} size='1x' />
              </Link>
            </li>
            <li>
              <Link
                className='main-icon'
                to='https://www.youtube.com/channel/UCIC-jhIbxXkcDxyQtJ3OKkQ'
              >
                <FontAwesomeIcon icon={faYoutube} size='1x' />
              </Link>
            </li>
          </div>
          <div className="copyright">
            © {new Date().getFullYear()}, ISTE-NITH{' '}
          </div>
        </div>
      </footer>
    </Footer>
  )
}

export default footer
