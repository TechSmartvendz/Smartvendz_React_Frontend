import React from 'react'

function Add_role_table() {
    const permission=[
        {slno:"",Rolename:"super_admin",permission:""},
        {slno:"",Rolename:"Branch_admin",permission:""},
        {slno:"",Rolename:"Client_admin",permission:""},
        {slno:"",Rolename:"Refiller",permission:""},
        {slno:"",Rolename:"Staff",permission:""}
       ] 
  return (
   <React.Fragment>
   <div className='table_div'>
   
   <table>
   <tbody>   
   <tr>
   <th>Sl no</th>
   <th>Role Name</th>
   <th>Permission</th>
   <th>Edit</th>
   <th>Delete</th>
   <th></th>
   </tr>
   
   {
    permission.map((data,key)=>{
      return(
        <tr key={key}>
        <td>{key+1}</td>
        <td>{data.Rolename}</td>
        <td>{data.permission}</td>
        <td><button className='btn_edit'>Edit</button></td>
        <td><button className='btn_delete'>Delete</button></td>
        <td></td>
        </tr>
      )
    })
   }
   
   </tbody>
   </table>
   
   </div> 
   
   
   </React.Fragment>
  )
}

export default Add_role_table