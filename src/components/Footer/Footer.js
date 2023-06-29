import React from "react";
import { useLocation } from "react-router-dom";
import Img from "../../assets/footer/img.webp";
import appleApp from "../../assets/footer/image (2).svg";
import googleApp from "../../assets/footer/image (1).svg";
import huaweiApp from "../../assets/footer/image.svg";

import "./Footer.css";

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
            Наше мобильное приложение доступно в AppGallery, App store и Google
            play
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
    </div>
  );
}

export default Footer;
