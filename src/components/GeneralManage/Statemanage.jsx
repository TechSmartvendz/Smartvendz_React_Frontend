import React, { useState ,useEffect} from 'react'
import { getReq, postReq } from '../middleware/AxiosApisCall';
import { Store } from 'react-notifications-component';
import StateTable from './StateTable';
import DataList from './DataList';

function Statemanage() {
 const path="State"
const [inputs,setInputs]=useState({});
const [stateList,setStateList]=useState();
const [countriesList,setCountriesList]=useState();

const loadState=async ()=>{
  const response= await getReq(path)
  setStateList(response.data)
  // console.log(stateList)
}
useEffect(()=>{loadState()}, [])

const handleChange=(event)=>{
  const name=event.target.name;
  const value=event.target.value;
 setInputs(values=>({...values,[name]:value}))
}

const handleSubmit=async(event)=>{
  console.log("🚀 ~ file: Statemanage.jsx:49 ~ handleSubmit ~ inputs", inputs) 
event.preventDefault();
const response=await postReq(path,inputs)

if(response.status==="success"){
  loadState();
Store.addNotification({
  title:"Add State",
  message:"State Added successfully",
  type:"success",
        insert: "top",
        container: "top-right",
        dismiss: {
          duration: 1000,
     }
})
}
else{
  Store.addNotification({
    title:"Add State",
    message:response.error,
    type: "danger",
    insert: "top",
    container: "top-right",
    dismiss: {
      duration: 2000,
      
    }
  })
}
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
<input name="state" type="text" value={inputs.state || ""} onChange={handleChange} required/>
 <DataList path={'Country'} handleChange={handleChange} name={'country'} heading={'Country'}/>
 <button className="submit-btn">Add New</button>

  </div>
  
 </form>
 
 <div className="componet-sub2-title">
 <span>Total State:</span>
</div>
<StateTable key={stateList}  table={stateList} path={path} parentFunction={loadState}/>
</div>
   </React.Fragment>

  )
}

export default Statemanage
