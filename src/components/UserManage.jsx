import React, { useState } from 'react'
// import './UserManage_components/UserManaging.css'
import { NavLink, Outlet } from 'react-router-dom'


function UserManage() {
  
  return (
    <React.Fragment>
    
   <div className='mesgarea'>
  
  </div>

    <div className='btn_container'>
    <button className='user_btn'><NavLink to="/user_manage/add_new_user">AddNewUser</NavLink></button>
     <button className='user_btn'><NavLink to="/user_manage/list_user">List User</NavLink></button>
    <button className='user_btn'  ><NavLink to="/user_manage/user_permission">User Permission</NavLink></button>
    
    </div>
    
  <Outlet/>
   
    
   
  
    </React.Fragment>
  )
}

export default UserManage