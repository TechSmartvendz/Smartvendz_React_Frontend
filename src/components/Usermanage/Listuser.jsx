import axios from "axios";
import React from "react";
import { useState,useEffect } from "react";
import { ErrorAlert, SuccessAlert } from "../middleware/AlertMsg";
import { delReq, getReq } from "../middleware/AxiosApisCall";
import { useLocation ,useNavigate} from "react-router-dom";
import TableData from "../Partials/TableData";

function Listuser(props) {
const path="User"
const [tableData,setTableData]=useState();
const[tableRefresh,setTableRefresh]=useState(0)
// const [path,setPath]=useState();
const [par,setPar]=useState(props.par)

  // const userdata = [
  //   { Slno: "", name: "Ashok", role: "refiller", officelocation: "hsr Layout" },
  //   { Slno: "", name: "Sharan", role: "support", officelocation: "Marthalli" },
  //   { Slno: "", name: "Shubham", role: "developer", officelocation: "Hebbal" },
  //   { Slno: "", name: "Kuldeep", role: "devloper", officelocation: "Nagvar" },
  //   { Slno: "", name: "Dinesh", role: "Ac count", officelocation: "Itpl" },
  // ];
  const loadTableDate=async()=>{
    const response=await getReq(path);
    setTableData(response.data)
    console.log(tableData)
  }
  useEffect(() => {
    loadTableDate()
  }, [])

  const deleteUser=async(event)=>{
const response =await delReq(path,event)
if(response.status==="success"){
  loadTableDate();
  SuccessAlert({title:"Data Deleted",message: `${path} : Deleted Succesfully `})
}
else{
  ErrorAlert({ title: "${path} Delete: Error",
  message: response.error,})
}
   }
const navigate=useNavigate()

const redirect=(item)=>{
props.editClick(item)
navigate("/usermanage/addnewuser");
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
      
        <TableData path={path} key={tableRefresh}/>

      
      </div>
    </React.Fragment>
  );
}

export default Listuser;
