import axios from "axios";
import React from "react";
import { useState,useEffect } from "react";
import { ErrorAlert, SuccessAlert } from "../middleware/AlertMsg";
import { delReq, getReq } from "../middleware/AxiosApisCall";
import { useLocation ,useNavigate} from "react-router-dom";

function Listuser(props) {
const path="User"
const [tableData,setTableData]=useState();
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
    <>
      <div className="add-user-container">
        <div>
          <span className="componet-title">Users List</span>
        </div>
        <div className="option-btn">
        <button onClick={()=>{navigate("/usermanage/addnewuser")}}>Add New User</button>
         </div>
      
         <div className="componet-sub2-title">
          <span>Total User:</span>
        </div>

        <div className="table_container-div">
          <table>
            <tbody>
              <tr>
                <th>Sl no</th>
                <th> Name</th>
                <th>Role</th>
                <th>Office/Location</th>
                <th>Action</th>
                
               
              </tr>
              {
                tableData.map((data, key) => {
                return (
                    <tr key={key}>
                    <td>{key+1}</td>
                    <td>{data.user_first_name}</td>
                    <td>{data.role}</td>
                    <td>{data.user_current_address}</td>
                    <td>
                      <button className="btn_edit">Edit</button>
                      <button className="btn_delete" onClick={deleteUser}>Delete</button>
                    </td>
                  
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Listuser;
