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
          


          <div className="footer__google-map margin-about col-lg-4">
         
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3394.273282644758!2d76.52477231126821!3d31.70842907402051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904d5487e12c4a1%3A0x395f92d3a202a7d0!2sNational%20Institute%20of%20Technology%2C%20Hamirpur!5e0!3m2!1sen!2sin!4v1692795340624!5m2!1sen!2sin" width="350" height="200" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        </div>

        <hr />
                        <h6 className="rights">All rights reserved by ISTE NITH@{new Date().getFullYear()}</h6>


       
        
      
    </div>
  );
};

export default Footer;
