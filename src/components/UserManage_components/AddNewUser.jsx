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
  <label htmlFor="name">Name</label>
  <input name='name'/>
   </div>

   <div className='from_field'>
   <label htmlFor="ename">Employee Name</label>
   <input name='Ename'/>
   </div>

   <div className='from_field'>
   <label htmlFor="mname">Manufacture Name</label>
   <input name='mname'/>
   </div>

   <div className='from_field'>
   <label htmlFor="pdate">Purchase Date</label>
   <input name='pdate'/>
   </div>

   <div className='from_field'>
   <label htmlFor='pamount'>Purchase Amount</label>
   <input name='pamount'/>
   </div>

   <div className='from_field'>
   <label htmlFor='samount'>Service Amount</label>
   <input name='samount'/>
   </div>

   <div className='from_field'>
   <label htmlFor='sduration'>Service Duration To</label>
   <input name='sduration'/>
   </div>

   <div className='from_field'>
   <label className='from_field' htmlFor='sduration'>Service Email</label>
   <input htmlFor='sduration'/>
   </div>
  
   <div className='from_field'>
   <label htmlFor='textarea'>Service Details</label>
   <textarea/>
   </div>

   <div className='from_field'>
   <label htmlFor='checkbox'>Is Coin Machine</label>
   <input type="checkbox"/>
   </div>
   </div>
  
   <div className='left_div'>
  
   <div className='from_field'>
   <label htmlFor='mcode'>Machine Code</label>
   <input name='mcode'/>
   </div>

   <div className='from_field'>
   <label htmlFor='lname'>Location Name</label>
   <input name='lname'/>
   </div>

   <div className='from_field'>
   <label htmlFor='sno'>Serial No</label>
   <input name='sno'/>
   </div>

   <div className='from_field'>
   <label htmlFor='pfrom'>Purchase From</label>
   <input name='pfrom'/>
   </div>

   <div className='from_field'>
   <label htmlFor='stype'>Service Type</label>
   <input name='stype'/>
   </div>

   <div className='from_field'>
   <label htmlFor='sdform'>Service Duration From</label>
   <input name='sdfrom'/>
   </div>

   <div className='from_field'>
   <label htmlFor='sby'> Serviced By</label>
   <input name='sby'/>
   </div>

   <div className='from_field'>
   <label htmlFor='sby'>Service Mobile No</label>
   <input name='sby'/>
   </div>
   
   <div className='from_field'> 
   <label htmlFor="remark">Remark</label>
   <textarea/>
   </div>
  
   <div className='from_field'>
   <label htmlFor='wname'>Warehouse Name</label>
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
   <label htmlFor='username'>User Name</label>
   <input type="text" name='user_name' placeholder='Enter User name'   required/>
   </div>

   <div className='input_container'>
   <label htmlFor='email'>User Email</label>
   <input type="email" name='email' placeholder='Enter user email'   required/>
   </div>

   <div className='input_container'>
   <label htmlFor='password'>Password</label>
   <input type="password" name='password' placeholder='Enter password'   required/>
   </div>

   <div className='input_container'>
   <label htmlFor='cpassword'>Confirm Password</label>
   <input type="password" name='cpassword' placeholder='Confirm Password'   required/>
   </div>

   <input className='btnlogininfo' type="submit" value="submit"/>
   
   </form>
   
   
   </div>
   </React.Fragment>
  )
}

export default AddNewUser