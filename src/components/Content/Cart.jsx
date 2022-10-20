import React from "react";
import style from "./Cart.module.scss";
const Cart = ({img}) => {
  return (
     <div className={style.Cart}>
         <div className={style.img}>
          <img src={img} alt="" />
        </div>
    <h4>Samurai</h4>
      <div className={style.CartButoom}>
        <div className={style.Price}>
           от 540 $
        </div>
        <button>Купить</button>
      </div>
    </div>
  );
};




export default Cart;

