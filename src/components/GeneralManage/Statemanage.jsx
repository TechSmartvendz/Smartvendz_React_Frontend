import React, { useState, useEffect } from "react";
import {  postReq } from "../middleware/AxiosApisCall";
import { SuccessAlert, ErrorAlert } from "../middleware/AlertMsg";//1
import TableData from "./TableData";//2
import DataList from "./DataList";

function Statemanage() {
  const path = "State";
  const [inputs, setInputs] = useState({});
  const [tableRefresh,setTableRefresh]=useState(0);//3
 
 

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await postReq(path, inputs);
    if (response.status === "success") {
      setTableRefresh(tableRefresh+1);//4
      setInputs({});//5
      SuccessAlert({title: "Add State", message: "State Added successfully" });
    } else {
      ErrorAlert({title: "Add State",message: response.error});
    }
  };


  return (
    <React.Fragment>
      <div className="add-user-container">
        <div>
          <span className="componet-title">State Manage</span>
        </div>
        <form className="flex-row form-2col-ver" onSubmit={handleSubmit}>
          <div className="componet-sub-title">
            <span>State Details</span>
          </div>
          <div className="general-manage-div">
            <label htmlFor="name">State:</label>
            <input
              name="state"
              type="text"
              value={inputs.state || ""}
              onChange={handleChange}
              required
            />
            <DataList
             
              value={inputs.country || ""}
              path={"Country"}
              handleChange={handleChange}
              name={"country"}
              heading={"Country"}
            />
            <button className="submit-btn">Add New</button>
          </div>
        </form>
        <TableData
          path={path}
          key={tableRefresh}
        />
      </div>
    </React.Fragment>
  );
}

export default Statemanage;
