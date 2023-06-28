import React from "react";
import "./CartWrapper.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, decrementCart } from "../../context/cart";
import { addToHeart } from "../../context/heart";
import { Link } from "react-router-dom";

import MinusImg from "../../assets/cart/minus.svg";
import PlusImg from "../../assets/cart/plus.svg";

function CartWrapper({ data }) {
  // const { cart } = useSelector((state) => state.cart);
  const cart = useSelector((state) => state.cart.value);
  const handleSubmit = (e) => {
    e.preventDefault();

    let token = "6144853557:AAHD9rdfH1Abr0eUgGduGUucLA6e-VCGnzw";

    let chat_id = -987447222;

    let inp1 = encodeURIComponent(document.getElementById("text1").value);
    let inp2 = encodeURIComponent(document.getElementById("text2").value);
    let inp3 = encodeURIComponent(document.getElementById("text3").value);

    let my_text = `Mahsulot oluvhi:%0A - Mahsulot oluvhining ismi: ${inp1} %0A - Mahsulot oluvhining raqami: ${inp2}  %0A - Mahsulot oluvhining manzili: ${inp3} %0A%0A`;

    data?.forEach((item) => {
      my_text += `Nomi : ${item.title} %0A`;
      my_text += `Soni : ${item.quantity} %0A`;
      my_text += `Narxi : ${item.price} so'm %0A%0A`;
    });

    my_text += `Jami: ${data?.reduce(
      (a, b) => a + b.price * b.quantity,
      0
    )} som %0A`;

    let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}&parse_mode=html`;
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    console.log("Message sent");

    document.getElementById("text1").value = "";
    document.getElementById("text2").value = "";
    document.getElementById("text3").value = "";
  };

  const dispatch = useDispatch();
  console.log(data);

  return (
    <div className="cart__wrapper">
      <div className="cart__wrapper-content">
        <p className="cart__wrapper-title">В корзине {cart.length} товара</p>
        {data?.map((item) => (
          <>
            <div key={item.id} className="cart__wrapper-item">
              <div className="right">
                <div className="cart__wrapper-item-img">
                  <img src={item.url} width={80} alt="" />
                </div>
              </div>
              <div className="left">
                <div className="left__top">
                  <Link to={`/product/${item.id}`} state={{ item }}>
                    {item.title}
                  </Link>
                  <div className="left__top-quantity">
                    <button
                      disabled={item.quantity <= 1}
                      onClick={() => dispatch(decrementCart(item))}
                    >
                      <img src={MinusImg} alt="" />
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => dispatch(addToCart(item))}>
                      <img src={PlusImg} alt="" />
                    </button>
                  </div>
                  <div className="left__top-actions">
                    <h2 className="price">{item.price} сум</h2>
                    <del>{Math.round(item.price * 1.13)} so'm</del>
                  </div>
                </div>

                <div className="left__bottom">
                  <button onClick={() => dispatch(addToHeart(item))}>
                    В избранное
                  </button>
                  <button onClick={() => dispatch(removeFromCart(item.id))}>
                    Удалить
                  </button>
                </div>
              </div>
            </div>
            <hr />
          </>
        ))}
      </div>
      <div className="cart__wrapper-form">
        <h3>
          Итого:&nbsp; {data?.reduce((a, b) => a + b.price * b.quantity, 0)} сум
        </h3>
        <p>Вы экономите: 0 сум</p>
        <hr />
        <form id="form" onSubmit={handleSubmit}>
          <input type="text" id="text1" placeholder="Ismingiz" />
          <input type="text" id="text2" placeholder="Raqamingiz" />
          <input type="text" id="text3" placeholder="Manzil" />

          <button type="submit">Olish</button>
        </form>
      </div>
    </div>
  );
}

export default CartWrapper;
