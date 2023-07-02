import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
// import bgImg from "../../static/images/contact-bg.jpeg"

const contactUs = () => {
  //   const divStyle = {
  //     backgroundImage: `url(${bgImg})`,
  //     backgroundSize: 'cover',
  //     backgroundPosition: 'center',
  //   };

  return (
    <section class="contact">
      <div class="content">
        <h2>Contact Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </div>
      <div class="contact-container">
        <div class="contactInfo">
          <div class="box">
            <div class="icon">
              <LocationOnIcon />
            </div>
            <div class="text">
              <h3>Address</h3>
              <p>
                NITH,Hamirpur
                <br />
                Himachal Pradesh, India, <br />
                177001
              </p>
            </div>
          </div>
          <div class="box">
            <div class="icon">
              <PhoneIcon />
            </div>
            <div class="text">
              <h3>Phone</h3>
              <p>12345578</p>
            </div>
          </div>
          <div class="box">
            <div class="icon">
              <EmailIcon />
            </div>
            <div class="text">
              <h3>Email</h3>
              <p>iste@nith.ac.in</p>
            </div>
          </div>
        </div>

        <div class="contactForm">
          <form>
            <h2>Send Message</h2>
            <div class="inputBox">
              <input type="text" name=" " required="required" />
              <span>Full Name</span>
            </div>
            <div class="inputBox">
              <input type="text" name=" " required="required" />
              <span>Email</span>
            </div>
            <div class="inputBox">
              <textarea required="required"></textarea>
              <span>Type your Message...</span>
            </div>
            <div>
              <input
                type="submit"
                name=" "
                value="send"
                className="submit-btn"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default contactUs;
