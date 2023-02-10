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
   
  },
  {
    title: "User Manage",
    path: "/usermanage",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
    submenu:[
      {
        title: "Add new user",
        path: "/usermanage/addnewuser",  
        cName: "abc",
      
      },
      {
          title: "List User",
          path: "/usermanage/listuser",  
          cName:"" 
     
      },
      {
        title: "User permission",
        path: "/usermanage/userpermission",    
        cName:""
    }
    
    ]
  },
  {
    title: "Company Manage",
    path: "/companymanage",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
    submenu:[
      {
        title: "Add new company",
        path: "/companymanage/addnewcompany",    
      },
      {
        title: "List Company",
        path: "/companymanage/listcompany"    
      }
    ]
  },

  {
    title: "Machine Manage",
    path: "/managemachine",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
    submenu:[
 
      {
        title: "Add new machine",
        path: "/managemachine/addnewmachine",
      },
      {
        title: "List Machine",
        path: "/managemachine/listmachine",
      },
      {
        title: "Machine Configuration",
        path: "/managemachine/machineconfiguration",
      }
    ]
  },
  {
    title: "Employee Manage",
    path: "/employeemanage",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
    submenu:[  
      {
        title: "Add new employee",
        path: "/employeemanage/addnewemployee"
      },
      {
        title: "Update employee",
        path: "/employeemanage/updateemployee"
      },
      {
        title: "Search and update employee",
        path: "/employeemanage/searchandupdateemployee"
      }
    ]
  },
  {
    title: "Transaction Reports",
    path: "/transactionreports",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
    submenu:[

      {
        title: "Transaction Report",
        path: "/transactionreports/transactionreport",
      },
      {
        title: "Credit Report",
        path: "/transactionreports/creditreport"
      },
      {
        title: "Credit Transaction Report",
        path: "/transactionreports/credittransactionreport"
      }
    ]
  },
  {
    title: "General Manager",
    path: "/generalmanager",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
    submenu:[
  
      {
        title: "Country manage",
        path: "/generalmanager/countrymanage",    
      },
      {
        title: "State manage",
        path: "/generalmanager/statemanage",    
      },
      {
        title: "City manage",
        path: "/generalmanager/citymanage",    
      },
      {
        title:"Area manage",
        path:"/generalmanager/areamanage",
      },
      {
        title: "Unit manage",
        path: "/generalmanager/unitmanage",    
      },
     
    ]
  },
  {
    title: "Refiller Manager",
    path: "/refillermanager",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
    submenu:[
   
      {
        title: "1",
        path: "/refillermanager/1",
      },
      {
        title: "2",
        path: "/refillermanager/2",
      },
      {
        title: "3",
        path: "/refillermanager/3",
      }
    ]
  },
  {
    title: "Products",
    path: "/products",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
    submenu:[
      {
        title:"Product List",
        path:"/products/productlist"
    
      },
      {
        title:"Bulk Product Upload",
        path:"/products/bulkproductupload"
      },
      {
        title:"Single Product Add",
        path:"/products/singleproductadd"
      },
      {
        title:"Update Bulk Product",
        path:"/products/updatebulkproduct"
      }
    ]
  },
  {
    title: "Inventory Manager",
    path: "/inventorymanager",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
    submenu:[
    
      {
        title: "1",
        path: "/inventorymanager/1",    
      },
      {
        title: "2",
        path: "/inventorymanager/2",    
      }
     
    ]
  },
  {
    title: "warehouse",
    path: "/warehouse",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
    submenu:[
   
      {
        title: "Add new user",
        path: "/warehouse/addnewuser",    
      },
      {
          title: "User permission",
          path: "/warehouse/userpermission",    
      }
    ]
  },
  {
    title: "RefundSupport",
    path: "/refundandsupport",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
    submenu:[
   
      {
        title: "1",
        path: "/refundandsupport/1",
      },
      {
        title: "2",
        path: "/refundandsupport/2"
      }
    ]
  },
  {
    title: "*",
    path: "/*",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
    
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
