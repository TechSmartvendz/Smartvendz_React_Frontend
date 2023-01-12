import React from 'react'

function Countrymanage() {
  const country=[
    {Country:"India"},
    {Country:"China"},
    {Country:"Us"},
    {Country:"Srilanka"},
    {Country:"SouthAfrica"},
    {Country:"England"}


]
  return (
   <React.Fragment>
   <div className="add-user-container">
   <div>
   <span className="componet-title">Country Manage</span>
 </div>

 <form className="flex-row form-2col-ver">
 <div className="componet-sub-title">
   <span>Country Details</span>
 </div>


 <div className='general-manage-div'>
  <label htmlFor="name">Country:</label>
 <input name="name" type="text" required/>
 <button className="submit-btn">Add New</button>
  </div>
  
 </form>
 
 <div className="componet-sub2-title">
 <span>Total Country:</span>
</div>

<div className="table_container-div">
<table>
    <tbody>
    <tr>
    <th>Country</th>
    <th>Action</th>
    </tr>

    {
    country.map((cntr,key)=>{
      return(
        <tr key={key}>
        <td>{cntr.Country}</td>
       
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

export default Countrymanage
