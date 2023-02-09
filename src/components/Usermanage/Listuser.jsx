import axios from "axios";
import React from "react";
import { useState,useEffect } from "react";
import { ErrorAlert, SuccessAlert } from "../middleware/AlertMsg";
import {  getReq ,patchReq} from "../middleware/AxiosApisCall";
import { useNavigate, useParams} from "react-router-dom";
import TableData from "../Partials/TableData";

function Listuser() {
const path="User"
const [tableData,setTableData]=useState();
const[tableRefresh,setTableRefresh]=useState(0)

// const [par,setPar]=useState(props.par)

  
  const loadTableDate=async()=>{
    const response=await getReq(path);
    setTableData(response.data)
    console.log(tableData)
  }
  useEffect(() => {
    loadTableDate()
  }, [])

  
const navigate=useNavigate()
const {userId}=useParams();
const redirect=async(item)=>{
 
 
navigate(`../addnewuser/${item._id}`);
console.log(userId)
console.log(item._id)
// const response = await patchReq(path);
// if (response.success) {
//   setTableRefresh(tableRefresh+1);
//   console.log(response.success)
//   setInputs({});
//   SuccessAlert({ title: "Add User", message: "User Updated successfully" });
// } else {
//   ErrorAlert({ title: "Add User", message: response.msg });
// }
  

}

  return (
    <React.Fragment>
      <div className="add-user-container">
        <div>
          <span className="componet-title">Users List</span>
        </div>
        <div className="option-btn">
        <button onClick={()=>{navigate("/usermanage/addnewuser")}}>Add New User</button>
         </div>
      
        <TableData path={path} key={tableRefresh} redirect={redirect}/>

      
      </div>
    </React.Fragment>
  );
}

export default Listuser;
