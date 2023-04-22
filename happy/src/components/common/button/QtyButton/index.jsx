import React from "react";
import "./style.scss";
export const QtyButton = ({ props, item }) => {
  return (
    <div className={`centered ${props === "product" && "product-qty-handler"}`}>
      <button className="qty-btn-minus  pointer qty-btn ">-</button>

      <input type="text" name="" id="" className="qty-input" />
      <button className="pointer qty-btn qty-btn-plus">+</button>
    </div>
  );
};
