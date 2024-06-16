import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Carrossel_01 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    centerMode: true,
    swipeToSlide: true,
  };

  const images = [
    "ctz_branquelas.png",
    "ctz_centraldeinteligencia.png",
    "ctz_donzela.png",
    "ctz_planetadosmacacos.png",
    "ctz_semescalas.png",
    "ctz_mascara.png",
    "ctz_duna.png"
  ];

  return (
    <div className="container mx-auto mt-6">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="p-4">
            <img src={image} alt={`Slide ${index}`} className="w-48 h-72 rounded-lg"/>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carrossel_01;