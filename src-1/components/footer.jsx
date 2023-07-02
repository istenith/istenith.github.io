import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const footer = () => {
  return (
    <div className="footer">
      <div className="sb__footer  section__padding">
        <div className="sb__footer-links">
          <div className="sb__footer-links-div">
            <h4>ISTE LOGO</h4>
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
                <InstagramIcon
                  style={{ color: "#892be0", fontSize: "30px", width: "80%" }}
                />
              </p>
              <p>
                <LinkedInIcon
                  style={{ color: "#892be0", fontSize: "30px", width: "80%" }}
                />
              </p>
              <p>
                <InstagramIcon
                  style={{ color: "#892be0", fontSize: "30px", width: "80%" }}
                />
              </p>
              <p>
                <InstagramIcon
                  style={{ color: "#892be0", fontSize: "30px", width: "80%" }}
                />
              </p>
            </div>
          </div>
        </div>

        <hr />
        <div className="sb_footer-below">
          <div className="sb_footer-copyright">
            <p>ISTE NTIH@{new Date().getFullYear()}, Made with ❤️.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
