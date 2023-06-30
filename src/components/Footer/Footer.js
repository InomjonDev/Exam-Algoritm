import React from "react";
import { useLocation } from "react-router-dom";
import Img from "../../assets/footer/img.webp";
import appleApp from "../../assets/footer/image (2).svg";
import googleApp from "../../assets/footer/image (1).svg";
import huaweiApp from "../../assets/footer/image.svg";
import "./Footer.css";
import Logo from "../../assets/logo/olcha-logo.svg";
import { CiLocationOn } from "react-icons/ci";
import { FiMail } from "react-icons/fi";

function Footer() {
  const { pathname } = useLocation();

  if (pathname.includes("/admin")) {
    return <></>;
  }
  return (
    <div className="container footer">
      <div className="footer__top">
        <div className="footer__top-left">
          <div className="footer__title">
            Наше мобильное приложение доступно <br /> в AppGallery, App store и
            Google play
          </div>
          <div className="footer__images">
            <div className="footer__img">
              <img src={appleApp} alt="" />
            </div>
            <div className="footer__img">
              <img src={googleApp} alt="" />
            </div>
            <div className="footer__img">
              <img src={huaweiApp} alt="" />
            </div>
          </div>
        </div>

        <div className="footer__top-right">
          <img src={Img} alt="" />
        </div>
      </div>
      {/* <div
        className="footer__bottom container
      "
      >
        <ul className="footer__bottom-block-1">
          <li className="footer__bottom-item">
            <p>Телефон поддержки</p>
          </li>
          <li className="footer__bottom-item">
            <p className="fwb">+998 (71) 202 202 1</p>
          </li>
          <li className="footer__bottom-item">
            <CiLocationOn fill="#da002b" />
            <a href="#">Козитарнов, Ташкент</a>
          </li>
          <li>
            <FiMail />
            <a href="#">info@olcha.uz</a>
          </li>
        </ul>
        <ul className="footer__bottom-center">
          <p>Информация</p>
          <div className="footer__bottom-center-content">
            <ul>
              <li>
                <a href="#">О компании</a>
              </li>
              <li>
                <a href="#">Вакансии</a>
              </li>
              <li>
                <a href="#">Возврат и обмен товаров</a>
              </li>
              <li>
                <a href="#">Условия рассрочки</a>
              </li>
              <li>
                <a href="#">Помощь</a>
              </li>
              <li>
                <a href="#">Доставка</a>
              </li>
            </ul>

            <ul>
              <li>
                <a href="#"> Eco-friendly </a>
              </li>
              <li>
                <a href="#">Бонусы и акции</a>
              </li>
              <li>
                <a href="#">Оплата и доставка</a>
              </li>
              <li>
                <a href="#" className="active">
                  Продавайте на olcha
                </a>
              </li>
              <li>
                <a href="#">Сервисные центры</a>
              </li>
            </ul>
          </div>
        </ul>
      </div> */}
    </div>
  );
}

export default Footer;
