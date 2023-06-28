import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./SliderCarousel.css";
import { Pagination } from "swiper";

import Img1 from "../../assets/slider-carousel/img1.png";
import Img2 from "../../assets/slider-carousel/img2.png";
import Img3 from "../../assets/slider-carousel/img3.png";
import Img4 from "../../assets/slider-carousel/img4.png";
import Img5 from "../../assets/slider-carousel/img5.png";
import Img6 from "../../assets/slider-carousel/img6.png";
import Img7 from "../../assets/slider-carousel/img7.png";
import Img8 from "../../assets/slider-carousel/img8.png";
import Img9 from "../../assets/slider-carousel/img9.png";
import Img10 from "../../assets/slider-carousel/img10.png";
import Img11 from "../../assets/slider-carousel/img11.png";
import Img12 from "../../assets/slider-carousel/img12.png";
import Img13 from "../../assets/slider-carousel/img13.png";
import Img14 from "../../assets/slider-carousel/img14.png";
import Img15 from "../../assets/slider-carousel/img15.png";
import Img16 from "../../assets/slider-carousel/img16.png";
import Img17 from "../../assets/slider-carousel/img17.png";
import Img18 from "../../assets/slider-carousel/img18.png";
import Img19 from "../../assets/slider-carousel/img19.png";
import Img20 from "../../assets/slider-carousel/img20.png";
import Img21 from "../../assets/slider-carousel/img21.png";

function SliderCarousel() {
  return (
    <div className="slider container">
      <Swiper
        slidesPerView={9}
        spaceBetween={40}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="slidercarousel"
      >
        <SwiperSlide>
          <div className="slider__img">
            <img src={Img1} alt="" />
          </div>
          <p className="slider__title">Телевизоры, фото-видео и аудио</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider__img">
            <img src={Img2} alt="" />
          </div>
          <p className="slider__title">Ноутбуки, принтеры, компьютеры</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider__img">
            <img src={Img3} alt="" />
          </div>
          <p className="slider__title">
            Смартфоны, телефоны, гаджеты, аксессуары
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider__img">
            <img src={Img4} alt="" />
          </div>
          <p className="slider__title">Бытовая техника</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider__img">
            <img src={Img5} alt="" />
          </div>
          <p className="slider__title">Все для кухни</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider__img">
            <img src={Img6} alt="" />
          </div>
          <p className="slider__title">Спорт товары</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider__img">
            <img src={Img7} alt="" />
          </div>
          <p className="slider__title">Красота и здоровье</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider__img">
            <img src={Img8} alt="" />
          </div>
          <p className="slider__title">Товары из за рубежа</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider__img">
            <img src={Img9} alt="" />
          </div>
          <p className="slider__title">Автотовары</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider__img">
            <img src={Img10} alt="" />
          </div>
          <p className="slider__title">Все для офиса, дома и сада</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider__img">
            <img src={Img11} alt="" />
          </div>
          <p className="slider__title">Игрушки и товары для детей</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider__img">
            <img src={Img12} alt="" />
          </div>
          <p className="slider__title">Одежда и обувь</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider__img">
            <img src={Img13} alt="" />
          </div>
          <p className="slider__title">Книги</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider__img">
            <img src={Img14} alt="" />
          </div>
          <p className="slider__title">Мебель</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider__img">
            <img src={Img15} alt="" />
          </div>
          <p className="slider__title">Для геймеров</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider__img">
            <img src={Img16} alt="" />
          </div>
          <p className="slider__title">Все для ремонта и строительства</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider__img">
            <img src={Img17} alt="" />
          </div>
          <p className="slider__title">Канцелярские товары</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider__img">
            <img src={Img18} alt="" />
          </div>
          <p className="slider__title">Электротранспорт</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider__img">
            <img src={Img19} alt="" />
          </div>
          <p className="slider__title">Подарки и сувениры</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider__img">
            <img src={Img20} alt="" />
          </div>
          <p className="slider__title">Умный дом</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider__img">
            <img src={Img21} alt="" />
          </div>
          <p className="slider__title">Выгодные предложения</p>
        </SwiperSlide>
      </Swiper>

      <div className="slidercarousel-media-block"></div>
    </div>
  );
}

export default SliderCarousel;
