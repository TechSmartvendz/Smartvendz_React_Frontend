import React from 'react'

function Unitmanage() {
  const units=[
    {Unit:"HSR Lyout"},
    {Unit:"ITPL"},
    {Unit:"Mannyata"},
    {Unit:"Hosuru"},
    {Unit:"Martahalli"},
    {Unit:"Indiranagar"}
  ]


  return (
  
  <React.Fragment>
  <div className="add-user-container">
  <div>
  <span className="componet-title">Unit Manage</span>
</div>

<form className="flex-row form-2col-ver">
<div className="componet-sub-title">
  <span>Unit Details</span>
</div>


<div className='general-manage-div'>

 <label htmlFor="city">Unit:</label>
<input name="name" type="text" required/>


<label htmlFor='country'>City:</label>
<select>
<option>Bengaluru</option>
<option>Channai</option>
<option>Hydrabad</option>
<option>Pune</option>

</select>


<button className="submit-btn">Add New</button>

 </div>
 
</form>

<div className="componet-sub2-title">
<span>Total Units:</span>
</div>
<div className="table_container-div">
<table>
   <tbody>
   <tr>
   <th>Unit</th>
   <th>Action</th>
   </tr>

   {
    units.map((unit,key)=>{
     return(
       <tr key={key}>
       <td>{unit.Unit}</td>
      
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

export default Unitmanage
