
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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

import instalacion_8 from "../../../img/instalacion_888.WebP"

import product_1 from "../../../img/product_1.webp"
import product_2 from "../../../img/product_2.webp"
import product_3 from "../../../img/product_3.webp"
import product_4 from "../../../img/product_4.webp"
import product_5 from "../../../img/product_5.webp"
import product_6 from "../../../img/product_6.webp"
import product_7 from "../../../img/product_7.webp"
import product_8 from "../../../img/product_8.webp"
import product_9 from "../../../img/product_9.webp"
import product_10 from "../../../img/product_10.webp"
import product_11 from "../../../img/product_11.webp"

const Home = () =>{

  return (
    <>
    <div className="conteiner-paquetes">
      <img 
        src={paquetes_1}
        alt="paques_1"
      />
    </div>

    <div className="conteiner-inicio">
      <div className="cont-intalacion conteiner-instalacion-img">
        <img 
          src={instalacion_8}
          alt="instlacion_8"
        />
      </div>
      <div className="cont-intalacion container-instalacion-titulo"><h1>Protege lo que más importa</h1></div>
      <div className="cont-intalacion txt-instalacion"><p>Monitorea tu hogar o negocio en tiempo real con cámaras de alta definición, acceso desde tu celular y grabación 24/7</p></div>
    </div>

        <Card titulo={"Seguridad para tu familia, todos los días"}>
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
              />
            </SwiperSlide>
            <SwiperSlide className="carrusel rounded-sm">
              <img 
                src={pantalla_2} 
                alt="pantalla_2"
                className="carrusel-img h-80"
              />
            </SwiperSlide>
            <SwiperSlide className="carrusel rounded-sm">
              <img 
                src={pantalla_3} 
                alt="pantalla_3"
                className="carrusel-img h-80"
              />
            </SwiperSlide>

          </Swiper>
        </Card>

          <Card titulo={"Portones automaticos"}>
            <ConteinerCenter>
              <video width="640" height="480" controls className="porton">
                <source src={porton_2} type="video/mp4" />
              </video>
            </ConteinerCenter>
          </Card>

        <Card titulo={"Instalaciones para tu seguridad"}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false, // sigue después de usar flechas
                pauseOnMouseEnter: true     // se pausa al pasar el mouse
            }}
            loop
          >
            <SwiperSlide className="carrusel rounded-sm">
              <img
                src={product_1}
                alt="product_1"
                className="h-80"
              />
            </SwiperSlide>
            <SwiperSlide className="carrusel rounded-sm">
              <img 
                src={product_2} 
                alt="product_2"
                className="h-80"
              />
            </SwiperSlide>
            <SwiperSlide className="carrusel rounded-sm">
              <img 
                src={product_3} 
                alt="product_3"
                className="h-80"
              />
            </SwiperSlide>
            <SwiperSlide className="carrusel rounded-sm">
              <img 
                src={product_4} 
                alt="product_4"
                className="h-80"
              />
            </SwiperSlide>
            <SwiperSlide className="carrusel rounded-sm">
              <img 
                src={product_5} 
                alt="product_5"
                className="h-80"
              />
            </SwiperSlide>
            <SwiperSlide className="carrusel rounded-sm">
              <img 
                src={product_6} 
                alt="product_6"
                className="h-80"
              />
            </SwiperSlide>
            <SwiperSlide className="carrusel rounded-sm">
              <img 
                src={product_7} 
                alt="product_7"
                className="h-80"
              />
            </SwiperSlide>
            <SwiperSlide className="carrusel rounded-sm">
              <img 
                src={product_8} 
                alt="product_8"
                className="h-80"
              />
            </SwiperSlide>
            <SwiperSlide className="carrusel rounded-sm">
              <img 
                src={product_9} 
                alt="product_9"
                className="h-80"
              />
            </SwiperSlide>
            <SwiperSlide className="carrusel rounded-sm">
              <img 
                src={product_10} 
                alt="product_10"
                className="h-80"
              />
            </SwiperSlide>
            <SwiperSlide className="carrusel rounded-sm">
              <img 
                src={product_11} 
                alt="product_11"
                className="h-80"
              />
            </SwiperSlide>

          </Swiper>
        </Card>
    </>
  );
}

export default Home
