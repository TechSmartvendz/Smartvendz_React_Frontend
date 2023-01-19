import React, { useState } from 'react'

function Unitmanage() {
  const units=[
    {Unit:"HSR Lyout"},
    {Unit:"ITPL"},
    {Unit:"Mannyata"},
    {Unit:"Hosuru"},
    {Unit:"Martahalli"},
    {Unit:"Indiranagar"}
  ]

const [input,setInput]=useState("");
const [option,setOption]=useState("Bengaluru");


const handleChange=(e)=>{
  setInput(e.target.value);
}
const handleOption=(e)=>{
  setOption(e.target.value);
}

const handleSubmit=(e)=>{
  e.preventDefault();
  console.log(input);
  console.log(option);
}
  return (
  
  <React.Fragment>
  <div className="add-user-container">
  <div>
  <span className="componet-title">Unit Manage</span>
</div>

<form className="flex-row form-2col-ver" onSubmit={handleSubmit}>
<div className="componet-sub-title">
  <span>Unit Details</span>
</div>


<div className='general-manage-div'>

 <label htmlFor="city">Unit:</label>
<input name="name" type="text" value={input} onChange={handleChange} required/>


<label htmlFor='country'>City:</label>
<select value={option} onChange={handleOption}>
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
