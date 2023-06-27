import React from "react";
import "./Wishlist.css";
import Empty from "../../components/Empty/Empty";
import { useDispatch, useSelector } from "react-redux";
import EmptyImg from "../../assets/empty/empty-1.png";
import { Link } from "react-router-dom";
import { addToCart } from "../../context/cart";
import { removeFromHeart } from "../../context/heart";

function Wishlist() {
  const heart = useSelector((s) => s.heart.value);
  const dispatch = useDispatch();
  console.log(heart);
  return (
    <div className="container wishlist">
      <div className="wishlist__container">
        <h2 className="wishlist__title">Избранные</h2>

        <div className="wishlist__wrapper">
          {heart.length ? (
            heart?.map((item) => (
              <div key={item.id} className="wishlist__content">
                <div className="wishlist__img">
                  <img src={item.url} alt="" />
                </div>
                <Link
                  to={`/product/${item.id}`}
                  state={{ item }}
                  className="wishlist__item-name"
                >
                  {item.title}
                </Link>
                <div className="wishlist__body">
                  <div className="wishlist__body-price">
                    <del>{Math.round(item.price * 1.13)} сум</del>
                    <h2>{item.price} сум</h2>
                    {/* <p>{Math.round((item.price * 1.13) / 12)} so'm/oyiga</p> */}
                  </div>
                  <br />
                  <br />
                  <div className="wishlist__body-buttons">
                    <button
                      className="wishlist__body-buttons-btn-blue"
                      onClick={(e) => dispatch(addToCart(item))}
                    >
                      Добавить в корзину
                    </button>
                    <button
                      className="wishlist__body-buttons-btn-red"
                      onClick={(e) => dispatch(removeFromHeart(item))}
                    >
                      Удалить
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <Empty title="Нет избранных товаров" url={EmptyImg} desc="" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
