import React from 'react'

function Machine_details() {
  return (
    <React.Fragment>
    <div className="mm_container">
  
    <div><span className='main_head'>Machine Details</span></div>
    
    <div className='btn_container'>
    <button  className='mmAddnew_btn'>Save</button>
    <button  className='mmAddnew_btn'>Add New</button>
    <button className='mmClose_btn'>Close</button>
    </div>
    </div>
    
    <div className='container_div'>
    <div><span className='heading'>Machine Information</span></div>
   

    <form className='form_datas'>
    
   <div className='left_div'>
   
   <div className='from_field'>
  <label>Name</label>
  <input name='name'/>
   </div>

   <div className='from_field'>
   <label>Employee Name</label>
   <input name='Ename'/>
   </div>

   <div className='from_field'>
   <label>Manufacture Name</label>
   <input name='mname'/>
   </div>

   <div className='from_field'>
   <label>Purchase Date</label>
   <input name='pdate'/>
   </div>

   <div className='from_field'>
   <label>Purchase Amount</label>
   <input name='pamount'/>
   </div>

   <div className='from_field'>
   <label>Service Amount</label>
   <input name='samount'/>
   </div>

   <div className='from_field'>
   <label>Service Duration To</label>
   <input name='sduration'/>
   </div>

   <div className='from_field'>
   <label className='from_field'>Service Email</label>
   <input name='sduration'/>
   </div>
  
   <div className='from_field'>
   <label>Service Details</label>
   <textarea/>
   </div>

   <div className='from_field'>
   <label>Is Coin Machine</label>
   <input type="checkbox"/>
   </div>
   </div>
  
   <div className='left_div'>
  
   <div className='from_field'>
   <label>Machine Code</label>
   <input name='mcode'/>
   </div>

   <div className='from_field'>
   <label>Location Name</label>
   <input name='lname'/>
   </div>

   <div className='from_field'>
   <label>Serial No</label>
   <input name='sno'/>
   </div>

   <div className='from_field'>
   <label>Purchase From</label>
   <input name='pfrom'/>
   </div>

   <div className='from_field'>
   <label>Service Type</label>
   <input name='stype'/>
   </div>

   <div className='from_field'>
   <label>Service Duration From</label>
   <input name='sdfrom'/>
   </div>

   <div className='from_field'>
   <label>Serviced By</label>
   <input name='sby'/>
   </div>

   <div className='from_field'>
   <label>Service Mobile No</label>
   <input name='sby'/>
   </div>
   
   <div className='from_field'> 
   <label for="remark">Remark</label>
   <textarea/>
   </div>
  
   <div className='from_field'>
   <label>Warehouse Name</label>
   <input name="wname"/>
   </div>

   </div>
   
<div className='btnsubmit'><button >Submit</button></div>
  
   </form>
   
   </div>
 
   {/*AddMachine slots start from here */}
   <div className='ams_container'>
   <div>
   <button className='mmAddnew_btn'>Add Machine Slots</button>
   </div>
 
   <div className='table_container'>
  <table>
  <tr>
  <th>SL NO</th>
  <th>Slot Name</th>
  <th>Material Name</th>
  <th>Current Stock</th>
  <th>Initial Stock</th>
  <th>Not In Use</th>
  <th>Del</th>
  </tr>
  
  <tr>
  <td>1</td>
  <td><input type="text"/></td>
  
  <td>
  <select>
  <option>Lays Chips 20gm</option>
  </select>
  </td>
  
  <td><input type="text"/></td>
  <td><input type="text"/></td>
  <td><input type="checkbox"/></td>
  
   </tr>

   <tr>
   <td>2</td>
   <td><input type="text"/></td>
   
   <td>
   <select>
   <option>Lays Chips 20gm</option>
   </select>
   </td>
   
   <td><input type="text"/></td>
   <td><input type="text"/></td>
   <td><input type="checkbox"/></td>
   
    </tr>

    <tr>
    <td>3</td>
    <td><input type="text"/></td>
    
    <td>
    <select>
    <option>Lays Chips 20gm</option>
    </select>
    </td>
    
    <td><input type="text"/></td>
    <td><input type="text"/></td>
    <td><input type="checkbox"/></td>
    </tr>

     <tr>
     <td>4</td>
     <td><input type="text"/></td>
     
     <td>
     <select>
     <option>Lays Chips 20gm</option>
     </select>
     </td>
     
     <td><input type="text"/></td>
     <td><input type="text"/></td>
     <td><input type="checkbox"/></td>
      </tr>

      <tr>
     <td>5</td>
     <td><input type="text"/></td>
     
     <td>
     <select>
     <option>Lays Chips 20gm</option>
     </select>
     </td>
     
     <td><input type="text"/></td>
     <td><input type="text"/></td>
     <td><input type="checkbox"/></td>
      </tr>

      <tr>
     <td>6</td>
     <td><input type="text"/></td>
     
     <td>
     <select>
     <option>Lays Chips 20gm</option>
     </select>
     </td>
     
     <td><input type="text"/></td>
     <td><input type="text"/></td>
     <td><input type="checkbox"/></td>
      </tr>
 
   </table>
  </div>

   </div>
 
    
    
    </React.Fragment>
  )
}

export default Machine_details