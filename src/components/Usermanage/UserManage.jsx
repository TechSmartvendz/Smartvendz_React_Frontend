import React from 'react'
import I from '../../Route/UserManage/I'
// import {Routes, Route} from "react-router-dom"
import {Routes, Route} from "react-router-dom"
import {Link, Outlet} from "react-router-dom"
// import Addlist from '../Addlist'
// import Listuser from './Listuser'
// import Userpermission from './Userpermission'
// import UserManagerData from '../../Route/UserManage/UserManageData'
import "./Addnewuser.css"

  
  function UserManage() {
    return (
        <div>
        <p>User manager</p>
        <I />
     
      </div>
    );
  }

   export default UserManage


   
  //  "addnewuser"
  //  "listuser"
  //  "userpermission" 

