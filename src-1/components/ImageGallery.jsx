import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import data from "../data/galleryData";
const ImageGallery = () => {
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} alt="" />
        <CloseIcon onClick={() => setModel(false)} />
      </div>
      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => getImg(item.imgSrc)}
            >
              <img src={item.imgSrc} alt="iste-img" style={{ width: "100%" }} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ImageGallery;
