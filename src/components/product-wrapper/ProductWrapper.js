import React from "react";
import "./ProductWrapper.css";
import { AiFillStar, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { LuMessageSquare } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToHeart, removeFromHeart } from "../../context/heart";
import { BsFillTrashFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { addToCart } from "../../context/cart";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../server";
import { toggle } from "../../context/proReload";
import { toast } from "react-toastify";

function ProductWrapper({ data, admin }) {
  const dispatch = useDispatch();
  const heart = useSelector((s) => s.heart.value);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "products", id))
      .then((res) => {
        dispatch(toggle());
        console.log(res);
        toast.warn("O'chirildi", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="products">
      {data?.map((item) => (
        <div key={item.id} className="card">
          <div className="card__image">
            <Link to={`/product/${item.id}`} state={{ item }}>
              <img src={item.url} alt="" width={160} />
            </Link>

            <button
              className="card__image-cart"
              onClick={(e) => dispatch(addToCart(item))}
            >
              <BsFillCartFill fill="#fff" />
            </button>
            <button className="card__image-heart">
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
          <div className="card__body">
            <Link
              to={`/product/${item.id}`}
              state={{ item }}
              className="card__title"
            >
              {item.title}
            </Link>
            <p className="card__rating">
              <div className="card__rating-stars">
                <AiFillStar fill="#FFD700" />
                <AiFillStar fill="#FFD700" />
                <AiFillStar fill="#FFD700" />
                <AiFillStar fill="#FFD700" />
                <AiFillStar fill="#FFD700" />
              </div>

              <p className="card__rating-reviews">
                <LuMessageSquare />0 отзывов
              </p>
            </p>
            <div className="card__price">
              <div>
                <del>{Math.round(item.price * 1.13)} сум</del>
                <p>{item.price} сум</p>
              </div>
            </div>
          </div>

          {/* <button
            className="card__cart"
            onClick={(e) => dispatch(addToCart(item))}
          >
            <BsFillCartFill fill="#fff" />
          </button> */}
          {admin ? (
            <button
              onClick={() => handleDelete(item.id)}
              className="card__cart"
            >
              <BsFillTrashFill fill="#fff" />
            </button>
          ) : (
            <button
              className="card__cart"
              onClick={() => dispatch(addToCart(item))}
            >
              <BsFillCartFill fill="#fff" />
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default ProductWrapper;
