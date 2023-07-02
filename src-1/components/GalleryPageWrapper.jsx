// eslint-disable-next-line
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function GalleryPageWrapper({ children }) {
  const location = useLocation();

  useEffect(() => {
    const isGalleryPage = location.pathname === "/gallery";
    const styleElement = document.createElement("style");
    styleElement.setAttribute("id", "gallery-page-styles");

    if (isGalleryPage) {
      styleElement.textContent = `
        *::-webkit-scrollbar {
          display: none;
        }
        * {
          -ms-overflow-style: none;
        }
      `;
      document.head.appendChild(styleElement);
    } else {
      const existingStyleElement = document.getElementById(
        "gallery-page-styles"
      );
      if (existingStyleElement) {
        existingStyleElement.remove();
      }
    }

    return () => {
      const existingStyleElement = document.getElementById(
        "gallery-page-styles"
      );
      if (existingStyleElement) {
        existingStyleElement.remove();
      }
    };
  }, [location]);

  return <>{children}</>;
}
