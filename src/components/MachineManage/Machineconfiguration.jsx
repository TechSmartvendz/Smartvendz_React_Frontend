import React from 'react'
import './Machine_manage.css';
function Machineconfiguration() {
 
  return (
    <React.Fragment>
    <div className='mccontainer'>
    
    <form className='forms'>
    
    <div className='type_container'>
    
    <div className='field_container'>
     <label htmlFor='machinetype' className=''>Select Machine type</label>
     
     <select className='type'>
     <option>GVC DEVICE</option>
     <option>RASPBARRY PI</option>
     
     </select>
     </div> 

     <div className='field_container'>
     <label htmlFor='vendtype' >Select Vend type</label>
     <select className='type'>
     <option>NORMAL VEND</option>
     <option>CREDIT VEND</option>
     
     </select>
     </div> 

     </div>

     
    
     <label className='access'>Access Type:</label>
    
     <div className='conatiner_check'>
     <div className='checkbox'>
    <input type="checkbox"  name='rfid' />
     <label htmlFor='rfid'>RFID(HID)</label>
     </div>
     
     <div className='checkbox'>
     <input type="checkbox" name='qrupi'/>
     <label htmlFor='qrupi'>QR UPI</label>
     </div>
    
      <div className='checkbox'>
     <input type="checkbox" name='mobilea' />
     <label htmlFor='mobileapp'>MOBILE APPLICATION</label>
     </div>
    
     <div className='checkbox'>
     <input type="checkbox" name='microrfid'/>
     <label htmlFor='myrfid'>RFID(MFARE RFID)</label>
     </div>

     </div>
     

     
 
     <div className='conatiner_check'>
     <label htmlFor='rfidcard' className=''>RFID CARD</label>
     <select className='rfidcard'>
     <option>HID 26</option>
     <option>HID 34</option>
     </select>
    
     </div>
       
       <div className='urlcontainer' >
       <label htmlFor='apiurl' className='labelapi'>API URL:</label>
      <input name='URL' className='api' type="text"/>
       </div>


       <button type='submit' className='btnsb'>Submit</button>
       </form>
    </div>
    
    </React.Fragment>
  )
}

export default Machineconfiguration
