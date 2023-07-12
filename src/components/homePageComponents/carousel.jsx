import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import hultImage1 from "../../static/images/Hult_Images/Hult_01N.jpg";
import hultImage2 from "../../static/images/Hult_Images/Hult_04N.jpg";
import pahalImage1 from "../../static/images/Hult_Images/Hult_01N.jpg";
import pahalImage2 from "../../static/images/pahal_events.jpg";
import technexImage1 from "../../static/images/Technex 05.jpg";
import technexImage2 from "../../static/images/Technex 04.jpg";
import technexImage3 from "../../static/images/Technex 03.jpg";

const ImageCarousel = () => {
  const carouselImages = [
    hultImage1,
    hultImage2,
    pahalImage1,
    pahalImage2,
    technexImage1,
    technexImage2,
    technexImage3,
  ];

  
    return (
      <div className="carousel-container">
        <div className="carousel-wrapper">
          <Carousel
            showArrows={false}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={3000}
            infiniteLoop={true}
          >
            {carouselImages.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`img ${index + 1}`} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    );
  };
  
  export default ImageCarousel;
  