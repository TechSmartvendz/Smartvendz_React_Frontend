import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TableData from "../Partials/TableData";
import { getReq } from "../middleware/AxiosApisCall";
const ListSupplier = () => {
  const [tableData, setTableData] = useState();
  const [tableRefresh, setTableRefresh] = useState(0);

  const path = "listSupplier";
  const deletePath='deleteSupplier'
  const navigate = useNavigate();

  // editClick is used to get id and navigate to addsupplier
  
  const editClick = async (item) => {
    navigate(`../addsupplier/${item._id}`);
  };

  return (
    <React.Fragment>
      <div className="add-user-container">
        <div className="headingdiv">
          <span className="componet-title">Warehouse List</span>
          <div>
            <button onClick={() => navigate(-1)}>Back</button>
          </div>
        </div>
        <div className="option-btn">
          <button
            onClick={() => {
              navigate("../addsupplier");
            }}
          >
            Add New Supplier
          </button>
        </div>
     
        <TableData path={path} key={tableRefresh} deletePath={deletePath}  editClick={editClick} />
      </div>
    </React.Fragment>
  );
};

export default ListSupplier;
