import { Routes, Route, Link } from "react-router-dom";
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
import AddNewRole from "./Usermanage/AddNewRole"

import Companymanage from "./Companymanage";
import Addnewcompany from "./Company_Manage/Addnewcompany";
import Listcompany from "./Company_Manage/Listcompany";

import Addnewmachine from "./MachineManage/Addnewmachine"
import Listmachine from "./MachineManage/Listmachine";
import Machineconfiguration from "./MachineManage/Machineconfiguration";
//TODO:GET info about this "./Subroutes/Manage_machine"
import MachineManage from "./MachineManage/MachineManage";

import Employeemanage from "./Employee/Employeemanage";
import Addnewemployee from "././Employee/Addnewemployee";
import Updateemployee from "././Employee/Updateemployee";
import SearchandUpdateemployee from "./Employee/SearchandUpdateemployee";
import Addsingleemployee from "./Employee/Addsingleemployee";


import Transactions from "./Transactions/Transactions";
import TransactionReport from "./Transactions/TransactionReport";
import CreditReport from "./Transactions/CreditReport";
import CreditTransactionReport from "./Transactions/CreditTransactionReport";


import Generalmanage from "./Generalmanage";
import Countrymanage from "./GeneralManage/Countrymanage";
import Citymanage from "./GeneralManage/Citymanage";
import Unitmanage from "./GeneralManage/Unitmanage";
import Statemanage from "./GeneralManage/Statemanage";

import Refiller from "./Refiller/Refiller";
import Refiller1 from "./Refiller/Refiller1";
import Refiller2 from "./Refiller/Refiller2";

import InventoryManager from "./Inventory Manager/InventoryManager";
import InventoryManager1 from "./Inventory Manager/InventoryManager1";
import InventoryManager2 from "./Inventory Manager/InventoryManager2";



import PageError from "./Error";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";

import Navbar from "../navbar/Navbar";


import Refund from "./Refund/Refund";
import Refund1 from "./Refund/Refund1"
import Refund2 from "./Refund/Refund2"


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

              <Route exact path="/manage_machine" element={<MachineManage />}>
                  <Route default path="addnewmachine" element={<Addnewmachine />} />
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
                <Route path="addsingleemployee" element={<Addsingleemployee />} />

              </Route>

              <Route exact path="/usermanage" element={<UserManage />}>
                <Route path="addnewuser" element={<Addnewuser />} />
                <Route path="listuser" element={<Listuser />} />
                <Route path="userpermission" element={<Userpermission />} />
                <Route path="userrole" element={<UserRole/>}/> 
              
              </Route>
               
              <Route exact path="/refillermanager" element={<Refiller />}>
                <Route path="1" element={<Refiller1 />} />
                <Route path="2" element={<Refiller2 />} />
                <Route path="3" element={<Addnewmachine />} />
              </Route>
             
              <Route exact path="/transactionreports" element={<Transactions />}>
                   <Route path="transaction_report" element={<TransactionReport />}/>
                   <Route path="credit_report" element={<CreditReport/>}/>
                   <Route path="credit_transaction_report" element={<CreditTransactionReport />} />
              </Route>

              <Route exact path="/generalmanager" element={<Generalmanage />}>
                  <Route path="countrymanage" element={<Countrymanage />} />
                  <Route path="statemanage" element={<Statemanage />} />
                  <Route path="citymanage" element={<Citymanage />} />
                  <Route path="unitmanage" element={<Unitmanage />} />
              </Route>

              <Route exact path="/products" element={<Products />}>
              <Route path="productlist" element={<ProductList />} />
                  <Route path="bulkproductupload" element={<BulkProductUpload />} />
                  <Route path="singleproductadd" element={<SingleProductAdd />} />
                  <Route path="updatebulkproduct" element={<UpdateBulkProduct />} />

              </Route>

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
