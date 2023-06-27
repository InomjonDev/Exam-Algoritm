import React from "react";

function NavbarTop() {
  return (
    <div className="navbar__top">
      <div className="container navbar__top-wrapper">
        <div>
          <ul className="navbar__top-buttons">
            <li>
              <a href="#" className="navbar__top-btn active">
                0% Рассрочка
              </a>
              <a href="#" className="navbar__top-btn ">
                Скидки
              </a>
              <a href="#" className="navbar__top-btn active">
                Розыгрыши
              </a>
            </li>
            <li>
              <a href="#" className="navbar__top-link">
                Карта сайта
              </a>
            </li>
            <li className="space"></li>
          </ul>
        </div>
        <div className="navbar__top-right">
          <div className="navbar__top-actions">
            <a href="tel:+998940072207" className="navbar__top-actions-tel">
              +998 (94) 007 22 07
            </a>
            <a href="#" className="navbar__top-actions-btn">
              Продавайте на olcha
            </a>
          </div>
          <div className="navbar__top-languages">
            <a href="#" className="navbar__top-languages-item ">
              Ўзб
            </a>
            <a href="#" className="navbar__top-languages-item ">
              O'z
            </a>
            <a href="#" className="navbar__top-languages-item active">
              Рус
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarTop;
