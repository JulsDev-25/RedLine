import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import "../style.css"; // Ajouter du style personnalisé
import image from '../assets/img/video.jpg'
import image1 from '../assets/img/chicago-333599.jpg'
import image2 from '../assets/img/baner1.jpg'
import image3 from '../assets/img/salle_de_cine.jpeg'

const Carousel = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      slidesPerView={1}
      pagination={{ clickable: true, }}
      autoplay={{
        delay: 10000, // Temps en millisecondes (3s ici)
        disableOnInteraction: false, // Continuer après une interaction
      }}
      loop={true}
      style={{ width: "100vw", height: "70vh", backgroundColor: "black" }}
    >
      <SwiperSlide><img src={image} alt="1" className="slide-image" style={{width: "100%", height: "100%", objectFit:"cover"}}/></SwiperSlide>
      <SwiperSlide><img src={image2} alt="2" className="slide-image" style={{width: "100%", height: "100%", objectFit:"cover"}}/></SwiperSlide>
      <SwiperSlide><img src={image2} alt="3" className="slide-image" style={{width: "100%", height: "100%", objectFit:"cover"}}/></SwiperSlide>
      <SwiperSlide><img src={image} alt="3" className="slide-image" style={{width: "100%", height: "100%", objectFit:"cover"}}/></SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
