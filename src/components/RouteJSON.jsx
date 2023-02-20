export const RouteJSON = [
  {
    title: "Home",
    element: "<Home />",
    path: "/",
    id: 1,
  },
  {
    title: "Companymanage",
    element: "Companymanage",
    path: "/companymanage",
    id: 2,
    sublinks: [
      {
        title: "Add new company",
        path: "/companymanage/addnewcompany",
        element: "<Addnewcompany />",
        id: 21,
      },
      // {
      //   title: "List Company",
      //   path: "/companymanage/listcompany",
      //   element: "<Listcompany />",
      //   id: 22,
      // },
    ],
  },
  {
    title: "Employeemanage",
    element: "<Employeemanage />",
    path: "/employeemanage",
    id: 3,
    sublinks: [
      {
        title: "Add new employee",
        path: "/employeemanage/addnewemployee",
        element: "<Addnewemployee/>",
        id: 31,
      },
      {
        title: "Update employee",
        path: "/employeemanage/updateemployee",
        element: "<Updateemployee/>",
        id: 32,
      },
    ],
  },
];
