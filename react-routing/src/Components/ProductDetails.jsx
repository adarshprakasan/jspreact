import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  let { pid } = useParams();
  pid = Number(pid);

  let [fetchedData, setFetchedData] = useState([]);
  async function dataFetch() {
    try {
      let { data } = await axios.get(
        `https://fakestoreapi.com/products/${pid}`
      );
      console.log(data);
      setFetchedData(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    dataFetch();
  }, []);

  return (
    <div>
      <div className="productSection">
        <div className="productList">
          <div className="productCard" key={fetchedData.id}>
            <div className="productImage">
              <img src={fetchedData.image} alt="" />
            </div>
            <div className="productDetails">
              <h4>{fetchedData.title}</h4>
              <h5>{fetchedData.description}</h5>
              <h5>$ {fetchedData.price}</h5>
            </div>
          </div>
          ;
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
