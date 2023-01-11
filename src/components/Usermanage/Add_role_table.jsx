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
<>
   <div className='table_container-div'>
   
   <table>
   <tbody>   
   <tr>
   <th>Sl no</th>
   <th>Role Name</th>
   <th>Permission</th>
   <th>Action</th>
   
   </tr>
   
   {
    permission.map((data,key)=>{
      return(
        <tr key={key}>
        <td>{key+1}</td>
        <td>{data.Rolename}</td>
        <td>{data.permission}</td>
        <td><button>Edit</button>
         <button >Delete</button></td>
       
        </tr>
      )
    })
   }
   
   </tbody>
   </table>
   
   </div> 
   
   
   </>
  )
}

export default Add_role_table