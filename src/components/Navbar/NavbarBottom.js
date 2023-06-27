import React from "react";
import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineHome,
} from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { BiBarChart } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import Logo from "../../assets/logo/olcha-logo.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function NavbarBottom() {
  const cart = useSelector((state) => state.cart.value);
  const heart = useSelector((state) => state.heart.value);
  return (
    <>
      <div className="container navbar__bottom">
        <a href="tel:+998940072207" className="navbar__bottom-phone">
          <BsTelephone />
        </a>
        <div className="navbar__bottom-logo">
          <Link to={"/"}>
            <img src={Logo} alt="" />
          </Link>
        </div>
        {/* <div className="navbar__bottom-language">Рус</div> */}
        <button className="navbar__bottom-btn">
          <FiMenu />
          <span> Каталог</span>
        </button>
        <div className="navbar__bottom-search">
          <input type="text" placeholder="Поиск по каталогу" />
          <button>
            <AiOutlineSearch />
          </button>
        </div>
        <ul className="navbar__bottom-collection">
          <Link to={"/"} className="navbar__bottom-item">
            <Link to={"/"}>
              <AiOutlineHome />
            </Link>
            <Link to={"/"} className="navbar__bottom-item-hide">
              Главная
            </Link>
          </Link>
          <Link to={"/admin"} className="navbar__bottom-item">
            <Link to={"/admin"}>
              <BiBarChart />
            </Link>
            <Link to={"/admin"} className="navbar__bottom-item-hide">
              Сравнение
            </Link>
          </Link>
          <Link to={"/wishlist"} className="navbar__bottom-item">
            <Link to={"/wishlist"}>
              <span className="navbar__bottom-item-count-wishlist">
                {heart.length}
              </span>
              <AiOutlineHeart />
            </Link>
            <Link to={"/wishlist"} className="navbar__bottom-item-hide">
              Избранные
            </Link>
          </Link>
          <Link to={"/cart"} className="navbar__bottom-item">
            <Link to={"/cart"}>
              <span className="navbar__bottom-item-count">{cart.length}</span>
              <AiOutlineShoppingCart />
            </Link>
            <Link to={"/cart"} className="navbar__bottom-item-hide">
              Корзина
            </Link>
          </Link>
          <li className="navbar__bottom-item">
            <Link to={"/admin"}>
              <AiOutlineUser />
            </Link>
            <Link to={"/admin"} className="navbar__bottom-item-hide">
              Войти
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavbarBottom;
