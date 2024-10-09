import axios from "axios";
import React, { useEffect, useState } from "react";

function ApiData(url) {
  let [fetchedData, setFetchedData] = useState([]);
  async function dataFetch() {
    try {
      let { data } = await axios.get(url);
      console.log(data);
      setFetchedData(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    dataFetch();
  }, []);
  
  return fetchedData;
}

export default ApiData;
