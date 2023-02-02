import React, { useState, useEffect } from "react";
import { getReq, delReq, patchReq } from "../middleware/AxiosApisCall";
import { useParams, useNavigate, redirect } from "react-router-dom";

import { SuccessAlert, ErrorAlert } from "../middleware/AlertMsg";

function TableData(props) {
  const [tableData, setTableData] = useState();
  const [path, setPath] = useState(props.path);
  const [par, setpar] = useState(props.par);

  const loadTableDate = async () => {
    const response = await getReq(path);
    setTableData(response.data);
  };
const redirect=((item)=>{
    props.editClick(item);

  })

  useEffect(() => {
   
    loadTableDate();
  }, []);

  const deleteState = async (event) => {
    console.log("🚀 ~ file: TableData.jsx:19 ~ deleteState ~ event", event._id);
    // props.parentFunction();
    const response = await delReq(path, event._id);
    if (response.status === "success") {
      loadTableDate();
      SuccessAlert({
        title: "Data Deleted",
        message: `${path} : Delete Succesfully `,
      });
    } else {
      ErrorAlert({
        title: "${path} Delete: Error",
        message: response.error,
      });
    }
  };

  return (
    <React.Fragment>
      <div className="componet-sub2-title">
        <span>
          Total {path}: {tableData != null ? tableData.length : 0}
        </span>
      </div>
      <div className="table_container-div">
        <table>
          <tbody>
            <tr>
              {tableData != null ? (
                Object.keys(tableData[0]).map(
                  (key) =>
                    key != ("_id" || null) && (
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
                      .filter((i) => i !== "_id")
                      .map((input, index) => {
                        return <td key={index}>{item[input]}</td>;
                      })}

                   { par!=item._id?(<td>
                      <button
                        className="btn_edit"
                        onClick={() => redirect(item)}
                      >
                        Edit
                      </button>

                      <button
                        className="btn_delete"
                        value={item.id}
                        onClick={() => deleteState(item)}
                      >
                        Delete
                      </button>
                    </td>):(<td></td>)
                  }
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

export default TableData;
