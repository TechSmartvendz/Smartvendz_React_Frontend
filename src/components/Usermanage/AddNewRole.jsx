import React from 'react'

function AddNewRole() {
  return (
  <>
   <div >
   <form>
   <label htmlFor='role_name' >Role Name :</label>
   <input type="text" name="role_name" className='role_name_input'/>

   <div>

 
   <div >
   <label htmlFor='userm'>User Manage</label>
   <input type="checkbox" name="userm_input"/>
   </div>

   <section>
   <div>

   <div>
   <label htmlFor='userm'>Add New User</label>
   <input type="checkbox" name="userm_input"/>
   </div>

   <div>
   <label htmlFor='userm'>User List</label>
   <input type="checkbox" name="userm_input"/>
   </div>

   <div>
   <label htmlFor='userm'>User Permission</label>
   <input type="checkbox" name="userm_input" />
   </div>

   </div>
   </section>

   <div>
   <label htmlFor='addnew_user'>Company Manage </label>
   <input type="checkbox" name="addnew_user" />
   </div>
 
   <section>
   <div >
   
   <div>
   <label htmlFor='userm'>Add New Company</label>
   <input type="checkbox" name="userm_input"/>
   </div>
   
   <div>
   <label htmlFor='userm'>List Company</label>
   <input type="checkbox" name="userm_input" />
   </div>
   
   </div>
   
   
   </section>
   <div>
   <label htmlFor='list_user'>Machine Manage </label>
   <input type="checkbox" name="list_user" />
   </div>
  
   <section>
   <div>

   <div>
   <label htmlFor='userm'>Add New Machine</label>
   <input type="checkbox" name="userm_input" />
   </div>

   <div>
   <label htmlFor='userm'>List Machine</label>
   <input type="checkbox" name="userm_input"/>
   </div>

   <div>
   <label htmlFor='userm'>Machine Configuration </label>
   <input type="checkbox" name="userm_input" />
   </div>

   </div>
   </section>

   

   <div>
   <label htmlFor='user_permission'>Employee Manage</label>
   <input type="checkbox" name="user_permission"/>
   </div>
   <section>
   <div>

   <div>
   <label htmlFor='userm'>Add New Employee</label>
   <input type="checkbox" name="userm_input" />
   </div>

   <div>
   <label htmlFor='userm'>Update Employee</label>
   <input type="checkbox" name="userm_input" />
   </div>
   </div>
   </section>

   <div>
   <label htmlFor='user_permission'>Transaction Report</label>
   <input type="checkbox" name="user_permission" />
   </div>
   <section>
   <div>

   <div >
   <label htmlFor='userm'>Transaction Report</label>
   <input type="checkbox" name="userm_input" />
   </div>

   <div>
   <label htmlFor='userm'>Credit Transaction Report</label>
   <input type="checkbox" name="userm_input" />
   </div>

   <div>
   <label htmlFor='userm'>Credit Report</label>
   <input type="checkbox" name="userm_input" />
   </div>

   </div>
   </section>
   
   
 </div>
 <button type='submit'>Save</button>
 </form>
</div>   
   
</>
  )
}

export default AddNewRole