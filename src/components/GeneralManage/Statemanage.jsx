import React, { useState } from "react";
import {  postReq, patchReq } from "../middleware/AxiosApisCall";
import { SuccessAlert, ErrorAlert } from "../middleware/AlertMsg";//1
import TableData from "../Partials/TableData";//2
import DataList from "../Partials/DataList";
import { useNavigate } from "react-router-dom";

function Statemanage() {
  const navigate=useNavigate();
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
   if(par){
      console.log("🚀 ~ file: Statemanage.jsx:26 ~ handleSubmit ~ par", par)
      const response = await patchReq(path, inputs,par);
      if (response.success) {
        setPar()
        setTableRefresh(tableRefresh+1);//4
        setInputs({});//5
        SuccessAlert({title: "Edit State", message: "State Update successfully" });
      } else {
        setPar();
        setTableRefresh(tableRefresh + 1); //4
        setInputs({});
        ErrorAlert({title: "Edit State",message: response.msg});
      }

    }else{
      console.log("🚀 ~ file: Statemanage.jsx:38 ~ handleSubmit ~ par", par)
      const response = await postReq(path, inputs);
      if (response.success) {
        console.log(response.data)
        setTableRefresh(tableRefresh+1);//4
        setInputs({});//5
        SuccessAlert({title: "Add State", message: "State Added successfully" });
      } else {
        ErrorAlert({title: "Add State",message: response.msg});
      }
    }
  }

  const editClick=(pid)=>{
    console.log('this is ', pid)
    setPar(pid._id)
    setInputs(pid) 

  }
  

  return (
    <React.Fragment>
      <div className="add-user-container">
        <div className="headingdiv">
          <span className="componet-title">State Manage</span>
          <div>
          <button onClick={(()=>navigate(-1))}>Back</button>
          </div>
        </div>
        <form className="flex-row form-2col-ver" onSubmit={handleSubmit}>
          <div className="componet-sub-title">
            <span>State </span>
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
            <button className="submit-btn">{par?(<span>Update </span>):(<span>Add </span>)}</button>
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
