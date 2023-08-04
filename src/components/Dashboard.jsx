import { Routes, Route, Link, Outlet } from "react-router-dom";
//FIXME:remove Add order
import React, { useContext } from "react";
// import Addorder from "./Addorder";
import NavContext from "../Context/NavContext";

// import Products from "./Products/ProductsManage";

import SingleProductAdd from "./Products/SingleProductAdd";
import ProductsManage from "./Products/ProductsManage";
import UserManage from "./UserManage/UserManage";
import Addnewuser from "./Usermanage/Addnewuser";
import Listuser from "./Usermanage/Listuser";
import Userpermission from "./Usermanage/Userpermission";
import AddNewRole from "./Usermanage/AddNewRole";

import Companymanage from "./Company_Manage/Companymanage";
import Addnewcompany from "./Company_Manage/Addnewcompany";
import Listcompany from "./Company_Manage/Listcompany";

import Addnewmachine from "./MachineManage/Addnewmachine";
import Listmachine from "./MachineManage/Listmachine";
import Machineconfiguration from "./MachineManage/Machineconfiguration";
//TODO:GET info about this "./Subroutes/Manage_machine"
import MachineManage from "./MachineManage/MachineManage";

import Employeemanage from "../components/EmployeeManage/Employeemanage";
import AddandEditemployee from "../components/EmployeeManage/AddandEditemployee";
// import Employeecredit from "../components/EmployeeManage/Employeecredit";

import Transactions from "./Transactions/Transactions";
import TransactionReport from "./Transactions/TransactionReport";
// import CreditReport from "./Transactions/CreditReport";
// import CreditTransactionReport from "./Transactions/CreditTransactionReport";

import Generalmanage from "./Generalmanage/Generalmanage";
import Countrymanage from "./GeneralManage/Countrymanage";
import Citymanage from "./GeneralManage/Citymanage";
import Unitmanage from "./GeneralManage/Unitmanage";
import Statemanage from "./GeneralManage/Statemanage";
import Areamanage from "./GeneralManage/Areamanage";

import RefillerManager from "./RefillerManage/RefillerManager";
import Manage_Refill_Request from "./RefillerManage/Manage_Refill_Request";
import Refiller_Refilling_Request from "./RefillerManage/Refiller_Refilling_Request";

import Warehouse from "./Warehouse/Warehouse";
import AddWarehouse from "./Warehouse/AddWarehouse";
import ListWarehouse from "./Warehouse/ListWarehouse";

import PageError from "./Error";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";

import Navbar from "../navbar/Navbar";


import { ReactNotifications } from "react-notifications-component";
import { RejectedTransaction } from "./Transactions/RejectedTransaction";
import { ApproveRefillRequest } from "./RefillerManage/ApproveRefillRequest";
import AddSupplier from "./SupplierManage/AddSupplier";
import ListSupplier from "./SupplierManage/ListSupplier";
import StockManager from "./StockManage/StockManager";
import PurchaseStock from "./StockManage/PurchaseStock";
import PurchaseStockList from "./StockManage/PurchaseStockList";
import TransferStock from "./StockManage/TransferStock";
import GstMaster from "./GeneralManage/GstMaster";

import AlltransferRequest from "./StockManage/AllTransferRequest";
import WarehouseStock from "./Warehouse/WarehouseStock";


//TODO: GET info about this Usermanahe.css
// import 'Usermanage.css'

function Dashboard() {
  const { sidebar, setSidebar } = useContext(NavContext);

  function handleClick(e) {
    e.stopPropagation();
    setSidebar(false);
  }
  return (
    <React.Fragment>
      <div className="root">
        <Header/>
        <div className="section" onClick={(e) => e.stopPropagation()}>
         {
          sidebar && <Navbar/>
         }
        
          <ReactNotifications />
          <div className="container" onClick={handleClick}>
            {/*FIXME: MAke this Routes a saprate components*/}

            <Routes>
              <Route default exact path="/" element={<Home />} />
              {/* <Route exact path="/addorder" element={<Addorder />}></Route> */}
              {/* <Route exact path="/" element={<ProductsManage/>}>
              <Route path="singleproductadd" element={<SingleProductAdd/>} />
              </Route> */}

              <Route exact path="/" element={<MachineManage />}>
                <Route path="addnewmachine" element={<Addnewmachine />} />
                <Route path="addnewmachine/:id" element={<Addnewmachine />} />
                <Route index path="listmachine" element={<Listmachine />} />
                <Route
                  path="machineconfiguration"
                  element={<Machineconfiguration />}
                />
              </Route>

              <Route exact path="/" element={<Companymanage />}>
                <Route path="addnewcompany" element={<Addnewcompany />} />
                <Route path="addnewcompany/:id" element={<Addnewcompany />} />
                <Route index path="listcompany" element={<Listcompany />} />
              </Route>

              <Route exact path="/" element={<Employeemanage />}>
                <Route
                  path="addandeditemployee"
                  element={<AddandEditemployee />}
                />
                {/* <Route path="employeecredit" element={<Employeecredit />} /> */}
              </Route>

              <Route exact path="/" element={<UserManage />}>
                <Route path="addnewuser" element={<Addnewuser />} />
                <Route path="addnewuser/:id" element={<Addnewuser />} />
                <Route index path="listuser" element={<Listuser />} />
                <Route path="userpermission" element={<Userpermission />} />
                <Route path="userrole" element={<AddNewRole />} />
                <Route path="userrole/:id" element={<AddNewRole />} />
              </Route>

              <Route
                exact
                path="/"
                element={<RefillerManager />}
              >
                <Route
                  index
                  path="managerefillrequest"
                  element={<Manage_Refill_Request />}
                />
                <Route
                  path="refillerrefillingrequest"
                  element={<Refiller_Refilling_Request />}
                />
                <Route path="refillermanager/managerefillrequest/:id" element={<ApproveRefillRequest />} />
              </Route>

              <Route
                exact
                path="/"
                element={<Transactions />}
              >
                <Route
                  index
                  path="transactionreport"
                  element={<TransactionReport />}
                />
                {/* <Route path="creditreport" element={<CreditReport />} /> */}
                {/* <Route
                  path="credittransactionreport"
                  element={<CreditTransactionReport />}
                /> */}
                <Route
                  path="rejectedtransactionreport"
                  element={<RejectedTransaction />}
                />
              </Route>
              <Route exact path="/" element={<Generalmanage />}>
                <Route index path="countrymanage" element={<Countrymanage />} />
                <Route path="statemanage" element={<Statemanage />}>
                  <Route path=":stateId" element={<Statemanage />} />
                </Route>
                <Route path="citymanage" element={<Citymanage />} />
                <Route path="unitmanage" element={<Unitmanage />} />
                <Route path="areamanage" element={<Areamanage />} />
                <Route index path="gst" element={<GstMaster />} />
                <Route path="gst/:_id" element={<GstMaster />} />
              </Route>

              <Route exact path="/" element={<ProductsManage />}>
              <Route path="singleproductadd" element={<SingleProductAdd/>} />
                <Route
                  path="singleproductadd/:id"
                  element={<SingleProductAdd />}
                />
                
              </Route>

              <Route exact path="/" element={<Warehouse />}>
                <Route index path="addwarehouse" element={<AddWarehouse />} />
                <Route index path="warehouselist" element={<ListWarehouse />} />
                <Route path="addwarehouse/:_id" element={<AddWarehouse />} />
                <Route path="warehousestock" element={<WarehouseStock />} />
              </Route>

              <Route exact path="/" element={<Warehouse />}>
                <Route index path="addsupplier" element={<AddSupplier />} />
                <Route index path="listSupplier" element={<ListSupplier />} />
                <Route
                  index
                  path="addsupplier/:_id"
                  element={<AddSupplier />}
                />
                {/* <Route path="addwarehouse/:_id" element={<AddWarehouse />} /> */}
              </Route>

              <Route exact path="/" element={<StockManager />}>
                <Route index path="purchasestock" element={<PurchaseStock />} />
                <Route
                  index
                  path="purchasestocklist"
                  element={<PurchaseStockList />}
                />
                <Route index path="transferstock" element={<TransferStock />} />
                <Route
                  index
                  path="acceptstock"
                  element={<AlltransferRequest />}
                />
                {/* <Route index path="addsupplier/:_id" element={<AddSupplier/>}/> */}
                {/* <Route path="addwarehouse/:_id" element={<AddWarehouse />} /> */}
              </Route>

             

              <Route path="/*" element={<PageError />} />
            </Routes>
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default Dashboard;
