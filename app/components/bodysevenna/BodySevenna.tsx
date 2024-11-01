"use client"
import Image from "next/image"

import { Swiper, SwiperSlide } from "swiper/react"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import "./BodySevenna.css"

import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import logotipoSevenna from "../../assets/images/logotipoSevenna.png"
import depa1 from "../../assets/images/depa1.jpeg"
import depa2 from "../../assets/images/depa2.jpeg"
import depa3 from "../../assets/images/depa3.jpeg"
import depa4 from "../../assets/images/depa4.jpeg"
import depa5 from "../../assets/images/depa5.jpeg"
import picnic from "../../assets/images/picnic-table_907565.png"
import pool from "../../assets/images/familypool.png"
import mar from "../../assets/images/mar.png"
import grill from "../../assets/images/grill_6958610.png"
import chair from "../../assets/images/deck-chair_1852619.png"
import infinityPool from "../../assets/images/infinitypool.png"
import coctel from "../../assets/images/cocktail-glass_62526.png"
import muelle from "../../assets/images/muelle.png"
import facebook from "../../assets/images/icon-facebook.svg"
import instagram from "../../assets/images/icon-instagram.svg"


export default function BodySevenna() {
  return (
    <div className="sevenna-container">
      <div className="sevenna-header">
        <div className="sevenna-header__video">
          <video autoPlay loop muted>
            <source src="/assets/videos/video_playa.mp4"/>
          </video>
          <div className="sevenna-header__image">
            <Image src={logotipoSevenna} alt="Logotipo Sevenna"/>
          </div>
          <div className="sevenna-header__text">
            <h3>Departamentos de lujo en Telchac Puerto</h3>
            <p>Navega una vida frente al mar, con nuestro complejo de 7 departamentos con amenidades exclusivas pensadas para disfrutar de la mayor comodidad en Telchac Puerto</p>
          </div>
          <div className="sevenna-header__button">
            <a href="#" className="sevenna-header__link">Contáctanos</a>
          </div>
        </div>
      </div>
      <div className="sevenna-header__divider">
        <h3>Conoce Sevenna Telchac....</h3>
      </div>
      <div className="sevenna-divider">
      </div>
      <div className="sevenna-disfruta">
        <div className="sevenna-disfruta__list">
          <div className="sevenna-disfruta__text">
            <h3>Disfruta a la orilla del mar</h3>
            <p>Sevenna Telchac consiste en una torre de 4 niveles conformada por 7 departamentos frente al mar, la cual cuenta con amenidades exclusivas para los residentes.</p>
          </div>
          <div className="sevenna-disfruta__options">
            <p>7 departamentos</p>
            <p>+7 amenidades</p>
            <p>4 niveles</p>
          </div>
          <div className="sevenna-disfruta__slider">
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay,Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <Image src={depa1} alt="Departamento 1"/>
                </SwiperSlide>
                <SwiperSlide>
                  <Image src={depa2} alt="Departamento 2"/>
                </SwiperSlide>
                <SwiperSlide>
                  <Image src={depa3} alt="Departamento 3"/>
                </SwiperSlide>
                <SwiperSlide>
                  <Image src={depa4} alt="Departamento 4"/>
                </SwiperSlide>
                <SwiperSlide>
                  <Image src={depa5} alt="Departamento rooftop"/>
                </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div className="sevenna-disfruta__divider">
        <h3>Excelente ubicación cerca de todo y a la orilla del mar</h3>
      </div>
      <div className="sevenna-divider__video">
        <video autoPlay loop muted>
          <source src="/assets/videos/video_muelle.mp4" type="video/mp4"/>
        </video>
      </div>
      <div className="sevenna-amenidades">
        <div className="sevenna-amenidades__list">
          <div className="sevenna-amenidades__title"><h3>Amenidades de Sevenna Telchac</h3></div>
          <div className="sevenna-amenidades__images">
            <div className="sevenna-amenidades__card">
              <Image src={picnic} alt="Picnic"/>
              <p>1. Rooftop</p>
            </div>
            <div className="sevenna-amenidades__card">
              <Image src={pool} alt="Family pool"/>
              <p>2. Family pool</p>
            </div>
            <div className="sevenna-amenidades__card">
              <Image src={mar} alt="Mar"/>
              <p>3. Frente al mar</p>
            </div>
            <div className="sevenna-amenidades__card">
              <Image src={grill} alt="Grill"/>
              <p>4. Zonas Grill</p>
            </div>
            <div className="sevenna-amenidades__card">
              <Image src={chair} alt="Camastros"/>
              <p>5. Área de camastros</p>
            </div>
            <div className="sevenna-amenidades__card">
              <Image src={infinityPool} alt="Infinity Pool"/>
              <p>6. Infinity pool</p>
            </div>
            <div className="sevenna-amenidades__card">
              <Image src={coctel} alt="Coctel"/>
              <p>7. Terraza bar y otras áreas comunes</p>
            </div>
            <div className="sevenna-amenidades__card">
              <Image src={muelle} alt="Muelle"/>
              <p>8. A 170 mts del muelle</p>
            </div>
          </div>
        </div>
      </div>
      <div className="sevenna-adquiere">
        <div className="sevenna-adquiere__list">
          <div className="sevenna-adquiere__title"><h3>Adquiere un departamento a la orilla del mar</h3></div>
          <div className="sevenna-adquiere__text">
            <p>Déjanos tus datos y en seguida uno de nuestros asesores se contactará contigo</p>
          </div>
          <div className="sevenna-adquiere__socialmedia">
            <div className="sevenna-adquiere__text">
              <p>Síguenos en redes sociales: @sevennatelchac</p>
            </div>
            <div className="sevenna-adquiere__socialmedia-images">
              <div className="sevenna-adquiere__icon">
                <a href=""><Image src={facebook} alt="Logo"/></a>
              </div>
              <div className="sevenna-adquiere__icon">
                <a href=""><Image src={instagram} alt="Logo"/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}