import React, { useState, useEffect } from "react";
import {  postReq, patchReq } from "../middleware/AxiosApisCall";
import { SuccessAlert, ErrorAlert } from "../middleware/AlertMsg";//1
import TableData from "../Partials/TableData";//2
import DataList from "../Partials/DataList";
import { useParams } from "react-router-dom";

function Statemanage() {
  const path = "State";
  const [inputs, setInputs] = useState({});
  const [tableRefresh,setTableRefresh]=useState(0);//3
 
  const[par, setPar] = useState()
  

 
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
   if(par.length){
      const response = await patchReq(path, inputs,par.id);
      if (response.status === "success") {
        setPar()
        setTableRefresh(tableRefresh+1);//4
        setInputs({});//5
        SuccessAlert({title: "Add State", message: "State Added successfully" });
      } else {
        ErrorAlert({title: "Add State",message: response.error});
      }

    }else{

      const response = await postReq(path, inputs);
      if (response.status === "success") {
        setTableRefresh(tableRefresh+1);//4
        setInputs({});//5
        SuccessAlert({title: "Add State", message: "State Added successfully" });
      } else {
        ErrorAlert({title: "Add State",message: response.error});
      }
    };
  }

  const editClick=(pid)=>{
    setPar(pid)
    setInputs(pid) 

  }
  useEffect(() => {
   
    console.log(par)
   
  }, [par]);

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
            {/* {isparamsTrue()} */}
            {/* <button className="submit-btn">{useParams().stateId ?"Edit":"Add New"}</button> */}
            <button className="submit-btn">Add new</button>
          </div>
        </form>
        <TableData
          path={path}
          key={tableRefresh}
          editClick={editClick}
        />
      </div>
    </React.Fragment>
  );
}

export default Statemanage;
