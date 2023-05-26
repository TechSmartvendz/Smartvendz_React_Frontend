import React, { useState } from "react";
import DataList from "../Partials/DataList";
function TableData3() {
  const Refillersdata = [
    {
      RequestNo: "RF252",
      RequestDate: "20-02-2023",
      MachineName: "ANZ MTP 4th Floor",
      Status: "New",
    },
    {
      RequestNo: "RF252",
      RequestDate: "20-02-2023",
      MachineName: "ANZ MTP 4th Floor",
      Status: "New",
    },
    {
      RequestNo: "RF252",
      RequestDate: "20-02-2023",
      MachineName: "ANZ MTP 4th Floor",
      Status: "New",
    },
    {
      RequestNo: "RF252",
      RequestDate: "20-02-2023",
      MachineName: "ANZ MTP 4th Floor",
      Status: "New",
    },
    {
      RequestNo: "RF252",
      RequestDate: "20-02-2023",
      MachineName: "ANZ MTP 4th Floor",
      Status: "New",
    },
  ];

  const [refilldata, setRefilldata] = useState(Refillersdata);
const [inputs,setInputs]=useState({});

  function handleChange(e) {
   const name=e.target.name;
   const value=e.target.value;
   setInputs((values)=>
   ({...values,[name]:value})
   
   )

  }

  function handleSubmit(e) {
  e.preventDefault();
  }

  return (
    <React.Fragment>
      <div className="componet-sub2-title">
        <span>
          Total Records:{" "}
          {/* Total {props.name}: {props.data != null ? props.data.length : 0} */}
        </span>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="table_container-div">
          <table>
            <tbody>
              <tr>
                {Refillersdata != null ? (
                  Object.keys(Refillersdata[0]).map(
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
                {Refillersdata != null && <th>Actions</th>}
              </tr>

              <tr>
               
                {/* <td>
                  {" "}
                  <DataList
                    value={inputs.country || ""}
                    path={"Country"}
                    handleChange={handleChange}
                    option={"country"}
                    name={"country"}
                    heading={"Country"}
                  />
                  
                </td> */}
               
               
              </tr>

              {Refillersdata != null ? (
                Refillersdata.map((item, index) => {
                  // console.log("🚀 ~ file: props.data.jsx:111 ~ props.data ~ item", item)
                  return (
                    <tr key={item._id}>
                      {Object.keys(item)
                        .filter((i) => i !== "_id")
                        .map((input, index) => {
                          return <td key={index}>{item[input]}</td>;
                        })}

                      <td>
                        <button className="btn_edit">Edit</button>

                        <button className="btn_delete">Delete</button>
                        
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
      </form>
    </React.Fragment>
  );
}

export default TableData3;
