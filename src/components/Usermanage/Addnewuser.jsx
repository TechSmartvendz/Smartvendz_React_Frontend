import React, { useState,useEffect } from "react";
import { ErrorAlert, SuccessAlert } from "../middleware/AlertMsg";

import { postReq,patchReq,getReq } from "../middleware/AxiosApisCall";
import { useParams } from "react-router";
// import DataList from "../Partials/DataList";
function Addnewuser() {
  const {id}=useParams();
  const [itemid, setItemid] = useState(id);
  const path = "User";
  const [inputs, setInputs] = useState({});
  const[par, setPar] = useState()

  const loadDate = async () => {
    const response = await getReq(`${path}/${itemid}`);
    if(response.data.length){
      console.log(response.data)
      setPar(response.data._id);
      setInputs(response.data);
    }else{
      console.log(response.data)
      setPar();
      setInputs();
    } 
  };
  
useEffect(() => {
  if(itemid){
    loadDate()
  }
  
}, [itemid])
useEffect(() => {
  console.log(inputs[first_name])
}, [inputs])

// const editdirect=props.redirect();
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(inputs);
    const response = await postReq(path, inputs);
    if (response.success) {
      setInputs({});
      SuccessAlert({ title: "Add User", message: "User Added successfully" });
    } else {
      ErrorAlert({ title: "Add User", message: response.msg });
    }
  };

 

  return (
    <React.Fragment>
      <div className="add-user-container">
        <div>
          <span className="componet-title">Add New User</span>
        </div>

        <form className="flex-row form-2col-ver" onSubmit={handleSubmit}>
          <div className="componet-sub-title">
            <span>User Details</span>
          </div>

          <div className="flex-col ">
            <div className="flex-row">
              <div className="input-lable-h-div">
                <label htmlFor="first_name"> First Name</label>
                <input
                  name="first_name"
                  type="text"
                  value={inputs.first_name || ""}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="middle_name">Middle Name</label>

                <input
                  name="middle_name"
                  type="text"
                  value={inputs.middle_name || ""}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="last_name">Last Name</label>
                <input
                  type="text"
                  name="last_name"
                  value={inputs.last_name || ""}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="mobile">Mobile</label>
                <input
                  name="mobile"
                  type="text"
                  value={inputs.mobile || ""}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="alter_mobile">Alternate Mobile</label>
                <input
                  name="alter_mobile"
                  type="text"
                  value={inputs.alter_mobile || ""}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-lable-h-div">
                <label htmlFor="email">User Email</label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter user email"
                  value={inputs.email || ""}
                  onChange={handleChange}
                autoComplete="off"
                  required
                />
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="current_address">Current Addresss</label>
                <input
                  name="current_address"
                  type="text"
                  value={inputs.current_address || ""}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="per_address">Permanent Address</label>
                <input
                  name="per_address"
                  type="text"
                  value={inputs.per_address || ""}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="flex-row">
              <div className="input-lable-h-div">
                <label htmlFor="role">Role</label>
                <input
                  name="role"
                  type="text"
                  value={inputs.role || ""}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="pdate">Display Name</label>
                <input
                  name="display_name"
                  type="text"
                  value={inputs.display_name || ""}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="city">City</label>
                <input
                  list="city"
                  name="country"
                  onChange={handleChange}
                  required
                />
                <datalist id="city">
                  <option>Bengaluru</option>
                  <option>Pune</option>
                </datalist>
                {/*<DataList/>*/}
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="state" required>
                  State
                </label>
                <input list="state" onChange={handleChange} required />
                <datalist id="state">
                  <option>Karnataka</option>
                  <option>Andrapradesh</option>
                </datalist>
                {/*<DataList/>*/}
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="country">Country</label>
                <input list="country" onChange={handleChange} />
                <datalist id="country">
                  <option>India</option>
                  <option>America</option>
                </datalist>
                {/*<DataList/>*/}
              </div>
            </div>
          </div>
          {/* Log in info start from here*/}

          <div className="componet-sub-title">
            <span>Login Info</span>
          </div>
          <div>
            <div className="flex-col">
              <div className="input-lable-v-div">
                <label htmlFor="user_id">User Id</label>
                <input
                  name="user_id"
                  type="text"
                  value={inputs.user_id || ""}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-lable-v-div">
                <label htmlFor="password">Password</label>

                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={inputs.password || ""}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-lable-v-div">
                <label htmlFor="cpassword">Confirm Password</label>
                <input
                  type="password"
                  name="cpassword"
                  placeholder="Confirm Password"
                  value={inputs.cpassword || ""}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-lable-v-div">
                <button type="submit" className="submit-btn">
                  Save
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Addnewuser;
