import React from "react";
import Empty from "../../components/Empty/Empty";
import { useSelector } from "react-redux";
import "./Cart.css";
import CartImg from "../../assets/empty/empty-2.png";
import CartWrapper from "../../components/cartWrapper/CartWrapper";

function Cart() {
  const cart = useSelector((s) => s.cart.value);
  console.log(cart);
  return (
    <div className="container cart">
      {cart.length ? (
        <CartWrapper data={cart} />
      ) : (
        <Empty
          url={CartImg}
          title="Корзина пуста"
          desc="Но вы всегда можете ее наполнить"
        />
      )}
    </div>
  );
}

export default Cart;
