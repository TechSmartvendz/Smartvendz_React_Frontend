import React from 'react'

function Machineconfiguration() {
 
  return (
    <React.Fragment>
    <div className='mccontainer'>
    
    <form className='forms'>
    <div className='field_container'>
     <label htmlFor='machinetype'>Select Machine type</label>
     <select>
     <option>GVC DEVICE</option>
     <option>RASPBARRY PI</option>
     
     </select>
     </div> 

     <div className='field_container'>
     <label htmlFor='vendtype'>Select Vend type</label>
     <select>
     <option>NORMAL VEND</option>
     <option>CREDIT VEND</option>
     
     </select>
     </div> 

     
     <h4>Access Type:</h4>
     
     <div className='fields'>
     
     <input type="checkbox"  name='rfid' />
     <label htmlFor='rfid'>RFID(HID)</label>
     </div>

     <div className='fields'>
     
     <input type="checkbox" name='qrupi'/>
     <label htmlFor='qrupi'>QR UPI</label>
     </div>

     <div className='fields'>
     <input type="checkbox" name='mobilea' />
     <label htmlFor='mobileapp'>MOBILE APPLICATION</label>
     </div>

     <div className='fields'>
     <input type="checkbox" name='microrfid'/>
     <label htmlFor='myrfid'>RFID(MFARE RFID)</label>
     </div>
     

     <div className='fields'>

     <label htmlFor='rfidcard'>RFID CARD</label>
     <select className='rfidcard'>
     <option>HID 26</option>
     <option>HID 34</option>
     </select>
    
     </div>
       
       <div>
       <label htmlFor='apiurl'>API URL:</label>
      <input name='URL' className='' type="text"/>
       </div>
       </form>
    </div>
    </React.Fragment>
  )
}

export default Machineconfiguration
