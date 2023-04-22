import React from "react";
import { StarIcon } from "../../../assets";
import "./style.scss";
export const ProductHeading = () => {
  return (
    <div className="header-wrapper" style={{ position: "relative" }}>
      <h1>Most Popular </h1>
      <div className="border-line">
        <div className="white-bg-wrapper">
          <div className="icon-wrapper">
            <StarIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHeading;
