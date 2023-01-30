import React,{useState,useEffect} from 'react'
import { getReq, postReq } from '../middleware/AxiosApisCall';
import { Store } from 'react-notifications-component';
// import CityTable from './CityTable';
import AreaTable from './AreaTable';
import DataList from './DataList';
function Areamanage() {
    const path="Area"

    const [inputs,setInputs]=useState({});
    
     const [areaList,setAreaList]=useState();
    
    
     const loadArea=async()=>{
      const response=await getReq(path)
      setCityList(response.data)
     }
    
     useEffect(() => {
     loadArea();
     }, [])
    
    
     const handleChange=(event)=>{
     
        const name=event.target.name;
        const value=event.target.value;
        setInputs((values)=>({...values,[name]:value}))
      }
      
       
      const handleSubmit=async(event)=>{
       event.preventDefault();
      const response =await postReq(path,inputs)
      if(response.status==="success")
      {
        loadArea();
        Store.addNotification({
          title:"Add Area",
          message:"Area Added successfully",
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
          title:"Add Area",
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
  <span className="componet-title">Area Manage</span>
</div>

<form className="flex-row form-2col-ver" onSubmit={handleSubmit}>
<div className="componet-sub-title">
  <span>Area Details</span>
</div>


<div className='general-manage-div'>

 <label htmlFor="area">Area:</label>
<input name="area" type="text" value={inputs.area || ""} onChange={handleChange} required/>
<DataList path={'City'} handleChange={handleChange} name={'city'} heading={'City'}/>




<button className="submit-btn">Add New</button>

 </div>
 
</form>

<div className="componet-sub2-title">
<span>Total Area:</span>
</div>
<AreaTable key={areaList} table={areaList} path={path} parentFunction={loadArea}/>
</div>
  
  </React.Fragment>
  )
}

export default Areamanage