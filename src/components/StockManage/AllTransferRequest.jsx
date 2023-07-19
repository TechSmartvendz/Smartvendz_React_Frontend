import React, { useState, useEffect } from "react";
import { getReq, postReq } from "../middleware/AxiosApisCall";
import { useNavigate } from "react-router-dom";

function AlltransferRequest() {
  const [tableData, setTableData] = useState();

  const path = "alltransferRequest/Datalist";

  const navigate = useNavigate();
  const loadTableDate = async () => {
    const response = await getReq(path);
    if (response.data.length) {
      console.log("TableData:", response.data);
      setTableData(response.data);
    } else {
      console.log(response.data);
      setTableData(null);
    }
  };

  useEffect(() => {
    loadTableDate();
  }, []);

  const acceptProducts = async (id) => {
    const response = await postReq(`acceptStockTransferRequest/${id}`);
    if (response.data) {
      console.log("AcceptedData:", response.data);
      // setStatus("accepted");
      // setTableData(response.data);
    } else {
      // setStatus("pending");
    }
  };

  return (
    <React.Fragment>
      <div className="headingdiv">
        <span className="componet-title">All Transfer Stock Requests</span>
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
                  (key) =>
                    key != ("id" || null) && (
                      <th key={key}>
                        <span style={{ textTransform: "capitalize" }}>
                          {key}
                        </span>
                      </th>
                    )
                )
              ) : (
                <td></td>
              )}
              {tableData != null && <th>Actions</th>}
            </tr>

            {tableData != null ? (
              tableData.map((item, index) => {
                // console.log("🚀 ~ file: TableData.jsx:111 ~ TableData ~ item", item)
                return (
                  <tr key={item._id}>
                    {Object.keys(item)

                      .filter((i) => i !== "id")
                      .map((input, index) => {
                        return <td key={index}>{item[input]}</td>;
                      })}

                    <td>
                      <button
                        className="btn_edit"
                        onClick={() => acceptProducts(item.id)}
                      >
                        Accept
                      </button>
                    </td>
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

export default AlltransferRequest;
