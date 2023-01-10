import React,{useState} from 'react'

import { NavLink, Outlet } from 'react-router-dom'
import Add_role_table from './Add_role_table';
// import './UserManaging.css'
function Userpermission() {
  const [addrole,setAddrole]=useState(true);
  function handleRole()
  {
   setAddrole(false)
   
 }   
  return (
  <React.Fragment>
  <div className='permission_container'>
   
  <div className='div_newrole'>
  <NavLink to="/user_manage/user_permission/add_new_role">
  <button className='btn_newrole' onClick={handleRole}>Add New Role</button></NavLink>
 
  <Outlet/>
  </div>
  {
//if addrole true in that case it will render if it become false on button click nothing will be render
   (addrole) && <Add_role_table/> 
  }

  
  </div>
  </React.Fragment>
      
  )
}

export default Userpermission