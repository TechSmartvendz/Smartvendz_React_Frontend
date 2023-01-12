import React from 'react'

function Listcompany() {

  const list=[
    {companyname:"Wipro",companyid:"W1235",contactperson:"asp@123",personmobile:"9915648895",admin:"refiller"},
    {companyname:"simlpilearn",companyid:"WS466",contactperson:"vinayak@1113",personmobile:"885648895",admin:"refiller"},
    {companyname:"Snaxsmart",companyid:"snax1235",contactperson:"snax@123",personmobile:"778648895",admin:"manager"},
    {companyname:"snaxsmart",companyid:"de7235",contactperson:"chetan@443",personmobile:"6655548895",admin:"manager"},
    {companyname:"ASdd",companyid:"sd235",contactperson:"snaxp@123",personmobile:"888848895",admin:"account"},
    {companyname:"infosys",companyid:"deef235",contactperson:"supp@123",personmobile:"775548895",admin:"support"},

  ]
  return (
    <React.Fragment>
    <div className="add-user-container">
   
    <div>
    <span className="componet-title">Company List</span>
  </div>

  <div className="option-btn">
  <button >Add New Company</button>
   </div>

   <div className="componet-sub2-title">
          <span>Total Company:</span>
        </div>
       
        <div className="table_container-div">
    <table>
    <tbody>
    <tr>
    <th>Company Name</th>
    <th>Company Id</th>
    <th>Contact Person</th>
    <th>Contact Mobile</th>
    <th>Admin</th>
    <th>Action</th>
    </tr>
    {
      list.map((data,key)=>{
        return(
         <tr key={key}>
         <td>{data.companyname}</td>
         <td>{data.companyid}</td>
         <td>{data.contactperson}</td>
         <td>{data.personmobile}</td>
         <td>{data.admin}</td>
         <td>
          <button className="btn_edit">Edit</button>
          <button className="btn_delete">Delete</button>
          </td>
         </tr>

        )
      })
    }
    
    </tbody>
    
    </table>
    </div>
    </div>
    </React.Fragment>
  )
}

export default Listcompany
