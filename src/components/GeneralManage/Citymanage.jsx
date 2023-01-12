import React from 'react'

function Citymanage() {
  const citys=[
    {City:"Bengaluru"},
    {City:"Channai"},
    {City:"Mumbai"},
    {City:"Hydrabad"},
    {City:"Noida"},
    {City:"Pune"}
  ]
  return (
    <React.Fragment>
    <div className="add-user-container">
    <div>
    <span className="componet-title">City Manage</span>
  </div>
 
  <form className="flex-row form-2col-ver">
  <div className="componet-sub-title">
    <span>City Details</span>
  </div>
 
 
  <div className='general-manage-div'>
  
   <label htmlFor="city">City:</label>
  <input name="name" type="text" required/>
 
  
  <label htmlFor='country'>State:</label>
 <select>
 <option>Karnataka</option>
 <option>Tamilnadu</option>
 <option>Maharastra</option>
 <option>Hydrabad</option>
 
 </select>
 
 
  <button className="submit-btn">Add New</button>
 
   </div>
   
  </form>
  
  <div className="componet-sub2-title">
  <span>Total City:</span>
 </div>
 <div className="table_container-div">
 <table>
     <tbody>
     <tr>
     <th>City</th>
     <th>Action</th>
     </tr>
 
     {
      citys.map((cit,key)=>{
       return(
         <tr key={key}>
         <td>{cit.City}</td>
        
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

export default Citymanage
