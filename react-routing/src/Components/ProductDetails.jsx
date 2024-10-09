import React from "react";
import { useParams } from "react-router-dom";
import ApiData from "./ApiData";
import "../css/productdetails.css";

function ProductDetails() {
  let { pid } = useParams();
  pid = Number(pid);

  let fetchedData = ApiData(`https://fakestoreapi.com/products/${pid}`);

  return (
    <div className="pdSection">
      <div className="pdCard" key={fetchedData.id}>
        <div className="pdImage">
          <img src={fetchedData.image} alt="" />
        </div>
        <div className="pdDetails">
          <div className="pdDetail">
            <h4>{fetchedData.title}</h4>
            <hr />
            <h5>{fetchedData.description}</h5>
          </div>
          <h6>$ {fetchedData.price}</h6>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;

// icici emi calculator
// react charts
