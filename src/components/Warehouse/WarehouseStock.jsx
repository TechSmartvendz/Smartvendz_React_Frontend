import React, { useState, useEffect } from "react";
import { getReq, postReq } from "../middleware/AxiosApisCall";
import { useNavigate } from "react-router-dom";
function WarehouseStock() {
  const [tableData, setTableData] = useState();
  const [tableRefresh, setTableRefresh] = useState(0);
  const path = "getAllWarehouseStocks";

  const navigate = useNavigate();
  const loadWarehouseStock = async () => {
    const response = await getReq(path);
    if (response.data.length) {
      // console.log("warehouseStockdata:", response.data);
      setTableData(response.data);
      setTableRefresh(tableRefresh + 1);
    } else {
      // console.log(response.data);
      setTableData(null);
    }
  };

  useEffect(() => {
    loadWarehouseStock();
  }, []);
  
  const columnHeadings = tableData?.length > 0 ? Object.keys(tableData[0]) : [];
  // console.log("tableDatassss:", tableData);
  return (
    <React.Fragment>
      <div className="headingdiv">
        <span className="componet-title">Warehouse Stock </span>
        <div>
          <button onClick={() => navigate(-1)}>Back</button>
        </div>
      </div>
      <div className="componet-sub2-title">
        <span>Total: {tableData != null ? tableData.length : 0}</span>
      </div>
      <div className="table_container-div">
        <table>
          <thead>
            <tr>
              {/* Step 2: Create the table header dynamically */}
              {columnHeadings.map((heading, index) =>
                heading == "_id" ? (
                  <th key={index}>Serial Number</th>
                ) : (
                  <th key={index}>{heading}</th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {/* Step 3: Create the table body and populate with data */}
            {tableData?.map((dataObject, rowIndex) => (
              <tr key={rowIndex}>
                {columnHeadings.map((heading, colIndex) =>
                  heading == "_id" ? (
                    <td key={colIndex}>{rowIndex+1}</td>
                  ) : (
                    <td key={colIndex}>{dataObject[heading]}</td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}

export default WarehouseStock;
