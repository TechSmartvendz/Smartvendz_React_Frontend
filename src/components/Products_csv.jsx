import React, { useEffect, useState } from "react";
import axios from "axios";
function Products_csv() {
  // const [csvdata,setCsvdata]=useState([]);
  useEffect(() => {
    axios
      .get("localhost:3000/productcsv/SVZBLR0099")
      .then((resp) => {
        console.log(resp.data);
      })
      .then((error) => {
        console.log(error);
      });
  }, []);
  return <div>Products_csv</div>;
}

export default Products_csv;
