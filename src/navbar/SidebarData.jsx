import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from 'react-icons/ri';
export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    cName: "nav-text",
    permission:"home"
  },
  {
    title: "User Manage",
    path: "/",
    icon: <IoIcons.IoMdPeople />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    cName: "nav-text",
    permission:"usermanage",
    submenu:[
      {
        title: "Add new user",
        path: "/addnewuser",  
        cName: "abc",
        permission:"addnewuser"
      },
      {
          title: "List User",
          path: "/listuser",  
          cName:"" ,
          permission:"listuser"
     
      },
      {
        title: "User permission",
        path: "/userpermission",    
        cName:"",
        permission:"userpermission"
      },
     
    ]
  },
  {
    title: "Company Manage",
    path: "/",
    icon: <IoIcons.IoMdPeople />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    cName: "nav-text",
    permission:"companymanage",
    submenu:[
      {
        title: "Add new company",
        path: "/addnewcompany",
        permission:"addnewcompany"  
      },
      {
        title: "List Company",
        path: "/listcompany" ,
        permission:"listcompany"    
      },
     
    ]
  },

  {
    title: "Machine Manage",
    path: "/",
    icon: <IoIcons.IoMdHelpCircle />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    cName: "nav-text",
    permission:"managemachine", 
    submenu:[
 
      {
        title: "Add new machine",
        path: "/addnewmachine",
        permission:"addnewmachine" 
      },
      {
        title: "List Machine",
        path: "/listmachine",
        permission:"listmachine" 
      },
      {
        title: "Machine Configuration",
        path: "/machineconfiguration",
        permission:"machineconfiguration" 
      }
    ]
  },
  {
    title: " Employee Manage",
    path: "/",
    icon: <IoIcons.IoMdHelpCircle />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    cName: "nav-text",
    permission:"managemachine", 
    submenu:[  
      {
        title: "Add And Edit Employee",
        path: "/addandeditemployee",
        permission:"addnewmachine" 
      },
      
     
    ]
  },
  {
    title: "Transaction Reports",
    path: "/",
    icon: <FaIcons.FaEnvelopeOpenText />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    cName: "nav-text",
    permission:"listcompany", 
    submenu:[

      {
        title: "Transaction Report",
        path: "/transactionreport",
        permission:"listcompany"
      },
      // {
      //   title: "Credit Report",
      //   path: "/transactionreports/creditreport",
      //   permission:"listcompany"
      // },
      // {
      //   title: "Credit Transaction Report",
      //   path: "/transactionreports/credittransactionreport",
      //   permission:"listcompany" 
      // },
      {
        title: "Rejected Transaction Report",
        path: "/rejectedtransactionreport",
        permission:"listcompany" 
      }
    ]
  },
  // fix me right it is rendering because we have selected permission as listcompany it needs to be change.
  {
    title: "General Manager",
    path: "/",
    icon: <IoIcons.IoMdHelpCircle />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    cName: "nav-text",
    permission:"listcompany",
    submenu:[
  
      {
        title: "Country manage",
        path: "/countrymanage", 
        permission:"listcompany"   
      },
      {
        title: "State manage",
        path: "/statemanage",
        permission:"listcompany"     
      },
      {
        title: "City manage",
        path: "/citymanage",
        permission:"listcompany"     
      },
      {
        title:"Area manage",
        path:"/areamanage",
        permission:"listcompany" 
      },
      {
        title: "Unit manage",
        path: "/unitmanage",
        permission:"listcompany"    
      },
      {
        title: "GST Master",
        path: "/gst",
        permission:"listcompany"    
      },
     
    ]
  },
  {
    title: "Refiller Manager",
    path: "/",
    icon: <IoIcons.IoMdHelpCircle />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    cName: "nav-text",
    permission:"refillermanager",
    submenu:[
      {
        title: "Manage Refill Request",
        path: "/managerefillrequest",
        permission:"managedc"
      },
      {
        title: "Refiller Refilling Request",
        path: "/refillerrefillingrequest",
        permission:"managedc" 
      },
     
    ]
  },
  {
    title: "Products Manage",
    path: "/",
    icon: <FaIcons.FaCartPlus />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    cName: "nav-text",
    permission:"products", 
    submenu:[
     
      {
        title:"Single Product Add",
        path:"/singleproductadd",
        permission:"singleproductadd" 
      },
      
    ]
  },
  
  {
    title: "warehouse",
    path: "/",
    icon: <IoIcons.IoMdHelpCircle />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    cName: "nav-text",
    permission:"warehouseManage", 
    submenu:[
   
      {
        title: "Add Ware house",
        path: "/addwarehouse", 
        permission:"addWareHouse"    
      },
      {
          title: "Ware house List",
          path: "/warehouselist", 
          permission:"listWarehouse" 
      },
      {
        title: "Ware house Stocks",
        path: "/warehousestock", 
        permission:"listWarehouse" 
      }
     
    ]
  },

  // Supplier path data
  {
    title: "Supplier Manage",
    path: "/",
    icon: <IoIcons.IoMdHelpCircle />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    cName: "nav-text",
    permission:"supplierManage", 
    submenu:[
   
      {
        title: "Add Supplier",
        path: "/addsupplier", 
        permission:"addSupplier"    
      },
      {
          title: "List Supplier",
          path: "/listsupplier", 
          permission:"listSupplier" 
      }
    ]
  },
  {
    title: "Stock Manage",
    path: "/",
    icon: <IoIcons.IoMdHelpCircle />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    cName: "nav-text",
    permission:"stockManage", 
    submenu:[
   
      {
        title: "Purchase Stock",
        path: "/purchasestock", 
        permission:"purchaseStock"    
      },
      {
          title: "Purchase Stock List",
          path: "/purchasestocklist", 
          permission:"purchaseStockList" 
      } ,
      {
        title: "Transfer Stock",
        path: "/transferstock", 
        permission:"transferStock" 
       }
       ,{
        title: "Accept Stock Request",
        path: "/acceptstock", 
        permission:"acceptStockTransferRequest" 
       }
    ]
  },
   // fix me right it is rendering because we have selected permission as listcompany it needs to be change.
  // {
  //   title: "RefundSupport",
  //   path: "/refundandsupport",
  //   icon: <IoIcons.IoMdHelpCircle />,
  //   cName: "nav-text",
  //   permission:"listcompany",
  //   submenu:[
  //     {
  //       title: "Manage Refill Request",
  //       path: "/refundandsupport/managerefillrequest",
  //       permission:"listcompany"
  //     },
  //     {
  //       title: "Manage DC",
  //       path: "/refundandsupport/managedc",
  //       permission:"listcompany"
  //     },
  //     {
  //       title: "ManageDC Accept",
  //       path: "/refundandsupport/managedcaccept",
  //       permission:"listcompany"
  //     },
  //     {
  //       title: "Manage Completed Request",
  //       path: "/refundandsupport/managecompletedrefillrequest",
  //       permission:"listcompany"
  //     }
  //   ]
  // },
  // {
  //   title: "*",
  //   path: "/*",
  //   icon: <IoIcons.IoMdHelpCircle />,
  //   cName: "nav-text",
  //   permission:"listcompany"
    
  // }
];


