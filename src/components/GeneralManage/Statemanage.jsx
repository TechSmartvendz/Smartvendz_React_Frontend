import React, { useState } from 'react'

function Statemanage() {
  const states=[
    {State:"Karnataka"},
    {State:"Tamilnadu"},
    {State:"Hydrabad"},
    {State:"Srilanka"},
    {State:"SouthAfrica"},
    {State:"England"}
]

const [input,setInput]=useState("");
const [option,setOption]=useState("india");

const handleChange=(e)=>{
  setInput(e.target.value);
 
}
const handleOption=(e)=>{
  setOption(e.target.value);
}
const handleSubmit=(e)=>{
e.preventDefault();
console.log(input);
console.log(option)
}
  return (
   <React.Fragment>
   <div className="add-user-container">
   <div>
   <span className="componet-title">State Manage</span>
 </div>

 <form className="flex-row form-2col-ver" onSubmit={handleSubmit}>
 <div className="componet-sub-title">
   <span>State Details</span>
 </div>


 <div className='general-manage-div'>
 
  <label htmlFor="name">State:</label>
 <input name="name" type="text" value={input} onChange={handleChange} required/>

 
 <label htmlFor='country'>Country:</label>
<select value={option}  onChange={handleOption}>
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
