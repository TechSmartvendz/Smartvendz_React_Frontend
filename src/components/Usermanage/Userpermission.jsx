import React,{useState} from 'react'

import { NavLink, Outlet } from 'react-router-dom'
import Add_role_table from './Add_role_table';

function Userpermission() {
  const [addrole,setAddrole]=useState(true);
  function handleRole(val)
  {
   setAddrole(false);
 }   
  return (
 <>
  <div className='add-user-container'>
   
        <div>
          <span className="componet-title">Role List</span>
        </div>
       
        <NavLink className="option-btn" to="/usermanage/userpermission/addnewrole"> <button onClick={handleRole}>Add New Role</button></NavLink>
    {/*<div className="option-btn">
        <button >Temp Button</button>
        <button >Temp button</button>
  </div>*/}  
        <div className="componet-sub2-title">
          <span>Total Roles:</span>
        </div>
        <Outlet/>
  {
//if addrole true in that case it will render if it become false on button click nothing will be render
   (addrole) && 
   <Add_role_table/> 
  }
 
  
  </div>
  </>
      
  )
}

export default Userpermission