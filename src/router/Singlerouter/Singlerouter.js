import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import "./Singlerouter.css";
import {
  AiFillStar,
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { LuMessageSquare } from "react-icons/lu";
import { RiBookMarkFill } from "react-icons/ri";
import { GiRead } from "react-icons/gi";
import { BsBookFill, BsTwitter } from "react-icons/bs";
import { GrFacebookOption } from "react-icons/gr";
import { FaTelegramPlane } from "react-icons/fa";
import { addToHeart, removeFromHeart } from "../../context/heart";

function Singlerouter() {
  const location = useLocation();
  const heart = useSelector((s) => s.heart.value);
  const dispatch = useDispatch();
  const item = location.state.item;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <div className="single__route">
        <div className="single__route-padding">
          <div className="single__route-mini-img">
            <img src={item?.url} alt="" width={24} height={32} />
          </div>
        </div>
        <div className="single__route-padding">
          <div className="single__route-img">
            <img src={item?.url} alt="" />
            <button className="single__route-btn">
              {heart.some((i) => i.id === item.id) ? (
                <AiFillHeart
                  fill="#f00"
                  onClick={() => dispatch(removeFromHeart(item))}
                />
              ) : (
                <AiOutlineHeart
                  fill="#ccc"
                  onClick={() => dispatch(addToHeart(item))}
                />
              )}
            </button>
          </div>
        </div>
        <div className="single__left">
          <h1>{item?.title}</h1>

          <p className="card__rating">
            <div className="card__rating-stars">
              <AiFillStar fill="#FFD700" />
              <AiFillStar fill="#FFD700" />
              <AiFillStar fill="#FFD700" />
              <AiFillStar fill="#FFD700" />
              <AiFillStar fill="#FFD700" />
            </div>

            <p className="card__rating-reviews">
              <LuMessageSquare />
              &nbsp;5 отзывов
            </p>
          </p>
          <div className="single__left-price">
            <del>{Math.round(item.price * 1.13)} сум</del>
            <h3>{item?.price} сум</h3>
            <span>{Math.round((item.price * 1.44) / 12)} сум / 12 мес</span>
          </div>
          <div className="single__left-info">
            <p>
              <span className="single__left-info-model">Модель:</span>
              <span className="single__left-info-name">
                Lorem ipsum dolor sit amet.
              </span>
            </p>
            <p>
              <span className="single__left-info-model">Наличии:</span>
              <span className="single__left-info-name-l">● Есть в наличии</span>
            </p>
          </div>
          <div className="single__left-actions">
            <p>Поделиться:</p>
            <div className="single__left-actions-icon facebook">
              <GrFacebookOption />
            </div>
            <div className="single__left-actions-icon telegram">
              <FaTelegramPlane />
            </div>
            <div className="single__left-actions-icon twitter">
              <BsTwitter />
            </div>
            <div className="single__left-actions-icon whatsapp">
              <AiOutlineWhatsApp />
            </div>
          </div>
          <div className="single__left-buttons">
            <button className="add__cart">Savatga qo'shish</button>
            <button className="add__bag">
              Tugmani 1 bosishda xarid qilish
            </button>
          </div>
        </div>
        {/* <div className="single__right">
          <h4>Голосуйте:</h4>
          <div className="single__right-actions">
            <RiBookMarkFill />
            <span>Прочитал</span>
            <span className="single__right-actions-count">0</span>
          </div>
          <div className="single__right-actions">
            <GiRead />
            <span>Прочитал</span>
            <span className="single__right-actions-count">0</span>
          </div>
          <div className="single__right-actions">
            <BsBookFill />
            <span>Прочитал</span>
            <span className="single__right-actions-count">0</span>
          </div>
          <div className="single__right-actions">
            <RiBookMarkFill />
            <span>Прочитал</span>
            <span className="single__right-actions-count">0</span>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Singlerouter;
