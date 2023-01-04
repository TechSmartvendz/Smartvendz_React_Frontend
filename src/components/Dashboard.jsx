
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'


import { Routes, Route, Outlet } from "react-router-dom";

import Addorder from "./Addorder";
import Products from "./Products";
import Refiller from "./Refiller";
import Transactions from "./Transactions";
//
import Manage_machine from "./Manage_machine";
import AddNewUser from './UserManage_components/AddNewUser'
import ListUser from './UserManage_components/ListUser'
import UserPermission from './UserManage_components/UserPermission'


import UserManage from "./UserManage";
import Sidenavbar from "./Sidenavbar";
import PageError from "./Error";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import AddNewRole from "./UserManage_components/AddNewRole";


function Dashboard() {
   

  return (
    <>
      <div className="root">
        <Header />
        <div className="section">
          <Sidenavbar />

          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />} />
              
              <Route  path="user_manage" element={<UserManage/>}>
              <Route  path='add_new_user' element={<AddNewUser/>}/>
              <Route  path='list_user' element={<ListUser/>} />
              <Route  path='user_permission' element={<UserPermission/>}>
              <Route  path='add_new_role' element={<AddNewRole />}/>
              </Route>
               </Route>
              
              <Route exact path="/addorder" element={<Addorder />} />
              <Route exact path="/products" element={<Products />} />
              <Route exact path="/manage_machine" element={<Manage_machine/>}/>
              <Route exact path="/refiller" element={<Refiller />} />
              <Route exact path="/transactions" element={<Transactions />} />
              <Route path="/*" element={<PageError />}/>
            </Routes>
           
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Dashboard;
