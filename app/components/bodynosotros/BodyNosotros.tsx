"use client"
import Image from "next/image"

import { Swiper, SwiperSlide } from "swiper/react"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import "./BodyNosotros.css"

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import trabajo1 from "../../assets/images/trabajo1.jpeg"
import trabajo2 from "../../assets/images/trabajo2.jpeg"
import primeraPalmera from "../../assets/images/primera-palmera.jpg"
import isotipoZeptimo from "../../assets/images/isotipoZEPTIMO.png"
import logotipoZeptimo from "../../assets/images/logotipo.png"
import sevenaSlider from "../../assets/images/sevena_slider.png"
import galeiraSlider from "../../assets/images/galeira_slider.png"
import selahSlider from "../../assets/images/selah_slider.png"
import whatsapp from "../../assets/images/icon-whatsapp.svg"

export default function BodyNosotros() {
  return(
    <div className="nosotros-container">
      <div className="nosotros-header">
        <div className="nosotros-header__columns">
          <div className="nosotros-header__col1">
            <div className="nosotros-header__title"><h3>Nosotros</h3></div>
            <div className="nosotros-header__text">
              <p>Somos una desarrolladora inmobiliaria ubicada
              en Mérida Yucatán, especializada en el desarrollo de proyectos a la carta. Nuestro enfoque se distingue por integrar siempre un toque creativo y conceptual, asegurando así la diferenciación de nuestros productos en el mercado.</p>
            </div>
            <div className="nosotros-header__image-col1">
              <Image src={trabajo1} alt="Trabajo 1"/>
            </div>
          </div>
          <div className="nosotros-header__col2">
            <div className="nosotros-header__image-col2">
              <Image src={trabajo2} alt="Trabajo 2"/>
            </div>
            <div className="nosotros-header__image-col2">
              <Image src={primeraPalmera} alt="Primera Palmera"/>
            </div>
          </div>
        </div>
      </div>
      <div className="nosotros-historia">
        <div className="nosotros-historia__columns">
          <div className="nosotros-historia__col1">
            <div className="nosotros-historia__title"><h3>Nuestra historia</h3></div>
            <div className="nosotros-historia__text">
              <p><span>Zeptimo Desarrollos</span> es una desarrolladora inmobiliaria inaugurada en 2021, cuyo objetivo es la creación de proyectos caracterizados por un elevado nivel de innovación, conceptualización y personalización. Nos dedicamos a diseñar espacios que no solo sean funcionales y estéticamente hermosos, sino que también enriquezcan la vida de
              las personas.</p>
            </div>
            <div className="nosotros-historia__text">
              <p>Nuestra identidad visual, profundamente conectada con las creencias y valores de nuestro equipo fundador, se refleja en un logotipo inspirado en el hebreo antiguo.</p>
            </div>
          </div>
          <div className="nosotros-historia__col2">
            <div className="nosotros-historia__image">
              <Image src={isotipoZeptimo} alt="Isotipo Zeptimo"/>
            </div>
            <div className="nosotros-historia__image">
              <Image src={logotipoZeptimo} alt="Logotipo Zeptimo"/>
            </div>
          </div>
        </div>
      </div>
      <div className="nosotros-proyecto">
        <div className="nosotros-proyecto__list">
          <div className="nosotros-proyecto__title"><h3>Nuestros proyectos</h3></div>
          <div className="nosotros-proyecto__slider">
            <Swiper
              cssMode={true}
              navigation={true}
              pagination={true}
              mousewheel={true}
              keyboard={true}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Image src={sevenaSlider} alt="Sevenna"/>
              </SwiperSlide>
              <SwiperSlide>
                <Image src={galeiraSlider} alt="Galeira"/>
              </SwiperSlide>
              <SwiperSlide>
                <Image src={selahSlider} alt="Selah"/>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div className="nosotros-desarrollos">
        <div className="nosotros-desarrollos__content">
          <video autoPlay loop muted>
            <source src="/assets/videos/video_tennis.mp4" type="video/mp4"/>
          </video>
          <div className="nosotros-desarrollos__overlay"></div>
          <div className="nosotros-desarrollos__text">
            <h3>Desarrollos con esencia propia</h3>
            <p>Nuestros proyectos ofrecen soluciones creativas a la medida, cada uno conceptualizado y diseñado especialmente para ti</p>
          </div>
        </div>
      </div>
      <div className="nosotros-contactanos">
        <div className="nosotros-contactanos__title"><h3>Contáctanos por WhatsApp</h3></div>
        <div className="nosotros-desarrollos__card-button">
          <a href="https://wa.link/8ivan0" className="nosotros-contactanos__link">WhatsApp <Image src={whatsapp} alt="whatsapp"/></a>
        </div>
      </div>
    </div>
  )
}