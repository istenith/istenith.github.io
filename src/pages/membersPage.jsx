import React, { useState } from "react";
import { motion } from "framer-motion";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import profileData from "../data/memberData";
import Footer from "../components/footer";

const MembersPage = () => {
  const [selectedSection, setSelectedSection] = useState("finalYear");

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  const filteredProfiles = profileData.filter(
    (profile) => profile.section === selectedSection
  );

  const cardVariants = {
    initial: { opacity: 0, y: 0 },
    animate: { opacity: 1, y: 0 },
  };

  const buttonVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="center-header-div">
        <h2 className="center-heading">MEET OUR TEAM</h2>
      </div>

      <div className="section-buttons">
        <motion.button
          onClick={() => handleSectionClick("finalYear")}
          className={`section-button ${
            selectedSection === "finalYear" ? "active" : ""
          }`}
          variants={buttonVariants}
          initial="initial"
          animate="animate"
        >
          Final Year
        </motion.button>
        <motion.button
          onClick={() => handleSectionClick("thirdYear")}
          className={`section-button ${
            selectedSection === "thirdYear" ? "active" : ""
          }`}
          variants={buttonVariants}
          initial="initial"
          animate="animate"
        >
          Third Year
        </motion.button>
        <motion.button
          onClick={() => handleSectionClick("secondYear")}
          className={`section-button ${
            selectedSection === "secondYear" ? "active" : ""
          }`}
          variants={buttonVariants}
          initial="initial"
          animate="animate"
        >
          Second Year
        </motion.button>
        {/* <motion.button
          onClick={() => handleSectionClick("firstYear")}
          className={`section-button ${
            selectedSection === "firstYear" ? "active" : ""
          }`}
          variants={buttonVariants}
          initial="initial"
          animate="animate"
        >
          First Year
        </motion.button> */}
      </div>
      <br />
      <br />
      <div className="team-section-main">
        {filteredProfiles.map((profile) => (
          <motion.div
            key={profile.id}
            className="profile-card"
            variants={cardVariants}
            initial="initial"
            animate="animate"
          >
            <div className="profile-img">
              <img src={profile.img} alt="" srcSet="" />
            </div>

            <div className="caption">
              <h3>{profile.name}</h3>
              <p>{profile.branch}</p>
              <p>{profile.post}</p>
              <p>{profile.location}</p>
              <div className="team-social-links">
                <a href={profile.instagram}>
                  <InstagramIcon style={{ color: "white", fontSize: "30px" }} />
                </a>
                <a href={profile.linkedin}>
                  <LinkedInIcon style={{ color: "white", fontSize: "30px" }} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default MembersPage;
