import { Routes, Route, Link } from "react-router-dom";
//FIXME:remove Add order
import Addorder from "./Addorder";
import Products from "./Products";

import UserManage from "./UserManage/UserManage";
import Addnewuser from "./Usermanage/Addnewuser";
import Listuser from "./Usermanage/Listuser";
import Userpermission from "./Usermanage/Userpermission";
import AddNewRole from "./Usermanage/AddNewRole"

import Companymanage from "./Companymanage";
import Addnewcompany from "./Subroutes/Addnewcompany";
import Listcompany from "./Subroutes/Listcompany";

import Addnewmachine from "./MachineManage/Addnewmachine"
import Listmachine from "../components/MachineManage/Listmachine";
import Machineconfiguration from "../components/MachineManage/Machineconfiguration";
//TODO:GET info about this "./Subroutes/Manage_machine"
import Manage_machine from "./Subroutes/Manage_machine";

import Employeemanage from "./Employeemanage";
import Addnewemployee from "./Subroutes/Addnewemployee";
import Updateemployee from "./Subroutes/Updateemployee";
import SearchandUpdateemployee from "./Subroutes/SearchandUpdateemployee";

import Transactions from "./Transactions";
import Transactions1 from "./Subroutes/Transactions1";
import Transactions2 from "./Subroutes/Transactions2";

import Generalmanage from "./Generalmanage";
import Countrymanage from "./Subroutes/Countrymanage";
import Citymanage from "./Subroutes/Citymanage";
import Unitmanage from "./Subroutes/Unitmanage";
import Statemanage from "./Subroutes/Statemanage";

import Refiller from "./Refiller";
import Refiller1 from "./Subroutes/Refiller1";
import Refiller2 from "./Subroutes/Refiller2";

import InventoryManager from "./InventoryManager";
import InventoryManager1 from "./Subroutes/InventoryManager1";
import InventoryManager2 from "./Subroutes/InventoryManager2";



import PageError from "./Error";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";

import Navbar from "../navbar/Navbar";


import Refund from "./Refund";
import Refund1 from "./Subroutes/Refund1"
import Refund2 from "./Subroutes/Refund2"

//TODO: GET info about this Usermanahe.css
// import 'Usermanage.css'

function Dashboard() {
  return (
    <>
      <div className="root">
        <Header />
        <div className="section">
          <Navbar />
          <div className="container">

          {/*FIXME: MAke this Routes a saprate components*/}

            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/addorder" element={<Addorder />} >
            </Route>
              <Route exact path="/products" element={<Products />} >
            </Route>

              <Route exact path="/manage_machine" element={<Addnewmachine />}>
                  <Route default path="addnewmachine" element={<Manage_machine />} />
                  <Route path="listmachine" element={<Listmachine />} />
                  <Route path="machineconfiguration" element={<Machineconfiguration />}/>
              </Route>

            <Route exact path="/companymanage" element={<Companymanage />} >
                <Route path="addnewcompany" element={<Addnewcompany />} />
                <Route path="listcompany" element={<Listcompany />} />
              </Route>
    

              <Route exact path="/employeemanage" element={<Employeemanage />}>
                <Route path="addnewemployee" element={<Addnewemployee />} />
                <Route path="updateemployee" element={<Updateemployee />} />
                <Route path="searchandupdateemployee" element={<SearchandUpdateemployee />} />
              </Route>

              <Route exact path="/usermanage" element={<UserManage />}>
                <Route path="addnewuser" element={<Addnewuser />} />
                <Route path="listuser" element={<Listuser />} />
                <Route path="userpermission" element={<Userpermission />} >
                <Route path="addnewuser" element={<AddNewRole />} /> 
                </Route>
              </Route>
               
              <Route exact path="/refillermanager" element={<Refiller />}>
                <Route path="1" element={<Refiller1 />} />
                <Route path="2" element={<Refiller2 />} />
                <Route path="3" element={<Addnewmachine />} />
              </Route>
             
              <Route exact path="/transactionreports" element={<Transactions />}>
                   <Route path="credit_transaction_report" element={<Transactions1 />}/>
                   <Route path="credit_report" element={<Transactions2 />}/>
              </Route>

              <Route exact path="/generalmanager" element={<Generalmanage />}>
                  <Route path="countrymanage" element={<Countrymanage />} />
                  <Route path="statemanage" element={<Statemanage />} />
                  <Route path="citymanage" element={<Citymanage />} />
                  <Route path="unitmanage" element={<Unitmanage />} />
              </Route>

              <Route exact path="/products" element={<Products />}></Route>

              <Route exact path="/refundandsupport" element={<Refund />}>
                  <Route path="1" element={<Refund1 />} />
                  <Route path="2" element={<Refund2 />} />
              </Route>

              <Route exact path="/inventorymanager" element={<InventoryManager />}>
                  <Route path="1" element={<InventoryManager1 />} />
                  <Route path="2" element={<InventoryManager2 />} />
              </Route>
               

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
