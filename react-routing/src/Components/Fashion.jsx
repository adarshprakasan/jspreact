import React from "react";
import { Link } from "react-router-dom";
import "../css/fashion.css";
import ApiData from "./ApiData";

function Fashion() {
  let fetchedData = ApiData(`https://fakestoreapi.com/products`);

  return (
    <div className="productSection">
      <div className="productList">
        {fetchedData.map(({ id, title, price, image }) => {
          {
            title.split(" ").length < 6
              ? (title = title.split(" ").slice(0, 6).join(" "))
              : (title = title.split(" ").slice(0, 6).join(" ") + "...");
          }

          return (
            <Link
              className="productCard"
              key={id}
              to={`/product-details/${id}`}
            >
              <div className="productImage">
                <img src={image} alt="" />
              </div>
              <div className="productDetails">
                <h4>{title}</h4>
                <h5>$ {price}</h5>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Fashion;
