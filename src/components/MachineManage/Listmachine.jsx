import React from "react";
import { useState,useEffect } from "react";
import { ErrorAlert, SuccessAlert } from "../middleware/AlertMsg";
import { delReq, getReq } from "../middleware/AxiosApisCall";
import { useLocation ,useNavigate} from "react-router-dom";
function Listmachine(props) {

const [tableData,setTableData]=useState();
const [path,setPath]=useState(props.path);
const [par,setPar]=useState(props.par)



  const userdata = [
    { Slno: "", name: "Ashok", role: "refiller", officelocation: "hsr Layout" },
    { Slno: "", name: "Sharan", role: "support", officelocation: "Marthalli" },
    { Slno: "", name: "Shubham", role: "developer", officelocation: "Hebbal" },
    { Slno: "", name: "Kuldeep", role: "devloper", officelocation: "Nagvar" },
    { Slno: "", name: "Dinesh", role: "Ac count", officelocation: "Itpl" },
  ];



  const loadTableDate=async()=>{
    const response=await getReq(path);
    setTableData(response.data)
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
navigate("/machinemanage/addnewmachine");
   }

  return (
    <>
      <div className="add-user-container">
        <div className="headingdiv">
          <span className="componet-title">Machine List</span>
          <div>
          <button onClick={(()=>navigate(-1))}>Back</button>
          </div>
        </div>
        <div className="option-btn">
        <button  onClick={()=>{navigate("/manage_machine/addnewmachine")}}>Add New Machine</button>
               
      </div>
        <div className="componet-sub2-title">
          <span>Total Machine:</span>
        </div>

        <div className="table_container-div">
          <table>
            <tbody>
              <tr>
                <th>S.no.</th>
                <th>Company ID</th>
                <th>Machine ID </th>
                <th>Office/Location</th>
                <th>Client Admin</th>
                <th>Admin</th>
                <th>Action</th>
                
               
              </tr>
              {userdata.map((data, key) => {
                return (
                  <tr key={key}>
                    <td>{key + 1}</td>
                    <td>{data.name}</td>
                    <td>{data.role}</td>
                    <td>{data.role}</td>
                    <td>{data.role}</td>
                    <td>{data.officelocation}</td>
                    <td>
                      <button className="btn_edit">Edit</button>
                      <button className="btn_delete">Delete</button>
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

export default Listmachine;

