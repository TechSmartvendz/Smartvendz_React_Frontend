import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { SuccessAlert } from '../middleware/AlertMsg';
import { delReq, getReq } from '../middleware/AxiosApisCall';

function Userpermission() {
  const path="State"
  const navigate=useNavigate()

  const[tableData,setTableData]=useState()
  const permission=[
    {slno:"",Rolename:"super_admin",permission:""},
    {slno:"",Rolename:"Branch_admin",permission:""},
    {slno:"",Rolename:"Client_admin",permission:""},
    {slno:"",Rolename:"Refiller",permission:""},
    {slno:"",Rolename:"Staff",permission:""}
   ] 
  const loadTableDate=async()=>{
    const response=await getReq(path)
    if(response.status==="success"){
         setTableData(response.data)
    }
  }
useEffect(() => {
loadTableDate()
}, [])

const deleteUser=async(event)=>{
  const response=await delReq(path,event);
  if(response.status==="success")
  {
    loadTableDate()
    SuccessAlert({title:"Data Deleted",message: `${path} : Deleted Succesfully `})
  }
}

  return (
 <React.Fragment>
  <div className='add-user-container'>
   
        <div>
          <span className="componet-title">Role List</span>
        </div>

        <div  className="option-btn">
        <button className="option-btn" onClick={()=>navigate("/usermanage/userrole")}>Add New Role</button>
        </div>

        <div className="componet-sub2-title">
        <span>Total Roles:</span>
        </div>
        <div className='table_container-div'>
   
        <table>
        <tbody>   
        <tr>
        <th>Sl no</th>
        <th>Role Name</th>
        <th>Permission</th>
        <th>Action</th>
        
        </tr>
        
        {
         permission.map((data,key)=>{
           return(
             <tr key={key}>
             <td>{key+1}</td>
             <td>{data.Rolename}</td>
             <td>{data.permission}</td>
             <td><button>Edit</button>
              <button >Delete</button></td>
            
             </tr>
           )
         })
        }
        
        </tbody>
        </table>
        
        </div> 

  </div>
  </React.Fragment>
      
  )
}

export default Userpermission