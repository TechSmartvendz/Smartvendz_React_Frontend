import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TableData from "../Partials/TableData";
import { getReq } from "../middleware/AxiosApisCall";

function PurchaseStockList() {
  const [tableRefresh, setTableRefresh] = useState(0);
 const path = 'purchasestocklist'
  const navigate = useNavigate();

  const editClick = async (item) => {
    navigate(`../addsupplier/${item._id}`);
  };


  return (
    <React.Fragment>
      <div className="add-user-container">
        <div className="headingdiv">
          <span className="componet-title">Purchase Stock List</span>
          <div>
            <button onClick={() => navigate(-1)}>Back</button>
          </div>
        </div>
        <div className="option-btn">
          <button
            onClick={() => {
              navigate("../purchasestock");
            }}
          >
           Purchase New Stock
          </button>
        </div>
     {/* deletePath={deletePath} */}
        <TableData path={path} key={tableRefresh}   editClick={editClick} />
      </div>
    </React.Fragment>
  )
}

export default PurchaseStockList
