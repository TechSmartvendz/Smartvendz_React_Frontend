import React from 'react'

function Addmachineslot() {

    const tempdata={slno:"",slotname:"",materialname:"",currentstock:"",initialstock:"",notinuse:""};
    const[slotdata,setSlotdata]=useState([])

    function handleSlot()
  {  
    setSlotdata((previousState) =>{ return [ ...previousState,tempdata ]});
    console.log(slotdata);
 }
 
  return (
    <React.Fragment>
    
   
    
    <div className='table_container'>
  <table>
  <thead>
  <tr>
  <th>SL NO</th>
  <th>Slot Name</th>
  <th>Material Name</th>
  <th>Current Stock</th>
  <th>Initial Stock</th>
  <th>Not In Use</th>
  <th>Delete</th>
  </tr>
  </thead>
  {
slotdata.map((mdata,key)=>{
  return(
    <tbody>
<tr key={key}>
<td>{key+1}</td>
  
  <td><input type="text" name='slotname'  onChange={(e)=>{oninputchange(e,key)}} /></td>
  
  <td> 
  <select name='materialname'onChange={(e)=>{oninputchange(e,key)}}>
  <option>{mdata.materialname}</option>
  </select>
  </td>
  <td><input type="text" name='currentstock'  onChange={(e)=>{oninputchange(e,key)}}/></td>
  <td><input type="text" name='initialstock'  onChange={(e)=>{oninputchange(e,key)}}/></td>
  <td><input type="checkbox" name='notinuse'  onChange={(e)=>{oninputchange(e,key)}} /></td>
  <td><button className='mmDelete_btn'  onClick={()=>deleteAddmachine(key)}>Delete</button></td>
</tr>
</tbody>)
})
}
  
   </table>
  </div>
   
    </React.Fragment>
  )
}

export default Addmachineslot