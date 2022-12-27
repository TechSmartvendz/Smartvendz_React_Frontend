import React from 'react'

function SupperAdmin() {
  return (
   
   <React.Fragment>
   <div className='empty'></div>
   
   <div className='formcontain'>
   <div className='span_div'>
  <span >Add New User</span>
   </div>
   
   
   <form className="form_div">
  
   <div className='input_field'>
   <label>Company Name</label>
   <input type="text" name="C_name" placeholder='Enter Company name' required />
   </div>
   
   <div className='input_field'>
   <label>Company ID</label>
   <input type="text" name="C_id" placeholder='Enter Company ID' required />
   </div>

   <div className='input_field'>
   <label>Company Address</label>
   <input type="text" name='C_address'  placeholder='Enter Company Address' required />
   </div>

   <div className='input_field'>
   <label>Company Location</label>
   <input type="text" name='C_lacation'  placeholder='Enter Company Location' required />
   </div>

   <div className='input_field'>
   <label>Company Building NO</label>
   <input type="text" name='C_address'  placeholder='Enter Company Address' required />
   </div>

   <div className='input_field'>
   <label>Contact Person Name</label>
   <input type="text" name='C_person_name'  placeholder='Enter Contact Person Name' required/>
   </div>

   <div className='input_field'>
   <label>Contact Person Email</label>
   <input type="text" name='C_person_email'  placeholder='Enter Contact Person Email' required/>
   </div>

   <div className='input_field'>
   <label>Contact Person Phone NO</label>
   <input type="text" name='C_person_phoneno'  placeholder='Enter Contact Person Phone no' required/>
   </div>

   <div className='input_field'>
   <label>Password</label>
   <input type="password" name='password'  placeholder='Enter Password' required/>
   </div>

   <div className='input_field'>
   <label>Confirm Password</label>
   <input type="password" name='c_password'  placeholder='Confirm Password' required/>
   </div>

   <div className='input_field'>
   <label>Role</label>
   <select>
   <option>Admin</option>
   <option>Super Admin</option>
   <option>Employee</option>
    </select>
    </div>

    <div >
    <button type="submit" className='button_btn'>Add User</button>
    </div>

   </form>
   
   
   
 
   
   
   </div>
   
   
   
   </React.Fragment>
   
   
   
  )
}

export default SupperAdmin