import React,{useState} from 'react'

import {  NavLink  } from "react-router-dom";




const  Sidenavbar = () => {
  
  return (
    <>
    <div className="sidenavbar">
      <ul>
            <li><NavLink  to="/">Home</NavLink></li>
            <li><NavLink   to="/products">Products</NavLink></li>
            <li><NavLink   to="/refiller">Refiller</NavLink></li>
            <li><NavLink   to="/transactions">Transactions</NavLink></li>

            <li><NavLink  to="/addorder">Addorder</NavLink></li>
            <li><NavLink   to="/products">Products</NavLink></li>
            <li><NavLink to="/manage_machine">Manage Machine</NavLink></li>
            <li><NavLink   to="/refiller">Refiller</NavLink></li>
            <li><NavLink   to="/transactions">Transactions</NavLink></li>

            <li><NavLink  to="/addorder">Addorder</NavLink></li>
            <li><NavLink   to="/products">Products</NavLink></li>
            <li><NavLink   to="/refiller">Refiller</NavLink></li>
            <li><NavLink   to="/transactions">Transactions</NavLink></li>
      </ul>
              

    </div>
    </>
  
  )
}

export default Sidenavbar
