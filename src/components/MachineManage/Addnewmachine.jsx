import { useState} from "react";
// import MachineContext from "../../Context/MachineContext";
import MachineForm from "./MachineForm";

function Addnewmachine() {
  const options=["Masala","Madangle","Naamkeen","Lays","Kurkure","Mountain div","cCormflakes","Raspry pi"]

  const [bulk,setBulk]=useState("");
  const [array,setArray]=useState([])
  const [inputdata,setInputdata]=useState({slno:"",slotname:"",materialname:"",currentstock:"",initialstock:"",notinuse:""})

  
  let {slotname,materialname,currentstock,initialstock,notinuse}=inputdata;
  
  function addTableRow(e)
  { 
     e.preventDefault();
    if(slotname==="" ||  currentstock==="" || initialstock===""){
      alert("please enter data in the form");

    }else{
      const datas=[...array,{slotname,materialname,currentstock,initialstock,notinuse}]
      setArray(datas)
     
       console.log(inputdata)
     
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
 function addBulkData(e)
 {
 
  const datas=[...array,{slotname,materialname,currentstock,initialstock,notinuse}]
  setBulk(console.log(datas))
 }

 //new one
 const handleSubmit = async (event) => {
  event.preventDefault();
  console.log(inputs);
  const response=await postReq(path,inputs)
  if(response.status==="success"){
  setInputs({})
  SuccessAlert({title:"Add User",message:"User Added successfully"})
  }else{
    ErrorAlert({title:"Add User",message:response.error})
  }
}

  return (
    <>
    
      <MachineForm/>

      <div className="add-user-container">
      


      <div className="componet-sub-title">
      <span>Add Slots</span>
    </div>
    <div className="option-btn">
    <button onClick={addBulkData}>Save Table</button>
     </div>
    <div  className="add-user-container">
    

 <form className="flex-col">
 
 <div className="input-lable-v-div">
 <label htmlFor='slotname'> Slot Name</label>
 <input 
 type="text" 
 name='slotname' 
 className='slot'  
 placeholder="Enter Slot Name" 
 value={inputdata.slotname || ""} 
 onChange={changeData}/>
 
 </div>
 <div className="input-lable-v-div">
 <label htmlFor='materialname'>Material Name</label>
 <input 
 className='material' 
 list="materialname" 
 type="text" 
 name='materialname' 
 placeholder='Search Material Name' 
 value={inputdata.materialname || ""}   
 onChange={changeData} />
 
 <datalist id="materialname">
 {
  options.map((opt,k)=><option key={k}>{opt}</option>)
 }
 </datalist>
</div>

<div className="input-lable-v-div">
<label htmlFor='currentstock'>Current Stock</label>
<input type="text" name='currentstock' className='current_s' placeholder='Enter Current Stock' value={inputdata.currentstock || ""}  onChange={changeData}/>
</div>

<div className="input-lable-v-div">
<label htmlFor='intitialstock'>Initial Stock</label>
<input type="text" className='istock' name='initialstock' placeholder='Enter Initial stock' value={inputdata.initialstock || ""} onChange={changeData}/>
</div>

<div className="input-lable-v-div">
<label htmlFor='notinuse'>Not in use</label>
<input type="checkbox" className='checkbox' name='notinuse' value={inputdata.notinuse || ""}  onChange={changeData} />
</div>
<div className='input-lable-v-div'>
<button className="submit-btn" onClick={addTableRow}>Add Slot</button>
</div>

</form>


</div>


    <div className="table_container-div">
    <table>
      <tbody>
        <tr>
          <th>Slno</th>
          <th>Slot Name</th>
          <th>Material Name</th>
          <th>Current Stock</th>
          <th>Initial Stock</th>
          <th>Not In Use</th>
          <th>Action</th>
        </tr>

        {
          array &&
          array.map((item, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{item.slotname}</td>
                <td>{item.materialname}</td>
                <td>{item.currentstock}</td>
                <td>{item.initialstock}</td>

                <td>{item.notinuse}</td>
                <td>
                <button>Edit</button>
                  <button onClick={() => deleteAddmachine(i)} >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  </div>
      </div>


    </>
  );
}

export default Addnewmachine;
