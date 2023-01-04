// import { useState } from 'react'
// import reactLogo from './assets/react.svg'

import { Routes, Route } from "react-router-dom";

import Addorder from "./Addorder";
import Products from "./Products";
import Refiller from "./Refiller";
import Transactions from "./Transactions";
import Manage_machine from "./Manage_machine";
//import Sidenavbar from "./Sidenavbar";
import PageError from "./Error";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Navbar from "../navbar/Navbar";

function Dashboard() {
  return (
    <>
      <div className="root">
        <Header />
        <div className="section">
          <Navbar />

          <div className="container">
            {/* <Navbar /> */}
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/addorder" element={<Addorder />} />
              <Route exact path="/products" element={<Products />} />
              <Route
                exact
                path="/manage_machine"
                element={<Manage_machine />}
              />
              <Route exact path="/refillermanager" element={<Refiller />} />
              <Route exact path="/transactions" element={<Transactions />} />
              <Route path="/*" element={<PageError />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Dashboard;
