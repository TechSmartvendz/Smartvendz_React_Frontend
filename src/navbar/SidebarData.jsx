import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
    permission:"home"
  },
  {
    title: "User Manage",
    path: "/usermanage",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
    permission:"usermanage",
    submenu:[
      {
        title: "Add new user",
        path: "/usermanage/addnewuser",  
        cName: "abc",
        permission:"addnewuser"
      },
      {
          title: "List User",
          path: "/usermanage/listuser",  
          cName:"" ,
          permission:"listuser"
     
      },
      {
        title: "User permission",
        path: "/usermanage/userpermission",    
        cName:"",
        permission:"userpermission"
      },
     
    ]
  },
  {
    title: "Company Manage",
    path: "/companymanage",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
    permission:"companymanage",
    submenu:[
      {
        title: "Add new company",
        path: "/companymanage/addnewcompany",
        permission:"addnewcompany"  
      },
      {
        title: "List Company",
        path: "/companymanage/listcompany" ,
        permission:"listcompany"    
      },
      // {
      //   title: "Company Admins",
      //   path: "/companymanage/companyadmins" ,
      //   permission:"companyadmins"    
      // },
      // {
      //   title: "Company Machines",
      //   path: "/companymanage/companymachines" ,
      //   permission:"companymachines"    
      // }
    ]
  },

  {
    title: "Machine Manage",
    path: "/managemachine",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
    permission:"managemachine", 
    submenu:[
 
      {
        title: "Add new machine",
        path: "/managemachine/addnewmachine",
        permission:"addnewmachine" 
      },
      {
        title: "List Machine",
        path: "/managemachine/listmachine",
        permission:"listmachine" 
      },
      {
        title: "Machine Configuration",
        path: "/managemachine/machineconfiguration",
        permission:"machineconfiguration" 
      }
    ]
  },
  {
    title: " Employee Manage",
    path: "/employeemanage",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
    permission:"managemachine", 
    submenu:[  
      {
        title: "Add And Edit Employee",
        path: "/employeemanage/addandeditemployee",
        permission:"addnewmachine" 
      },
      // {
      //   title: "Employee Credits",
      //   path: "/employeemanage/employeecredit",
      //   permission:"addnewmachine"
      // },
     
    ]
  },
  {
    title: "Transaction Reports",
    path: "/transactionreports",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
    permission:"listcompany", 
    submenu:[

      {
        title: "Transaction Report",
        path: "/transactionreports/transactionreport",
        permission:"listcompany"
      },
      {
        title: "Credit Report",
        path: "/transactionreports/creditreport",
        permission:"listcompany"
      },
      {
        title: "Credit Transaction Report",
        path: "/transactionreports/credittransactionreport",
        permission:"listcompany" 
      }
    ]
  },
  {
    title: "General Manager",
    path: "/generalmanager",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
    permission:"listcompany",
    submenu:[
  
      {
        title: "Country manage",
        path: "/generalmanager/countrymanage", 
        permission:"listcompany"   
      },
      {
        title: "State manage",
        path: "/generalmanager/statemanage",
        permission:"listcompany"     
      },
      {
        title: "City manage",
        path: "/generalmanager/citymanage",
        permission:"listcompany"     
      },
      {
        title:"Area manage",
        path:"/generalmanager/areamanage",
        permission:"listcompany" 
      },
      {
        title: "Unit manage",
        path: "/generalmanager/unitmanage",
        permission:"listcompany"    
      },
     
    ]
  },
  {
    title: "Refiller Manager",
    path: "/refillermanager",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
    permission:"refillermanager",
    submenu:[
      {
        title: "Manage Refill Request",
        path: "/refillermanager/managerefillrequest",
        permission:"managedc"
      },
      {
        title: "Refiller Refilling Request",
        path: "/refillermanager/refillerrefillingrequest",
        permission:"managedc" 
      },
     
    ]
  },
  {
    title: "Products",
    path: "/products",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
    permission:"products", 
    submenu:[
      // {
      //   title:"Product List",
      //   path:"/products/productlist",
      //   permission:"productlist"
    
      // },
      // {
      //   title:"Bulk Product Upload",
      //   path:"/products/bulkproductupload",
      //   permission:"bulkproductupload"
      // },
      {
        title:"Single Product Add",
        path:"/products/singleproductadd",
        permission:"singleproductadd" 
      },
      // {
      //   title:"Update Bulk Product",
      //   path:"/products/updatebulkproduct",
      //   permission:"updatebulkproduct"
      // }
    ]
  },
  {
    title: "Inventory Manager",
    path: "/inventorymanager",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
    permission:"listcompany",
    submenu:[
    
      {
        title: "1",
        path: "/inventorymanager/1",
        permission:"listcompany"    
      },
      {
        title: "2",
        path: "/inventorymanager/2",
        permission:"listcompany",     
      }
     
    ]
  },
  {
    title: "warehouse",
    path: "/warehouse",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
    permission:"listcompany", 
    submenu:[
   
      {
        title: "Add new user",
        path: "/warehouse/addnewuser", 
        permission:"listcompany"    
      },
      {
          title: "User permission",
          path: "/warehouse/userpermission", 
          permission:"listcompany" 
      }
    ]
  },
  {
    title: "RefundSupport",
    path: "/refundandsupport",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
    permission:"listcompany",
    submenu:[
      {
        title: "Manage Refill Request",
        path: "/refundandsupport/managerefillrequest",
        permission:"listcompany"
      },
      {
        title: "Manage DC",
        path: "/refundandsupport/managedc",
        permission:"listcompany"
      },
      {
        title: "ManageDC Accept",
        path: "/refundandsupport/managedcaccept",
        permission:"listcompany"
      },
      {
        title: "Manage Completed Request",
        path: "/refundandsupport/managecompletedrefillrequest",
        permission:"listcompany"
      }
    ]
  },
  {
    title: "*",
    path: "/*",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
    permission:"listcompany"
    
  }
];

/*
User Manage
Company Manage
Machine Manage
Employee Manage
 Transaction Reports
General Manager
Refiller Manager
Inventory Manager
Warehouse 
Refund & Support



*/
