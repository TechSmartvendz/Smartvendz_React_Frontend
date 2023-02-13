import { Routes, Route, Link, Outlet } from "react-router-dom";
//FIXME:remove Add order
import Addorder from "./Addorder";


import Products from "./Products/Products";
import ProductList from "./Products/ProductList";
import BulkProductUpload from "./Products/BulkProductUpload";
import SingleProductAdd from "./Products/SingleProductAdd";
import UpdateBulkProduct from "./Products/UpdateBulkProduct";

import UserManage from "./UserManage/UserManage";
import Addnewuser from "./Usermanage/Addnewuser";
import Listuser from "./Usermanage/Listuser";
import Userpermission from "./Usermanage/Userpermission";
import UserRole from "./Usermanage/UserRole";
// import AddNewRole from "./Usermanage/AddNewRole"

import Companymanage from "./Company_Manage/Companymanage";
import Addnewcompany from "./Company_Manage/Addnewcompany";
import Listcompany from "./Company_Manage/Listcompany";

import Addnewmachine from "./MachineManage/Addnewmachine"
import Listmachine from "./MachineManage/Listmachine";
import Machineconfiguration from "./MachineManage/Machineconfiguration";
//TODO:GET info about this "./Subroutes/Manage_machine"
import MachineManage from "./MachineManage/MachineManage";

import Employeemanage from "./Employeemanage";
import Addnewemployee from "./Subroutes/Addnewemployee";
import Updateemployee from "./Subroutes/Updateemployee";
import SearchandUpdateemployee from "./Subroutes/SearchandUpdateemployee";

import Transactions from "./Transactions/Transactions";
import TransactionReport from "./Transactions/TransactionReport";
import CreditReport from "./Transactions/CreditReport";
import CreditTransactionReport from "./Transactions/CreditTransactionReport";


import Generalmanage from "./Generalmanage/Generalmanage";
import Countrymanage from "./GeneralManage/Countrymanage";
import Citymanage from "./GeneralManage/Citymanage";
import Unitmanage from "./GeneralManage/Unitmanage";
import Statemanage from "./GeneralManage/Statemanage";
import Areamanage from "./GeneralManage/Areamanage";

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

import { ReactNotifications } from 'react-notifications-component'


//TODO: GET info about this Usermanahe.css
// import 'Usermanage.css'

function Dashboard() {
  return (
    <>
      <div className="root">
        <Header />
        <div className="section">
          <Navbar />
          <ReactNotifications />
          <div className="container">
          {/*FIXME: MAke this Routes a saprate components*/}

            <Routes>
              <Route default exact path="/" element={<Home />} />
              <Route exact path="/addorder" element={<Addorder />} >
            </Route>
              <Route exact path="/products" element={<Products />} >
            </Route>

              <Route exact path="/managemachine" element={<MachineManage />}>
                  <Route path="addnewmachine" element={<Addnewmachine />} />
                  <Route index path="listmachine" element={<Listmachine />} />
                  <Route path="machineconfiguration" element={<Machineconfiguration />}/>
              </Route>

            <Route exact path="/companymanage" element={<Companymanage />} >
                <Route path="addnewcompany" element={<Addnewcompany />} />
                <Route  index path="listcompany" element={<Listcompany />} />
              </Route>
    

              <Route exact path="/employeemanage" element={<Employeemanage />}>
                <Route path="addnewemployee" element={<Addnewemployee />} />
                <Route path="updateemployee" element={<Updateemployee />} />
                <Route path="searchandupdateemployee" element={<SearchandUpdateemployee />} />
              </Route>

              <Route exact path="/usermanage" element={<UserManage />}>
               <Route path="addnewuser" element={<Addnewuser />} />
                <Route path="addnewuser/:id" element={<Addnewuser />} />
                <Route  index path="listuser" element={<Listuser />} />
                <Route path="userpermission" element={<Userpermission />} />
                <Route path="userrole" element={<UserRole/>}/> 
              
              </Route>
               
              <Route exact path="/refillermanager" element={<Refiller />}>
                <Route index path="managerefillrequest" element={<Refiller1 />} />
                <Route path="managedc" element={<Refiller2 />} />
                <Route path="managedcaccept" element={<Refiller1 />} />
                <Route path="managecompletedrefillrequest" element={<Refiller2 />} />
              </Route>
              <Route exact path="/transactionreports" element={<Transactions />}>
                   <Route index path="transactionreport" element={<TransactionReport />}/>
                   <Route path="creditreport" element={<CreditReport/>}/>
                   <Route path="credittransactionreport" element={<CreditTransactionReport />} />
              </Route>
              <Route exact path="/generalmanager" element={<Generalmanage />}>
                  <Route index path="countrymanage" element={<Countrymanage />} />
                  <Route path="statemanage" element={<Statemanage />}>
                  <Route path=":stateId" element={<Statemanage />}/>
                  </Route>
                  <Route path="citymanage" element={<Citymanage />} />
                  <Route path="unitmanage" element={<Unitmanage />} />
                  <Route path="areamanage" element={<Areamanage/>}/>
              </Route>
              <Route exact path="/products" element={<Products />}>
              <Route path="productlist" element={<ProductList />} />
                  <Route index path="bulkproductupload" element={<BulkProductUpload />} />
                  <Route path="singleproductadd" element={<SingleProductAdd />} />
                  <Route path="updatebulkproduct" element={<UpdateBulkProduct />} />
              </Route>
              <Route exact path="/refundandsupport" element={<Refund />}>
                  <Route index path="1" element={<Refund1 />} />
                  <Route path="2" element={<Refund2 />} />
              </Route>
              <Route exact path="/inventorymanager" element={<InventoryManager />}>
                  <Route index path="1" element={<InventoryManager1 />} />
                  <Route path="2" element={<InventoryManager2 />} />
              </Route>
      
               

              <Route path="/*" element={<PageError/>} />

            </Routes>
              <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Dashboard;
