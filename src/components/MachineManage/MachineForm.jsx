
import React,{useState} from 'react'
import {countrys} from '../OptionsJson';
import { states } from '../OptionsJson';
import { city } from '../OptionsJson';
import { areas } from '../OptionsJson';
import { products } from '../OptionsJson';
import { companys } from '../OptionsJson';
import { clients } from '../OptionsJson';
import { Admins } from '../OptionsJson';
import { Refiller } from '../OptionsJson';
import { Refillers } from '../OptionsJson';
import { warehouse } from '../OptionsJson';
import { Navigate, useNavigate } from 'react-router-dom';
function MachineForm() {
  const navigate=useNavigate();
const[inputs,setInputs]=useState({});

 

  const handleChange=(e)=>{
   const name=e.target.name;
   const value=e.target.value;
   setInputs(values=>({...values,[name]:value}))
   
  }
 const handleSubmit=(e)=>{
 e.preventDefault();

 console.log(inputs)
 
 }



  return (
   <React.Fragment>
   <div className="add-user-container">
        
         <div className='headingdiv'>
          <span className="componet-title">Add New Machine</span>
          <div>
          <button onClick={(()=>navigate(-1))}>Back</button>
         </div>
        </div>
       
        <form className="flex-row form-2col-ver" onSubmit={handleSubmit}>
          <div className="componet-sub-title">
            <span>Machine Details</span>
          </div>
          <div className="flex-col ">
            <div className="flex-row">
             
            <div className="input-lable-h-div">
                <label htmlFor="machineName">Machine Name</label>
                <input type="text" name="machineName" value={inputs.machineName || ""} onChange={handleChange} required/>
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="machineID">Machine ID</label>
                <input name="machineId" type="text" value={inputs.machineId || ""} onChange={handleChange} />
              </div>

             
              <div className="input-lable-h-div">
                <label htmlFor="address">Address</label>
                <input name="address" type="text"  value={inputs.address || ""} onChange={handleChange}  required/>
              </div>
              <div className="input-lable-h-div">
                <label htmlFor="building">Building</label>
                <input name="building" type="text"  value={inputs.building || ""} onChange={handleChange}  required/>
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="installLocation">Install Location</label>
                <input name="installLocation" type="text" value={inputs.installLocation || ""} onChange={handleChange}  required/>
              </div>
            </div>

            <div className="flex-row">
              <div className="input-lable-h-div">
                <label htmlFor="productType">Product Type</label>
                <input name="productType" list='productType'  type="search" value={inputs.productType || ""} onChange={handleChange}/>
                 <datalist id='productType'>
                 {
                  products.map((prod,k)=><option key={k}>{prod}</option>)
                 }
                 
                 
                 </datalist>
               
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="totalSlot">Total Slots</label>
                <input type="number" name="totalSlot"  value={inputs.totalSlot || ""} onChange={handleChange}  required/>
              </div>
              <div className="input-lable-h-div">
                <label htmlFor="companyId">Company</label>
                <input name="companyId" list="companyId" type="search" value={inputs.companyId || ""} onChange={handleChange}/>
                  <datalist id='companyId'>
                  {
                    companys.map((comp,k)=><option key={k}>{comp}</option>)
                  }
                  
                  
                  </datalist>
             </div>

              <div className="input-lable-h-div">
                <label htmlFor="clientUserId">Client User</label>
                <input name="clientUserId" list='clientUserId' type="search" value={inputs.clientUserId || ""} onChange={handleChange}/>
                  <datalist>
                  {
                    clients.map((clie,k)=><option key={k}>{clie}</option>)
                  }
                  
                  </datalist>
               
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="AdminId">Admin</label>
                <input name="AdminId" list='AdminId' type="search" value={inputs.AdminId || ""} onChange={handleChange}/>
                  <datalist id='AdminId'>
                  {
                    Admins.map((adm,k)=><option key={k}>{adm}</option>)
                  }
                  
                  </datalist>
              </div>
              <div className="input-lable-h-div">
                <label htmlFor="refiller">Refiller</label>
                <input name="refiller" list="refiller" type="search" value={inputs.refiller || ""} onChange={handleChange}/>
                  <datalist id='refiller'>
                 {
                  Refiller.map((refil,k)=><option key={k}>{refil}</option>)
                 }
                  </datalist>
                
              </div>

             

              <div className="input-lable-h-div">
                <label htmlFor="warehouse">Warehouse</label>
                <input name="warehouse" list='warehouse' type="search" value={inputs.warehouse || ""} onChange={handleChange}/>
                 <datalist id='warehouse'>
                 {
                    warehouse.map((ware,k)=><option key={k}>{ware}</option>)
                 }
                 </datalist>



                
              </div>
              <div className="input-lable-h-div">
                <label htmlFor="remark">Remark</label>
                <textarea  name="remark" value={inputs.remark || ""}  onChange={handleChange}  required/>
              </div>
            </div>
          </div>
          <div>

          <div className="flex-col">
            <div className="input-lable-v-div">
              <button className="submit-btn" type="submit" >Save</button>
            </div>
          </div>
        </div> 
        </form>
      </div>
   
   
   
   </React.Fragment>
  )
}

export default MachineForm