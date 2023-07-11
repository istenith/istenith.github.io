import React from "react";
import MessageWidget from "../components/ChatBot";
import AboutUs from "../components/homePageComponents/aboutUs";
import { motion } from "framer-motion";
import Domains from "../components/homePageComponents/domains";
import IntroBackground from "../components/particlesBackground/introBackground";
import ContactUs from "../components/homePageComponents/contactUs";
import Footer from "../components/footer";

const HomePage = (currentTheme) => {
  return (
    <>
      <motion.div
        inital={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <IntroBackground useTheme={currentTheme}/>
        <AboutUs />
        <Domains />
        <ContactUs />
        <Footer useTheme={currentTheme}/>
        <MessageWidget />
      </motion.div>
    </>
  );
};

export default HomePage;
