import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const ContactUs = () => {
  const sendEmail = (event) => {
    event.preventDefault(); // Prevent form submission

    const fullName = document.getElementsByName("fullName")[0].value;
    const email = document.getElementsByName("email")[0].value;
    const message = document.querySelector("textarea").value;

    if (!fullName || !email || !message) {
      // Check if any required field is empty
      alert("Please fill in all the required fields.");
      return;
    }

    const subject = `Contact from ${fullName}`;
    const body = message;

    const mailtoLink = `mailto:iste@nith.ac.in?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <section className="contact">
      <div className="content">
        <h2>Contact Us</h2>
        <p>
          Have a question or need assistance? Our team's always ready to help.
          Feel free to reach out, and we'll be delighted to aid you by providing
          heartfelt support.
        </p>
      </div>
      <div className="contact-container">
        <div className="contactInfo">
          <div className="box">
            <div className="icon">
              <LocationOnIcon />
            </div>
            <div className="text">
              <h3>Address</h3>
              <p>
                NIT,Hamirpur
                <br />
                Himachal Pradesh, India, <br />
                177001
              </p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <PhoneIcon />
            </div>
            <div className="text">
              <h3>Phone</h3>
              <p>12345578</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <EmailIcon />
            </div>
            <div className="text">
              <h3>Email</h3>
              <p>iste@nith.ac.in</p>
            </div>
          </div>
        </div>

        <div className="contactForm">
          <form>
            <h2>Send Message</h2>
            <div className="inputBox">
              <input type="text" name="fullName" required="required" />
              <span>Full Name</span>
            </div>
            <div className="inputBox">
              <input type="text" name="email" required="required" />
              <span>Email</span>
            </div>
            <div className="inputBox">
              <textarea required="required"></textarea>
              <span>Type your Message...</span>
            </div>
            <div>
              <button className="submit-btn" onClick={sendEmail}>
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
