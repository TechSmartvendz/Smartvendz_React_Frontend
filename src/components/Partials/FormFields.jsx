import DataList from "./DataList";
export const template = {

  addnewuser: [
   
    {
      title: "First Name",
      name: "first_name",
      type: "text",
      
      required: true
    },

    {
      title: "Middle Name",
      name: "middle_name",
      type: "text",
      required: true
    },
    
    {
      title:"Last Name",
      name:"last_name",
      type:"text",
      required:true
      },
      {
        title:"Mobile",
        name:"mobile",
        type:"text",
        required:true
        },
        {
          title:"Alternate Mobile",
          name:"alter_mobile",
          type:"text",
          required:true
          },
          {
            title:"User Email",
            name:"email",
            type:"text",
            required:true
            },
            {
              title:"Current Addresss",
              name:"current_address",
              type:"text",
              required:true
              },
              {
                title:"Permanent Address",
                name:"per_address",
                type:"text",
                required:true
                },
             
],
addnewuser1:[
{
title:'Role',
name:'User',
type:'datalist',
require:true
},
{
title:"Display Name",
name:'display_name',
type:'text',
require:true

},
{
  title:"City",
  name:'city',
  type:'datalist',
  require:true
  },
  {
    title:"State",
    name:'state',
    type:'datalist',
    require:true
  },
  {
    title:'Country',
    name:'country',
    type:'datalist',
    required:true
  }
],
loginInfo:[
  {
title:'User ID',
name:'user_id',
type:'text',
required:true
  },
  {
    title:'Password',
    name:'password',
    type:'password',
    required:true
   },
   {
    title:'Confirm Password',
    name:'cpassword',
    type:'password',
    required:true
   }
],
  mains: [
    {
      title: "User Manage",
      type: "checkbox",
      name: "usermanage",
      value: "usermanage",

      sections: [
        {
          title: "Add New User",
          type: "checkbox",
          name: "addnewuser",
          value: "addnewuser",
        },
        {
          title: "List User",
          type: "checkbox",
          name: "listuser",
          value: "listuser",
        },
        {
          title: "User Permission",
          type: "checkbox",
          name: "userpermission",
          value: "userpermission",
        },
        {
          title: "Add and Update Role",
          type: "checkbox",
          name: "userrole",
          value: "userrole",
        },
      ],
    },

    {
      title: "Company Manage",
      type: "checkbox",
      name: "companymanage",
      value: "companymanage",

      sections: [
        {
          title: "Add New Company ",
          type: "checkbox",
          name: "addnewcompany",
          value: "addnewcompany",
        },

        {
          title: "List Company ",
          type: "checkbox",
          name: "listcompany",
          value: "listcompany",
        },
        {
          title: "Company Admins",
          type: "checkbox",
          name: "companyadmins",
          value: "companyadmins",
        },
        {
          title: "Company Machines ",
          type: "checkbox",
          name: "companymachines",
          value: "companymachines",
        },
      ],
    },

    {
      title: "Machine Manage ",
      type: "checkbox",
      name: "managemachine",
      value: "managemachine",

      sections: [
        {
          title: "Add New Machine ",
          type: "checkbox",
          name: "addnewmachine",
          value: "addnewmachine",
        },
        {
          title: "List Machine ",
          type: "checkbox",
          name: "listmachine",
          value: "listmachine",
        },
        {
          title: " Machine Configuration",
          type: "checkbox",
          name: "machineconfiguration",
          value: "machineconfiguration",
        },
      ],
    },

    {
      title: " Employee Manage",
      type: "checkbox",
      name: "employeemanage",
      value: "employeemanage",

      sections: [
        {
          title: "Add New Employee",
          type: "checkbox",
          name: "addnewemployee",
          value: "addnewemployee",
        },
        {
          title: "Update Employee",
          type: "checkbox",
          name: "updateemployee",
          value: "updateemployee",
        },
        {
          title: "Search and Edit Employee",
          type: "checkbox",
          name: "searchandupdateemployee",
          value: "searchandupdateemployee",
        },
      ],
    },

    {
      title: "Refiller Manage",
      type: "checkbox",
      name: "refillermanager",
      value: "refillermanager",

      sections: [
        {
          title: "Manage DC",
          type: "checkbox",
          name: "managedc",
          value: "managedc",
        },
        {
          title: "Manage Accept DC",
          type: "checkbox",
          name: "managedcaccept",
          value: "managedcaccept",
        },
        {
          title: "Manage Completed Refill Request",
          type: "checkbox",
          name: "managecompletedrefillrequest",
          value: "managecompletedrefillrequest",
        },
      ],
    },
    {
      title: "Product Manage",
      type: "checkbox",
      name: "products",
      value: "products",

      sections: [
        {
          title: "Product List",
          type: "checkbox",
          name: "productlist",
          value: "productlist",
        },
        {
          title: "Bulk Product Upload",
          type: "checkbox",
          name: "bulkproductupload",
          value: "bulkproductupload",
        },
        {
          title: "Add Single Product",
          type: "checkbox",
          name: "singleproductadd",
          value: "singleproductadd",
        },
        {
          title: "Update Bulk Product",
          type: "checkbox",
          name: "updatebulkproduct",
          value: "updatebulkproduct",
        },
      ],
    },
    {
      title: "Ware House Manage",
      type: "checkbox",
      name: "warehouse",
      value: "warehouse",

      sections: [
        {
          title: "Add WareHouse",
          type: "checkbox",
          name: "addWareHouse",
          value: "addWareWouse",
        },
        {
          title: "WareHouse List",
          type: "checkbox",
          name: "listWarehouse",
          value: "bulkproductupload",
        }
      ]

    }
    
  ]
};
