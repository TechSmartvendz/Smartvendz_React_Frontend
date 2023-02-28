import axios from "axios";
import React from "react";
import { useState,useEffect } from "react";
import { ErrorAlert, SuccessAlert } from "../middleware/AlertMsg";
import {  getReq ,patchReq} from "../middleware/AxiosApisCall";
import { useNavigate, useParams} from "react-router-dom";
import TableData from "../Partials/TableData";

function Listmachine() {
const path="Machine"
const [tableData,setTableData]=useState();
const[tableRefresh,setTableRefresh]=useState(0)

  const loadTableDate=async()=>{
    const response=await getReq(path);
    setTableData(response.data)
    console.log(tableData)
  }
  useEffect(() => {
    loadTableDate()
  }, []) 
const navigate=useNavigate()
const editClick=(item)=>{
navigate(`../addnewmachine/${item._id}`);
console.log(item._id)

}

  return (
    <React.Fragment>
      <div className="add-user-container">
       
      <div className="headingdiv">

     <span className="componet-title">Machine List</span>
      
     <div>
    <button onClick={()=>{navigate(-1)}}>Back</button>
      </div>
      
      </div>

        <div className="option-btn">
        <button onClick={()=>{navigate("/managemachine/addnewmachine")}}>Add New Machine</button>
         </div>
      
        <TableData path={path}  key={tableRefresh} editClick={editClick}/>

      
      </div>
    </React.Fragment>
  );
}

export default Listmachine;

