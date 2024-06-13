import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import Livros1 from "../../img/Livros1.png"
import Livros2 from "../../img/Livros2.png"
import Livros3 from "../../img/Livros3.png"


export default function Carrrossel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...settings}>
      <div>
        <Image src={Livros1} alt="Foto 1" style={{ width: '100%' }} />
      </div>
      <div>
        <Image src={Livros2} alt="Foto 2" style={{ width: '100%' }} />
      </div>
      <div>
        <Image src={Livros3} alt="Foto 3" style={{ width: '100%' }} />
      </div>
    </Slider>
  );
};
