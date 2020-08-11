import React from "react"
import styled from 'styled-components'
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faGithub,
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";

const Container = styled.footer`
    min-height: 60px;
    display: flex;
    justify-content: space-around;
    background-color: #242729;
    align-items:center;
    color: white;
    /* box-shadow: 0px -4px 3px rgba(50, 50, 50, 0.75); */

    .Copyright{
        flex: 1;
        text-align:end;
    }

    .icons{
        flex: 1;
        display: flex;
        flex-wrap:wrap;
        a{
            margin: 10px;
            color: white;
        }
    }
    
    .text{
        flex:2;
        margin:0;
        width: 20%;
        font-size: 0.7rem;
        margin: 0 10px;
        text-align: center;
    }
`;

const Footer = ()=>{
    return(
        <Container>
            <div className='Copyright'>© {new Date().getFullYear()}, ISTENITH</div>
            <p className='text'>Wanna talk to ISTE? Or be a part of it? You can contact any of our members personally or email us at <b>teamiste@gmail.com</b>!</p>
            <div className='icons'>
                <a href="https://www.facebook.com/teamistenith/">
                    <FontAwesomeIcon icon={faFacebook} size="1.5x" />
                </a>
                <a href="https://twitter.com/istenith">
                    <FontAwesomeIcon icon={faTwitter} size="1.5x" />
                </a>
                <a href="https://www.instagram.com/teamistenith/?hl=en">
                    <FontAwesomeIcon icon={faInstagram} size="1.5x" />
                </a>
                <a href="https://www.youtube.com/channel/UCIC-jhIbxXkcDxyQtJ3OKkQ">
                    <FontAwesomeIcon icon={faYoutube} size="1.5x" />
                </a>
                <a href="https://www.linkedin.com/company/iste-nith/?originalSubdomain=in">
                    <FontAwesomeIcon icon={faLinkedin} size="1.5x" />
                </a>
                <a href="https://github.com/istenith">
                    <FontAwesomeIcon icon={faGithub} size="1.5x" />
                </a>
            </div> 
        </Container>
    )
}


export default Footer
