// Footer.jsx
import "react-bootstrap"
import React from "react";
import BlueLogo from "../static/images/iste-logo-blue.png";
import instagramIcon from "../static/images/icons/instagram.png";
import facebookIcon from "../static/images/icons/facebook.png";
import githubIconDark from "../static/images/icons/github-dark2.png";
import twitterIcon from "../static/images/icons/twitter.png";
import linkedinIcon from "../static/images/icons/linkedin.png";

const Footer = () => {
  return (
    <div className="footer container-fluid ">
      <div className="section__padding row ">


      <div className="footer__social-links margin-about col-lg-4">
            <h4>Connect with Us</h4>
            <div className="socialmedia">
              <a
                href="https://www.instagram.com/teamistenith/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={instagramIcon}
                  alt="Instagram"
                  className="footer__social-icon"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/iste-nith/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={linkedinIcon}
                  alt="LinkedIn"
                  className="footer__social-icon"
                />
              </a>
              <a
                href="https://www.facebook.com/teamistenith/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={facebookIcon}
                  alt="Facebook"
                  className="footer__social-icon"
                />
              </a>
              <a
                href="https://github.com/istenith"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={githubIconDark}
                  alt="GitHub"
                  className="footer__social-icon"
                />
              </a>
              <a
                href="https://twitter.com/IsteNith"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={twitterIcon}
                  alt="Twitter"
                  className="footer__social-icon"
                />
              </a>
            </div>
          </div>

        <div className="footer__content ">
          <div className="footer__logo margin-about col-lg-4">
            <img src={BlueLogo} alt="ISTE Logo" />
          </div>
        </div>
          


          

        </div>

        <hr />
                        <h6 className="rights">All rights reserved by ISTE NITH@{new Date().getFullYear()}</h6>


       
        
      
    </div>
  );
};

export default Footer;
