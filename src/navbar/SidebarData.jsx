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
    title: "Addorder",
    path: "/addorder",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Products",
    path: "/products",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "User Manage",
    path: "/usermanage",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Company Manage",
    path: "/companymanage",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },

  {
    title: "Machine Manage",
    path: "/manage_machine",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
  {
    title: "Employee Manage",
    path: "/employeemanage",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
  {
    title: "Transaction Reports",
    path: "/transactionreports",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
  {
    title: "General Manager",
    path: "/generalmanager",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
  {
    title: "Refiller Manager",
    path: "/refillermanager",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
  {
    title: "Inventory Manager",
    path: "/inventorymanager",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
  {
    title: "warehouse",
    path: "/warehouse",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
  {
    title: "RefundSupport",
    path: "/refundandsupport",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
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
