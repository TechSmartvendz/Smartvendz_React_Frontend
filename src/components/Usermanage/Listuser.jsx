// import axios from "axios";
import React from "react";
import { useState,useEffect } from "react";

import {  getReq ,patchReq} from "../middleware/AxiosApisCall";
import { useNavigate, useParams} from "react-router-dom";
import TableData from "../Partials/TableData";

function Listuser() {

const path="User"
const [tableData,setTableData]=useState();
const[tableRefresh,setTableRefresh]=useState(0)

    const loadTableDate=async()=>{
    const response=await getReq(path);
    // console.log('loadTableDate::',response.data)
    setTableData(response.data)
    // console.log(tableData)
  }
  
  useEffect(() => {
    
    loadTableDate()
  }, [])

  
const navigate=useNavigate();


// EditClick function is used to navigate to adduserform with particular User details
const editClick=(item)=>{

navigate(`../addnewuser/${item._id}`);

// console.log(item._id)

}

  return (
    <React.Fragment>
      <div className="add-user-container">
       
      <div className="headingdiv">

     <span className="componet-title">Users List</span>
      
     <div>
    <button onClick={()=>{navigate(-1)}}>Back</button>
      </div>
      
      </div>

        <div className="option-btn">
        <button onClick={()=>{navigate("/addnewuser")}}>Add New User</button>
         </div>
      
      {/* This component is for list of user Table */}
      {/* Here passing Path as props  */}
        <TableData path={path} key={tableRefresh} editClick={editClick}/>

      
      </div>
    </React.Fragment>
  );
}

export default Listuser;

