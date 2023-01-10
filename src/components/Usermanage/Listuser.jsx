import React from 'react'

function Listuser() {
  const userdata=[{Slno:"",name:"Ashok",role:"refiller",officelocation:"hsr Layout"},
  {Slno:"",name:"Sharan",role:"support",officelocation:"Marthalli"},
  {Slno:"",name:"Shubham",role:"developer",officelocation:"Hebbal"},
  {Slno:"",name:"Kuldeep",role:"devloper",officelocation:"Nagvar"},
  {Slno:"",name:"Dinesh",role:"Ac count",officelocation:"Itpl"}]
  return (
  <React.Fragment>
  
  <div className='listuser_Container'>
    
  <div className='btn_divc'>
   <button className='dltntn'>Bulk Delete</button>
   <div className='span_div'><span>Total User:</span></div>
   </div>
   
   <div className='table_container'>
   <table>
   <tbody>
   <tr>
   <th>Sl no</th>
   <th> Name</th>
   <th>Role</th>
   <th>Office/Location</th>
   <th>Edit</th>
   <th>Delete</th>
   <th></th>

   </tr>
   {
     userdata.map((data,key)=>{
     
       return(
     
     <tr kay={key}>
     <td>{key+1}</td>
     <td>{data.name}</td>
     <td>{data.role}</td>
     <td>{data.officelocation}</td>
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
  
   </div>
  </React.Fragment>
  )
}

export default Listuser