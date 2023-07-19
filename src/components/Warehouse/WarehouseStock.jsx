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
      console.log("warehouseStockdata:", response.data);
      setTableData(response.data);
      setTableRefresh(tableRefresh + 1);
    } else {
      console.log(response.data);
      setTableData(null);
    }
  };

  useEffect(() => {
    loadWarehouseStock();
  }, []);
  
  console.log("tableDatassss:", tableData);
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
          <tbody>
            <tr>
            {tableData != null ? (
              Object.keys(tableData[0]).map(
                (key,index) =>
                  key != ("_id" || null) && (
                    <>
                   
                    <th key={key}>
                 
                      <span style={{ textTransform: "capitalize" }}>
                        {key}
                      </span>
                    </th>
                    </>
                  )
              )
            ) : (
              <td></td>
            )}
            {/* {tableData != null && <th>Actions</th>} */}
          </tr>

          {tableData != null ? (
            tableData.map((item, index) => {
              // console.log("🚀 ~ file: TableData.jsx:111 ~ TableData ~ item", item)
              return (
                <tr key={item._id}>
                  {Object.keys(item)

                    .filter((i) => i !== "_id")
                    .map((input, index) => {
                      return <td key={index}>{item[input]}</td>;
                    })}

                  {/* <td>
                    <button
                      className="btn_edit"
                      onClick={() => acceptProducts(item.id)}
                    >
                      Accept
                    </button>
                  </td> */}
                </tr>
              );
            })
          ) : (
            <tr>
              <td> Data Not Found </td>
            </tr>
          )}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}

export default WarehouseStock;
