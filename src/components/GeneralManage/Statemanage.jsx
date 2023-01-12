import React from 'react'

function Statemanage() {
  const states=[
    {State:"Karnataka"},
    {State:"Tamilnadu"},
    {State:"Hydrabad"},
    {State:"Srilanka"},
    {State:"SouthAfrica"},
    {State:"England"}


]
  return (
   <React.Fragment>
   <div className="add-user-container">
   <div>
   <span className="componet-title">State Manage</span>
 </div>

 <form className="flex-row form-2col-ver">
 <div className="componet-sub-title">
   <span>State Details</span>
 </div>


 <div className='general-manage-div'>
 
  <label htmlFor="name">State:</label>
 <input name="name" type="text" required/>

 
 <label htmlFor='country'>Country:</label>
<select>
<option>India</option>
<option>Us</option>
<option>China</option>
<option>Canada</option>

</select>


 <button className="submit-btn">Add New</button>

  </div>
  
 </form>
 
 <div className="componet-sub2-title">
 <span>Total State:</span>
</div>
<div className="table_container-div">
<table>
    <tbody>
    <tr>
    <th>State</th>
    <th>Action</th>
    </tr>

    {
    states.map((sta,key)=>{
      return(
        <tr key={key}>
        <td>{sta.State}</td>
       
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

export default Statemanage
