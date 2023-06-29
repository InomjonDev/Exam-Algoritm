import React, { useState } from "react";
import "./CartWrapper.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, decrementCart } from "../../context/cart";
import { addToHeart } from "../../context/heart";
import { Link } from "react-router-dom";

import MinusImg from "../../assets/cart/minus.svg";
import PlusImg from "../../assets/cart/plus.svg";

function CartWrapper({ data }) {
  const cart = useSelector((state) => state.cart.value);
  const [promoCode, setPromoCode] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    let token = "6037583380:AAEX0ByfNpd0WoaBbGZ7ZeUs-qP5RnAkYJo";

    let chat_id = -979674009;

    let inp1 = encodeURIComponent(document.getElementById("text1").value);
    let inp2 = encodeURIComponent(document.getElementById("text2").value);
    let inp3 = encodeURIComponent(document.getElementById("text3").value);

    let my_text = `Mahsulot oluvhi:%0A 1.Mahsulot oluvhining ismi: ${inp1} %0A 2.Mahsulot oluvhining raqami: ${inp2}  %0A 3.Mahsulot oluvhining manzili: ${inp3} %0A%0A`;

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

    // Reset discounted price to 0
    setDiscountedPrice(0);

    document.getElementById("text1").value = "";
    document.getElementById("text2").value = "";
    document.getElementById("text3").value = "";
  };

  const handlePromoCodeSubmit = (e) => {
    e.preventDefault();
    if (promoCode === "admin") {
      const total = data?.reduce((a, b) => a + b.price * b.quantity, 0);
      const discount = total * 0.2;
      setDiscountedPrice(total - discount);
    } else {
      setDiscountedPrice(0);
    }
    // setPromoCode("");
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
          <span>Итого:</span>
          <p>{data?.reduce((a, b) => a + b.price * b.quantity, 0)} сум</p>
        </h3>
        <p>Вы экономите: 0 сум</p>
        <hr />
        <form
          action="#"
          className="cart__wrapper-promo-form"
          onSubmit={handlePromoCodeSubmit}
        >
          <input
            type="text"
            id="promo"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            placeholder="Введите промокод"
          />
          <button type="submit" className="cart__wrapper-promo-form-btn">
            Применить
          </button>
        </form>
        <div className="cart__wrapper-form-info">
          <p>
            <span className="fwb">Стоимость:</span>
            <span>
              {data?.reduce((a, b) => a + b.price * b.quantity, 0)} сум
            </span>
          </p>
          <p>
            <span className="fwb">Промокод:</span>
            <span>
              {promoCode === "admin" ? `${discountedPrice} сум` : "0 сум"}
            </span>
          </p>
        </div>
        <hr />
        <form id="form" onSubmit={handleSubmit}>
          <input type="text" required id="text1" placeholder="Ismingiz" />
          <input type="text" required id="text2" placeholder="Raqamingiz" />
          <input type="text" required id="text3" placeholder="Manzil" />
          <button type="submit">Olish</button>
        </form>
      </div>
    </div>
  );
}

export default CartWrapper;

// import Reactб, { useState } from "react";
// import "./CartWrapper.css";
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart, removeFromCart, decrementCart } from "../../context/cart";
// import { addToHeart } from "../../context/heart";
// import { Link } from "react-router-dom";

// import MinusImg from "../../assets/cart/minus.svg";
// import PlusImg from "../../assets/cart/plus.svg";

// function CartWrapper({ data }) {
//   const cart = useSelector((state) => state.cart.value);
//   const [promoCode, setPromoCode] = useState("");
//   const [discountedPrice, setDiscountedPrice] = useState(0);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     let token = "6144853557:AAHD9rdfH1Abr0eUgGduGUucLA6e-VCGnzw";

//     let chat_id = -987447222;

//     let inp1 = encodeURIComponent(document.getElementById("text1").value);
//     let inp2 = encodeURIComponent(document.getElementById("text2").value);
//     let inp3 = encodeURIComponent(document.getElementById("text3").value);

//     let my_text = `Mahsulot oluvhi:%0A - Mahsulot oluvhining ismi: ${inp1} %0A - Mahsulot oluvhining raqami: ${inp2}  %0A - Mahsulot oluvhining manzili: ${inp3} %0A%0A`;

//     data?.forEach((item) => {
//       my_text += `Nomi : ${item.title} %0A`;
//       my_text += `Soni : ${item.quantity} %0A`;
//       my_text += `Narxi : ${item.price} so'm %0A%0A`;
//     });

//     my_text += `Jami: ${data?.reduce(
//       (a, b) => a + b.price * b.quantity,
//       0
//     )} som %0A`;

//     let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}&parse_mode=html`;
//     let api = new XMLHttpRequest();
//     api.open("GET", url, true);
//     api.send();
//     console.log("Message sent");

//     document.getElementById("text1").value = "";
//     document.getElementById("text2").value = "";
//     document.getElementById("text3").value = "";
//   };

//   const handlePromoCodeSubmit = (e) => {
//     e.preventDefault();

//     if (promoCode === "admin") {
//       setDiscountedPrice(
//         data?.reduce((a, b) => a + b.price * b.quantity, 0) * 0.8
//       );
//     }

//     setPromoCode("");
//   };

//   const dispatch = useDispatch();
//   console.log(data);

//   return (
//     <div className="cart__wrapper">
//       <div className="cart__wrapper-content">
//         <p className="cart__wrapper-title">В корзине {cart.length} товара</p>
//         {data?.map((item) => (
//           <>
//             <div key={item.id} className="cart__wrapper-item">
//               <div className="right">
//                 <div className="cart__wrapper-item-img">
//                   <img src={item.url} width={80} alt="" />
//                 </div>
//               </div>
//               <div className="left">
//                 <div className="left__top">
//                   <Link to={`/product/${item.id}`} state={{ item }}>
//                     {item.title}
//                   </Link>
//                   <div className="left__top-quantity">
//                     <button
//                       disabled={item.quantity <= 1}
//                       onClick={() => dispatch(decrementCart(item))}
//                     >
//                       <img src={MinusImg} alt="" />
//                     </button>
//                     <span>{item.quantity}</span>
//                     <button onClick={() => dispatch(addToCart(item))}>
//                       <img src={PlusImg} alt="" />
//                     </button>
//                   </div>
//                   <div className="left__top-actions">
//                     <h2 className="price">{item.price} сум</h2>
//                     <del>{Math.round(item.price * 1.13)} so'm</del>
//                   </div>
//                 </div>

//                 <div className="left__bottom">
//                   <button onClick={() => dispatch(addToHeart(item))}>
//                     В избранное
//                   </button>
//                   <button onClick={() => dispatch(removeFromCart(item.id))}>
//                     Удалить
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <hr />
//           </>
//         ))}
//       </div>
//       <div className="cart__wrapper-form">
//         <h3>
//           <span>Итого:</span>
//           <p>{data?.reduce((a, b) => a + b.price * b.quantity, 0)} сум</p>
//         </h3>
//         <p>Вы экономите: 0 сум</p>
//         <hr />
//         <form
//           action="#"
//           className="cart__wrapper-promo-form"
//           onSubmit={handlePromoCodeSubmit}
//         >
//           <input
//             type="text"
//             id="promo"
//             value={promoCode}
//             onChange={(e) => setPromoCode(e.target.value)}
//             placeholder="Введите промокод"
//           />

//           <button type="submit" className="cart__wrapper-promo-form-btn">
//             Применить
//           </button>
//         </form>
//         <div className="cart__wrapper-form-info">
//           <p>
//             <span className="fwb">Стоимость:</span>
//             <span>
//               {data?.reduce((a, b) => a + b.price * b.quantity, 0)} сум
//             </span>
//           </p>
//           <p>
//             <span className="fwb">Промокод:</span>
//             <span>
//               {promoCode === "admin" ? discountedPrice + " сум" : "0 сум"}
//               {/* {discountedPrice} сум */}
//             </span>
//           </p>
//         </div>
//
//       </div>
//     </div>
//   );
// }

// export default CartWrapper;
