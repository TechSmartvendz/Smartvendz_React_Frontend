import React from 'react'
import { useNavigate } from 'react-router-dom'
import TableDataP from '../Partials/TableDataP'

function ListUserP() {

    const path='User'
    const navigate=useNavigate()
  return (
   <React.Fragment>

    <div className='add-user-container'>
 
  <div className='headingdiv'>
   <span className='componet-title'>User List</span> 
  

  <div>

    <button onClick={()=>{
        navigate(-1)
    }}>Back</button>

  </div>
  </div>

  <div className='option-btn'>
<button onClick={()=>{navigate("/usermanage/addnewuserp")}}>Add New UserP</button>
  </div>
   <TableDataP path={path}/>
    </div>
   </React.Fragment>
  )
  
}

export default ListUserP;



