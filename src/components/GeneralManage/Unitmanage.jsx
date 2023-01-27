import React, { useState,useEffect } from 'react'
import { getReq, postReq } from '../middleware/AxiosApisCall';
import { Store } from 'react-notifications-component';
import UnitTable from './UnitTable';
import CityList from './CityList';
function Unitmanage() {

const [inputs,setInputs]=useState({});
const [unitList,setUnitList]=useState();
const [citiesList,setCitiesList]=useState();

const path="Unit"
const upath="City"

const handleChange=(event)=>{
 const name=event.target.name;
 const value=event.target.value;
 setInputs((values)=>({...values,[name]:value}))
}

const loadUnit=async()=>{
  const response=await getReq(path)
  setUnitList(response.data)
      }
    
      useEffect(() => {
        loadUnit();
      }, [])


      const loadUnits=async()=>{
        const response=await getReq(upath)
        setCitiesList(response.data)
      }
useEffect(() => {
  loadUnits();
}, [])



const handleSubmit=async(event)=>{
  event.preventDefault();
   const response=await postReq(path,inputs)
   if(response.status==="success")
   {
  loadUnit();
     Store.addNotification({
       title:"Add Unit",
       message:"Unit Added successfully",
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
       title:"Add Unit",
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
  <span className="componet-title">Unit Manage</span>
</div>

<form className="flex-row form-2col-ver" onSubmit={handleSubmit}>
<div className="componet-sub-title">
  <span>Unit Details</span>
</div>


<div className='general-manage-div'>

 <label htmlFor="city">Unit:</label>
<input name="unit" type="text" value={inputs.unit || ""} onChange={handleChange} required/>

<CityList key={citiesList} path={upath} table={citiesList} />



<button className="submit-btn">Add New</button>

 </div>
 
</form>

<div className="componet-sub2-title">
<span>Total Units:</span>
</div>
    <UnitTable key={unitList} table={unitList} path={path} parentFunction={loadUnit} />
</div>
   
  </React.Fragment>

  )
}

export default Unitmanage
