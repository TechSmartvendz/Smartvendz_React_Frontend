import React from 'react'

function AddNewRole() {
  return (
   <React.Fragment>
   <div className='addrole_container'>
   <form>
   <label htmlFor='role_name' className='rolename'>Role Name :</label>
   <input type="text" name="role_name" className='role_name_input'/>

   <div className='checkbox_container'>

 
   <div className='field_container'>
   <label htmlFor='userm'>User Manage</label>
   <input type="checkbox" name="userm_input" className='userm_input'/>
   </div>

   <section>
   <div className='subhead'>

   <div className='field_container'>
   <label htmlFor='userm'>Add New User</label>
   <input type="checkbox" name="userm_input" className='addnew_input'/>
   </div>

   <div className='field_container'>
   <label htmlFor='userm'>User List</label>
   <input type="checkbox" name="userm_input" className='list_input'/>
   </div>

   <div className='field_container'>
   <label htmlFor='userm'>User Permission</label>
   <input type="checkbox" name="userm_input" className='permis_input'/>
   </div>

   </div>
   </section>

   <div className='field_container'>
   <label htmlFor='addnew_user'>Company Manage </label>
   <input type="checkbox" name="addnew_user"  className='addnew_user'/>
   </div>
 
   <section>
   <div className='subhead'>
   
   <div className='field_container'>
   <label htmlFor='userm'>Add New Company</label>
   <input type="checkbox" name="userm_input" className='newc_input'/>
   </div>
   
   <div className='field_container'>
   <label htmlFor='userm'>List Company</label>
   <input type="checkbox" name="userm_input" className='listc_info'/>
   </div>
   
   </div>
   
   
   </section>
   <div className='field_container'>
   <label htmlFor='list_user'>Machine Manage </label>
   <input type="checkbox" name="list_user"  className='machine_manage'/>
   </div>
  
   <section>
   <div className='subhead'>

   <div className='field_container'>
   <label htmlFor='userm'>Add New Machine</label>
   <input type="checkbox" name="userm_input" className='addnew_input'/>
   </div>

   <div className='field_container'>
   <label htmlFor='userm'>List Machine</label>
   <input type="checkbox" name="userm_input" className='list_input'/>
   </div>

   <div className='field_container'>
   <label htmlFor='userm'>Machine Configuration </label>
   <input type="checkbox" name="userm_input" className='mconfigu'/>
   </div>

   </div>
   </section>

   

   <div className='field_container'>
   <label htmlFor='user_permission'>Employee Manage</label>
   <input type="checkbox" name="user_permission" className='employee-manage'/>
   </div>
   <section>
   <div className='subhead'>

   <div className='field_container'>
   <label htmlFor='userm'>Add New Employee</label>
   <input type="checkbox" name="userm_input" className='addnew_input'/>
   </div>

   <div className='field_container'>
   <label htmlFor='userm'>Update Employee</label>
   <input type="checkbox" name="userm_input" className='update_employee'/>
   </div>
   </div>
   </section>

   <div className='field_container'>
   <label htmlFor='user_permission'>Transaction Report</label>
   <input type="checkbox" name="user_permission" className='employee-manage'/>
   </div>
   <section>
   <div className='subhead'>

   <div className='field_container'>
   <label htmlFor='userm'>Transaction Report</label>
   <input type="checkbox" name="userm_input" className='trans_input'/>
   </div>

   <div className='field_container'>
   <label htmlFor='userm'>Credit Transaction Report</label>
   <input type="checkbox" name="userm_input" className='trans_report'/>
   </div>

   <div className='field_container'>
   <label htmlFor='userm'>Credit Report</label>
   <input type="checkbox" name="userm_input" className='credit_trans'/>
   </div>

   </div>
   </section>
   
   
 </div>
 <button type='submit' className='btn_save'>Save</button>
 </form>
</div>   
   
   </React.Fragment>
  )
}

export default AddNewRole