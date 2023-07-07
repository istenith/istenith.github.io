import React from "react";
import BlueLogo from "../static/images/iste-logo-blue.png";
import instagramIcon from "../static/images/icons/instagram.png";
import facebookIcon from "../static/images/icons/facebook.png";
import githubIcon from "../static/images/icons/github.png";
import twitterIcon from "../static/images/icons/twitter.png";
import linkedinIcon from "../static/images/icons/linkedin.png";

const footer = () => {
  return (
    <div className="footer">
      <div className="sb__footer  section__padding">
        <div className="sb__footer-links">
          <div className="sb__footer-links-div">
            <img
              src={BlueLogo}
              className="sb__footer-isteLogo"
              alt=""
              srcset=""
            />
          </div>

          <div className="sb__footer-links-div">
            <h4>Visit Us</h4>
            <a href="/">
              <p>Email</p>
            </a>
            <a href="/">
              <p>NITH</p>
            </a>
            <a href="/">
              <p>ISTE</p>
            </a>
          </div>

          <div className="sb__footer-links-div">
            <h4>Connect with Us</h4>
            <div className="socialmedia">
              <p>
                <a
                  href="https://www.instagram.com/teamistenith/"
                  target="_blank"
                  rel="noreferrer"
                  className=""
                >
                  <img
                    src={instagramIcon}
                    alt=""
                    className="sb__footer-links-icon"
                    srcset=""
                  />
                </a>
              </p>
              <p>
                <a
                  href="https://www.linkedin.com/company/iste-nith/"
                  target="_blank"
                  rel="noreferrer"
                  className=""
                >
                  <img
                    src={linkedinIcon}
                    alt=""
                    className="sb__footer-links-icon"
                    srcset=""
                  />
                </a>
              </p>
              <p>
                <a
                  href="https://www.facebook.com/teamistenith/"
                  target="_blank"
                  rel="noreferrer"
                  className=""
                >
                  <img
                    src={facebookIcon}
                    alt=""
                    className="sb__footer-links-icon"
                    srcset=""
                  />
                </a>
              </p>
              <p>
                <a
                  href="https://github.com/istenith"
                  target="_blank"
                  rel="noreferrer"
                  className=""
                >
                  <img
                    src={githubIcon}
                    alt=""
                    className="sb__footer-links-icon"
                    srcset=""
                  />
                </a>
              </p>
              <p>
                <a
                  href="https://twitter.com/IsteNith"
                  target="_blank"
                  rel="noreferrer"
                  className=""
                >
                  <img
                    src={twitterIcon}
                    alt=""
                    className="sb__footer-links-icon"
                    srcset=""
                  />
                </a>
              </p>
            </div>
          </div>
        </div>

        <hr />
        <div className="sb_footer-below">
          <div className="sb_footer-copyright">
            <p>ISTE NITH@{new Date().getFullYear()}, Made with ❤️.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
