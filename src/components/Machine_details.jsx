
// import { array } from 'prop-types';
import React, { useState } from 'react'
// import MachineContext from '../Context/MachineContext'
import Machine_input from './Machine_input';
import './views/addmachineslot.css'
function Machine_details() {
 
  // const {add1,setAdd1} = useContext(MachineContext)
  
  // const tempdata={slno:"",slotname:"",materialname:"",currentstock:"",initialstock:"",notinuse:""};
  const [array,setArray]=useState([])
  const [inputdata,setInputdata]=useState({slno:"",slotname:"",materialname:"",currentstock:"",initialstock:"",notinuse:""})

  
  let {slotname,materialname,currentstock,initialstock,notinuse}=inputdata;
  
  function addTableRow()
  {  
    if(slotname==="" ||  currentstock==="" || initialstock===""){
      alert("please enter data");

    }else{
      setArray([...array,{slotname,materialname,currentstock,initialstock,notinuse}])
      console.log(inputdata)
      setInputdata({slno:"",slotname:"",materialname:"",currentstock:"",initialstock:"",notinuse:""})
    }
   
  }
function changeData(e)
  {  
    setInputdata({...inputdata,[e.target.name]:e.target.value})
  }
  
  function deleteAddmachine(i)
  {
console.log(i)
  
   
   const total=[...array]
   total.splice(i,1)
   setArray(total);
  }
   return (
    <React.Fragment>
    
 <Machine_input/>
 <div className='ams_container'>
 <div className="formcontain">
 <form className="form_div">
 
 <div className="input_field">
 <label htmlFor='slotname'> Slot Name</label>
 <input type="text" name='slotname' className='slotname'  placeholder="Enter Slot Name" value={inputdata.slotname || ""} onChange={changeData}/>
 
 </div>
 <div className="input_field">
 <label htmlFor='materialname'>Material Name</label>
 <select name='materialname' placeholder='Enter Material Name' value={inputdata.materialname || ""}   onChange={changeData} >
 <option></option>
</select>
</div>

<div className="input_field">
<label htmlFor='currentstock'>Current Stock</label>
<input type="text" name='currentstock' className='currentstock' placeholder='Enter Current Stock' value={inputdata.currentstock || ""}  onChange={changeData}/>
</div>

<div className="input_field">
<label htmlFor='intitialstock'>Initial Stock</label>
<input type="text" className='initialstock' name='initialstock' placeholder='Enter Initial stock' value={inputdata.initialstock || ""} onChange={changeData}/>
</div>

<div className="input_field">
<label htmlFor='notinuse'>Not in use</label>
<input type="checkbox" className='check' name='notinuse' value={inputdata.notinuse || ""}  onChange={changeData} />
</div>

</form>

</div>
<button className='mmAddnew_btn' onClick={addTableRow}>Add Machine Slots</button>
   {/*AddMachine slots start from here */}
  
  
   <div className='table_container'>
   <table >
  <tbody>
   
  <tr>
  <th>Slno</th>
   <th>Slot Name</th>
   <th>Material Name</th>
   <th>Current Stock</th>
   <th>Initial Stock</th>
   <th>Not In Use</th>
   <th>Delete</th>
   </tr>
 
   {
 array && array.map((item,i)=>{
   
  return(
   
 <tr key={i} >

   <td>{i+1}</td>
   <td>{item.slotname}</td>
   <td>{item.materialname}</td>
    <td>{item.currentstock}</td>
   <td>{item.initialstock}</td>
  
   <td>{item.notinuse}</td>
    <td><button className='mmDelete_btn'  onClick={()=>deleteAddmachine(i)}>Delete</button></td>
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

export default Machine_details