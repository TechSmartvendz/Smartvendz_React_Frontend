import React from 'react'

function AddNewRole() {


  
  return (
  <>
   <div  className="add-user-container">
   <div>
   <span className="componet-title">Add New Role</span>
 </div>

   <form className="flex-row form-2col-ver">
   <div className="componet-sub-title">
   <span>Role Details</span>
 </div>

 <div>
   <label htmlFor='role_name' >Role Name :</label>
   <input type="text" name="role_name" className='role_name_input'/>
   
   </div>

   <div >

 
   <div className="input-lable-checkbox-div">
  
   {/* <input type="checkbox" name="userm_input"/>*/ } 
   <label htmlFor='userm'>User Manage</label>
   </div>

   <section>
   <div className="input-lable-checkbox-div" >

   <div>
   <input type="checkbox" name="userm_input"/>
   <label htmlFor='userm'>Add New User</label>
   
   </div>

   <div>

   <input type="checkbox" name="userm_input"/>
   <label htmlFor='userm'>User List</label>
   
   </div>

   <div>
   <input type="checkbox" name="userm_input" />
   <label htmlFor='userm'>User Permission</label>
   
   </div>

   </div>
   </section>

   <div className="input-lable-checkbox-div">
  {/* <input type="checkbox" name="addnew_user" />*/}
   <label htmlFor='addnew_user'>Company Manage </label>
 
   </div>
 
   <section>
   <div className="input-lable-checkbox-div" >
   
   <div>
   <input type="checkbox" name="userm_input"/>

   <label htmlFor='userm'>Add New Company</label>
   </div>
   
   <div>
   <input type="checkbox" name="userm_input" />
   <label htmlFor='userm'>List Company</label>
   
   </div>
   
   </div>
   
   
   </section>
   <div className="input-lable-checkbox-div">
   {/*<input type="checkbox" name="list_user" />*/}
   <label htmlFor='list_user'>Machine Manage </label>
   
   </div>
  
   <section>
   <div className="input-lable-checkbox-div">

   <div>
   <input type="checkbox" name="userm_input" />
   <label htmlFor='userm'>Add New Machine</label>
   
   </div>

   <div>
   <input type="checkbox" name="userm_input"/>
   <label htmlFor='userm'>List Machine</label>
  
   </div>

   <div>
   <input type="checkbox" name="userm_input" />
   <label htmlFor='userm'>Machine Configuration </label>
   
   </div>

   </div>
   </section>

   

   <div className="input-lable-checkbox-div">
   {/*<input type="checkbox" name="user_permission"/>*/}
   <label htmlFor='user_permission'>Employee Manage</label>
   
   </div>
   <section>
   <div className="input-lable-checkbox-div">

   <div>
   <input type="checkbox" name="userm_input" />
   <label htmlFor='userm'>Add New Employee</label>
   
   </div>

   <div>
   <input type="checkbox" name="userm_input" />
   <label htmlFor='userm'>Update Employee</label>
   
   </div>
   </div>
   </section>

   <div className="input-lable-checkbox-div">
   {/*<input type="checkbox" name="user_permission" />*/}
   <label htmlFor='user_permission'>Transaction Report</label>
   
   </div>
   <section>
   <div className="input-lable-checkbox-div">

   <div  >
   <input type="checkbox" name="userm_input" />
   <label htmlFor='userm'>Transaction Report</label>
   
   </div>

   <div>
   <input type="checkbox" name="userm_input" />
   <label htmlFor='userm'>Credit Transaction Report</label>
   
   </div>

   <div>
   <input type="checkbox" name="userm_input" />
   <label htmlFor='userm'>Credit Report</label>
   
   </div>

   </div>
   </section>
   
   <button className="submit-btn" type='submit'>Save</button>
 </div>

 </form>
</div>   
   
</>
  )
}

export default AddNewRole