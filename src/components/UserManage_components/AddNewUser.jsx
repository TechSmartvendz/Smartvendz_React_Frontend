import React from 'react'

// import './UserManage_components/UserManaging.css'
function AddNewUser() {
  return (
   <React.Fragment>
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
{/* Log in info start from here*/}
  <div className='container_div'>
  <div ><span className='span'>Login Info</span></div>
   <form className='form_fields'>
   
   
   <div className='input_container'>
   <label>User Name</label>
   <input type="text" name='user_name' placeholder='Enter User name'   required/>
   </div>

   <div className='input_container'>
   <label>User Email</label>
   <input type="email" name='email' placeholder='Enter user email'   required/>
   </div>

   <div className='input_container'>
   <label>Password</label>
   <input type="password" name='password' placeholder='Enter password'   required/>
   </div>

   <div className='input_container'>
   <label>Confirm Password</label>
   <input type="password" name='cpassword' placeholder='Confirm Password'   required/>
   </div>

   <input className='btnlogininfo' type="submit" value="submit"/>
   
   </form>
   
   
   </div>
   </React.Fragment>
  )
}

export default AddNewUser