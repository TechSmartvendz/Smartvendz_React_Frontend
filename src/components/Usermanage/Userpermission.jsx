import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { SuccessAlert } from '../middleware/AlertMsg';
import { postReq,putReq,getReq } from "../middleware/AxiosApisCall";
import TableData from "../Partials/TableData";
import { useParams } from "react-router";



function Userpermission() {
  const path="Permission"
  const navigate=useNavigate()
  const [tableData,setTableData]=useState();
  const[tableRefresh,setTableRefresh]=useState(0)
  
  // const [par,setPar]=useState(props.par)
  
    
    const loadTableDate=async()=>{
      const response=await getReq(path);
      setTableData(response.data)
      // console.log(tableData)
    }
    useEffect(() => {
      loadTableDate()
    }, [])
  
    
  
  
  const editClick=async(item)=>{
  navigate(`../userrole/${item._id}`);
  }
  
    return (
      <React.Fragment>
        <div className="add-user-container">
          <div className='headingdiv'>
            <span className="componet-title">Role List</span>
            <div>
            <button onClick={(()=>navigate(-1))}>Back</button>
            
            
            </div>
          </div>
          <div className="option-btn">
          <button onClick={()=>{navigate("../userrole")}}>Add New Role</button>
           </div>
        
          <TableData path={path} key={tableRefresh} editClick={editClick}/>
  
        
        </div>
      </React.Fragment>
    );
  }

export default Userpermission