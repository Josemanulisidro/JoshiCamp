
import { useEffect } from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import AOS from "aos";
import "aos/dist/aos.css";
import { Parallax } from "react-scroll-parallax";

import Card from "../../Components/Card"
import ConteinerCenter from "../../Components/ConteinerCenter"

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./index.css";
import pantalla_1 from "../../../img/pantalla_1.WebP"
import pantalla_2 from "../../../img/pantalla_2.WebP"
import pantalla_3 from "../../../img/pantalla_3.WebP"
import paquetes_1 from "../../../img/paquetes_1.WebP"
import porton_2 from "../../../img/porton_2.mp4"

import instalacionbg_8 from "../../../img/instalacionbg_8.WebP"
import instalacion_11 from "../../../img/instalacion_11.WebP"

const Home = () =>{
  const isMobile = window.matchMedia("(min-width:768px)").matches;
  const isDesktop = window.matchMedia("(min-width:768px)").matches;


  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []); 


  return (
    <>
    {/* PRIMERA SECCIÓN  */}
      <section className="home-section-first">
        <img src={instalacion_11} alt="fondo" className="fondo" />

        <div className="home-content">
          <h1 data-aos="fade-up">Cámaras de seguridad</h1>
        </div>
   
          <div className="parallax-image" data-aos="fade-down">
            <Parallax speed={-15}>
              <img src={instalacionbg_8} alt="instalacion_8" />
            </Parallax>
        </div>
      </section>

      {/* SEGUNDA SECCIÓN  */}
      <section className="home-section-second">
        <div className="parallax-image">
          <Parallax speed={8}>
            <img src={paquetes_1} alt="paquetes_1" />
          </Parallax>
        </div>
      </section>

      {/* TERCERA SECCIÓN  */}
      <section className="home-section-third">

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false, // sigue después de usar flechas
              pauseOnMouseEnter: true     // se pausa al pasar el mouse
          }}
          loop
          >
            <SwiperSlide className="carrusel rounded-sm">
              <img
                src={pantalla_1}
                alt="Pantalla_1"
                className="carrusel-img h-80"
                data-aos="zoom-in"
              />
            </SwiperSlide>
              <SwiperSlide className="carrusel rounded-sm">
                <img 
                  src={pantalla_2} 
                  alt="pantalla_2"
                  className="carrusel-img h-80"
                  data-aos="zoom-in"
                />
              </SwiperSlide>
              <SwiperSlide className="carrusel rounded-sm">
                <img 
                  src={pantalla_3} 
                  alt="pantalla_3"
                  className="carrusel-img h-80"
                  data-aos="zoom-in"
                />
              </SwiperSlide>
        </Swiper>

      </section>

      <Card titulo={"Portones automaticos"}>
        <ConteinerCenter>
          <video width="640" height="480" controls className="porton" data-aos="fade-down-right">
            <source src={porton_2} type="video/mp4" />
          </video>
        </ConteinerCenter>
      </Card>

    </>
  );
}

export default Home
