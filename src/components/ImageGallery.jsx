import React, { useState, useEffect, useCallback } from "react";
import CloseIcon from "@mui/icons-material/Close";
import data from "../data/galleryData";
import styled from "styled-components";

const ImageWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const Tag = styled.div`
  position: absolute;
  bottom: 5px;
  left: 5px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
`;

const ImageGallery = () => {
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");
  const [tagContent, setTagContent] = useState(""); // New state for tag content

  const closeModel = useCallback(() => {
    setModel(false);
  }, []);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Escape") {
        closeModel();
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [closeModel]);

  const getImg = (imgSrc, tag) => {
    setTempImgSrc(imgSrc);
    setTagContent(tag); // Set the tag content for the selected image
    setModel(true);
  };

  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} alt="" />
        <Tag>{tagContent}</Tag>
        <CloseIcon onClick={closeModel} />
      </div>
      <div className="gallery">
        {data.map((item, index) => (
          <ImageWrapper
            key={index}
            onClick={() => getImg(item.imgSrc, item.tag)}
          >
            <img src={item.imgSrc} alt="iste-img" style={{ width: "100%" }} />
            <Tag>{item.tag}</Tag>
          </ImageWrapper>
        ))}
      </div>
    </>
  );
};

export default ImageGallery;
