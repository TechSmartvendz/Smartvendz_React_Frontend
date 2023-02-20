import React, { useState } from "react";
// import MachineContext from "../../Context/MachineContext";
import MachineForm from "../MachineManage/MachineForm";

function CompanyAdmins() {

const macheneinfo=[
  {company:"Juniper",role:'SuperAdmin',user:'Sharan'},
 {company:"Juniper",role:'SuperAdmin',user:'Sharan'},
{company:"Juniper",role:'SuperAdmin',user:'Sharan'}
]

  const path = "Company";
  const [inputs, setInputs] = useState({});
 

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(inputs);
    const response = await postReq(path, inputs);
    if (response.status === "success") {
      setInputs({});
      SuccessAlert({
        title: "Add Company",
        message: "Company Added successfully",
      });
    } else {
      ErrorAlert({ title: "Add Company", message: response.error });
    }
  };

  return (
    <React.Fragment>
      <div className="add-user-container">
        <div className="headingdiv">
          <span className="componet-title">ADD COMPANY ADMIN</span>
          <div>
            <button onClick={() => navigate(-1)}>Back</button>
          </div>
        </div>

        <form className="flex-row form-2col-ver" onSubmit={handleSubmit}>
          <div className="componet-sub-title">
            <span>Company Details</span>
          </div>

            <div className="flex-row">
              
            <div className="input-lable-h-div">
                <label htmlFor="companyid"> Company ID</label>
                <input
                  type="text"
                  name="companyid"
                  className="slot"
                  value={inputs.companyid || ""}
                  onChange={handleChange}
                />
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="companyname">Company Name </label>
                <input
                  type="text"
                  name="companyname"
                  value={inputs.companyname || ""}
                  onChange={handleChange}
                />
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="address">Address </label>
                <input
                  type="text"
                  name="address"
                  value={inputs.address || ""}
                  onChange={handleChange}
                />
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="area">Area </label>
                <input
                  type="text"
                  name="area"
                  value={inputs.area || ""}
                  onChange={handleChange}
                />
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="telephone">Telephone </label>
                <input
                  type="text"
                  name="telephone"
                  value={inputs.telephone || ""}
                  onChange={handleChange}
                />
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="altTelepone">Alternate Telephone </label>
                <input
                  type="text"
                  name="altTelepone"
                  value={inputs.altTelepone || ""}
                  onChange={handleChange}
                />
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="email">Email </label>
                <input
                  type="text"
                  name="email"
                  value={inputs.email || ""}
                  onChange={handleChange}
                />
              </div>

              <div className="input-lable-h-div">
              <button className="submit-btn" type="submit" >Save</button>
             </div>
           

           </div>
      

        </form>
      </div>
    
      {/* second form */}
      <div className="add-user-container">
    
      <div className="componet-sub-title">
      <span>Add Comapny</span>
      </div>

      <form className="flex-col">

      <div className="input-lable-v-div">
      <label htmlFor='companyname'> Comapny Name</label>
      <input type="text" name='companyname' className='slot'   value={inputs.companyname || ""} onChange={handleChange}/>
 
     </div>

     <div className="input-lable-v-div">
     <label htmlFor='usertype'>User Type</label>
     <input type="text" list="usertype" name='usertype'   value={inputs.slotname || ""} onChange={handleChange}/>
    <datalist id="usertype" >
    <option>SuperAdmin</option>
    <option>Admin</option>
     <option>Refiller</option>
    </datalist>
    </div>

    <div className="input-lable-v-div">
    <label htmlFor='user'>User</label>
    <input type="text" list="user" name='usertype'   value={inputs.user || ""} onChange={handleChange}/>
   <datalist id="user" >
   <option>SuperAdmin</option>
   <option>Admin</option>
    <option>Refiller</option>
   </datalist>
   </div>

   
   <div className="input-lable-v-div">
   <label htmlFor='checks'>Confirm</label>
   <input type="checkbox" name='checks'    value={inputs.checks || ""} onChange={handleChange}/>
   </div>
      
   <div className="input-lable-h-div">
   <button className="submit-btn" type="submit" >Save</button>
  </div>


      </form>
      </div>

      <div className="table_container-div">
      <table>
        <tbody>
          <tr>
          <th>Sl No</th>
            <th>Comapny</th>
            <th>Role</th>
            <th>User</th>
            <th>Action</th>
           
          </tr>
  
          {
           
          macheneinfo.map((item, i) => {
              return (
                <tr key={i}>
                <td>{i+1}</td>
                  <td>{item.company}</td>
                  <td>{item.role}</td>
                  <td>{item.user}</td>
                  <td>
                   <button>Edit</button>
                    <button>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>

      
    </React.Fragment>
  );
}

export default CompanyAdmins;
