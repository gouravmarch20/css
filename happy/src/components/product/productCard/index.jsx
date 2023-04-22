import React from "react";
import "./style.scss";
import {QtyButton} from "../../common/button/QtyButton";

export const ProductCard = ({ item }) => {
  return (
    <div className="card">
      <div className="img-wrapper">
        <img className="card-img" src={item.img_url} alt="" />
        {item.original_price && (
          <div className="disc-ribbon">
            {((item.original_price - item.final_price) / item.original_price) *
              100}{" "}
            % off
            <div className="triangle"></div>
          </div>
        )}
      </div>

      <div className="card-header">
        <div className="card-name">
          {item.name
            .split(" ")
            .map((ele) => ele.charAt(0).toUpperCase() + ele.slice(1))
            .join(" ")}
        </div>
        <div className="price-wrapper">
          <span>
            {item.original_price && (
              <s className="striked-text"> {item.original_price}</s>
            )}
            <span className="price"> ${item.final_price}</span>
          </span>
        </div>
      </div>
      <div className="card-desc">{item.description}</div>
      <div>
        <QtyButton props={"product"} item={item} />
      </div>
    </div>
  );
};
