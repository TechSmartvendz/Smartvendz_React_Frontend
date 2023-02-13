import React,{useState} from 'react'

function AddNewRole() {

  const [inputs,setInputs]=useState({});

  function handleChange(event)
  {
 
  const name=event.target.name;
  const checked=event.target.checked;
 
  setInputs((values)=>({...values,[name]:checked}));
 
}

  function handleSubmit(event)
  {
    event.preventDefault();
   console.log(inputs);
  }
  
  return (
  <React.Fragment>
   <div  className="add-user-container">
   <div>
   <span className="componet-title">Add New Role</span>
 </div>

   <form className="flex-row form-2col-ver" onSubmit={handleSubmit}>
   <div className="componet-sub-title">
   <span>Role Details</span>
 </div>

 <div>
   <label htmlFor='role_name' >Role Name :</label>
   <input type="text" name="role_name"  onChange={handleChange}/>
   
   </div>

   <div >

 
   <div className="input-lable-checkbox-div">
  
   {/* <input type="checkbox" name="userm_input"/>*/ } 
   <label htmlFor='usermanage'>User Manage</label>
   <input  type="checkbox" name='user_manage' value="User Manage" onChange={handleChange}/>
   </div>

   <section>
   <div className="input-lable-checkbox-div" >

   <div>
   <input type="checkbox" name="addnew_user" value="Add New User"  onChange={handleChange}/>
   <label htmlFor='userm'>Add New User</label>
   
   </div>

   <div>

   <input type="checkbox" name="user_list" value="User List" onChange={handleChange}/>
   <label htmlFor='userm'>User List</label>
   
   </div>

   <div>
   <input type="checkbox" name="user_permission" value="User Permission" onChange={handleChange} />
   <label htmlFor='userm'>User Permission</label>
   
   </div>

   </div>
   </section>

   <div className="input-lable-checkbox-div">
  {/* <input type="checkbox" name="addnew_user" />*/}
   <label htmlFor='addnew_user'>Company Manage </label>
   <input type="checkbox" name='company_manage' value="Company Manage" onChange={handleChange}/>
 
   </div>
 
   <section>
   <div className="input-lable-checkbox-div" >
   
   <div>
   <input type="checkbox" name="addnew_company" value="Add New Company" onChange={handleChange}/>

   <label htmlFor='userm'>Add New Company</label>
   </div>
   
   <div>
   <input type="checkbox" name="list_company" value="List Company" onChange={handleChange} />
   <label htmlFor='userm'>List Company</label>
   
   </div>
   
   </div>
   
   
   </section>
   <div className="input-lable-checkbox-div">
   {/*<input type="checkbox" name="list_user" />*/}
   <label htmlFor='list_user'>Machine Manage </label>
   <input type="checkbox" name='machine_manage' value="Machine Manage" onChange={handleChange}/>
   
   </div>
  
   <section>
   <div className="input-lable-checkbox-div">

   <div>
   <input type="checkbox" name="addnew_machine" value="Add New Machine" onChange={handleChange}/>
   <label htmlFor='userm'>Add New Machine</label>
   
   </div>

   <div>
   <input type="checkbox" name="list_machine" value="List Machine" onChange={handleChange}/>
   <label htmlFor='userm'>List Machine</label>
  
   </div>

   <div>
   <input type="checkbox" name="machine_configuration" value="Machine Configuration" onChange={handleChange} />
   <label htmlFor='userm'>Machine Configuration </label>
   
   </div>

   </div>
   </section>

   

   <div className="input-lable-checkbox-div">
   {/*<input type="checkbox" name="user_permission"/>*/}
   <label htmlFor='user_permission'>Employee Manage</label>
   <input type="checkbox" name="employee_manage" value="Employee Manage" onChange={handleChange}/>
   
   </div>
   <section>
   <div className="input-lable-checkbox-div">

   <div>
   <input type="checkbox" name="addnew_employee" value="Add New Employee" onChange={handleChange}/>
   <label htmlFor='userm'>Add New Employee</label>
   
   </div>

   <div>
   <input type="checkbox" name="update_employee" value="Update Employee" onChange={handleChange}/>
   <label htmlFor='userm'>Update Employee</label>
   
   </div>
   </div>
   </section>

   <div className="input-lable-checkbox-div">
   {/*<input type="checkbox" name="user_permission" />*/}
   <label htmlFor='user_permission'>Transaction Report</label>
   <input type="checkbox" name='transaction_report' value="Transaction Report" onChange={handleChange}/>
   
   </div>
   <section>
   <div className="input-lable-checkbox-div">

   <div  >
   <input type="checkbox" name="transaction_reports"  value="Transaction Report " onChange={handleChange}/>
   <label htmlFor='userm'>Transaction Report</label>
   
   </div>

   <div>
   <input type="checkbox" name="credit_transction_report" value="Credit Transaction Report " onChange={handleChange}/>
   <label htmlFor='userm'>Credit Transaction Report</label>
   
   </div>

   <div>
   <input type="checkbox" name="credit_report"  value="Credit Report" onChange={handleChange}/>
   <label htmlFor='userm'>Credit Report</label>
   
   </div>

   </div>
   </section>
   
   <button className="submit-btn" type='submit'>Save</button>
 </div>

 </form>
</div>   
   
</React.Fragment>
  )
}

export default AddNewRole