import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "../pages/home";
import EventPage from "../pages/eventPage";
import MembersPage from "../pages/membersPage.jsx";
import ImageGalleryPage from "../pages/ImageGalleryPage";
import BlogPage from "../pages/blogPage";
import BlogDetails from "./blogDetails";
import GalleryPageWrapper from "./GalleryPageWrapper";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = (currentTheme) => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage useTheme={currentTheme}/>} />
        <Route path="/events" element={<EventPage useTheme={currentTheme}/>} />
        <Route path="/members" element={<MembersPage />} />
        <Route path="/blogs" element={<BlogPage useTheme={currentTheme}/>} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route
          path="/gallery"
          element={
            <GalleryPageWrapper>
              <ImageGalleryPage />
            </GalleryPageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
