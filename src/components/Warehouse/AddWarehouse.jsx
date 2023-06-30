import React, { useState, useEffect } from "react";
import { ErrorAlert, SuccessAlert } from "../middleware/AlertMsg";
import { postReq } from "../middleware/AxiosApisCall";
import { useParams, useNavigate } from "react-router";
import DataList from "../Partials/DataList";

function AddWarehouse() {
  const [inputs, setInputs] = useState({});
   const path="addWareHouse"
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  console.log("Inputs:", inputs);

  const handleSubmit = async(e) => {
    e.preventDefault();
    const response = await postReq(path, inputs);
    if (response.success) {
    //   setTableRefresh(tableRefresh + 1);
      setInputs({});
      SuccessAlert({ title: "Add User", message: "User Added successfully" });
    } else {
      ErrorAlert({ title: "Add User", message: response.msg });
    }
    console.log("Submitted:", inputs);
  };

  return (
    <React.Fragment>
      <div className="add-user-container">
        <div className="headingdiv">
          <span className="componet-title">Add Ware House</span>

          <div>
            <button>Back</button>
          </div>
        </div>

        <form className="flex-row form-2col-ver" onSubmit={handleSubmit}>
          <div className="componet-sub2-title">
            <span>Warehouse Details</span>
          </div>

          <div className="flex-col ">
            <div className="flex-row">
              <div className="input-lable-h-div">
                <label>Ware House Name</label>
                <input
                  type="text"
                  name="wareHouseName"
                  value={inputs.wareHouseName}
                  onChange={handleChange}
                />
              </div>
              <div className="input-lable-h-div">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={inputs.email}
                  onChange={handleChange}
                />
              </div>
              <div className="input-lable-h-div">
                <label>Phone No</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={inputs.phoneNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="input-lable-h-div">
                <label>Contact Person</label>
                <input
                  type="text"
                  name="contactPerson"
                  value={inputs.contactPerson}
                  onChange={handleChange}
                />
              </div>
              <div className="input-lable-h-div">
                {/* <label>Country</label>
                <input type="text" name="country" value={inputs.country} onChange={handleChange}/> */}
                <DataList
                 name="country"
                  value={inputs.country || null}
                  path="Country"
                  option="country"
                  
                  heading="Country"
                />
              </div>
            </div>

            <div className="flex-row">
              <div className="input-lable-h-div">
              <DataList
                 name="state"
                  value={inputs.state || null}
                  path="State"
                  option="state"
                  
                  heading="State"
                />
              </div>
              <div className="input-lable-h-div">
              <DataList
                 name="city"
                  value={inputs.city || null}
                  path="City"
                  option="city"
                  
                  heading="City"
                />
              </div>
              <div className="input-lable-h-div">
              <DataList
                  name="area"
                  value={inputs.area || null}
                  path="Area"
                  option="area"
                  heading="Area"
                />
              </div>
              <div className="input-lable-h-div">
                <label>Address</label>
                <input
                  type="text"
                  name="address"
                  value={inputs.address}
                  onChange={handleChange}
                />
              </div>
              <div className="input-lable-h-div">
                <label>Pin Code</label>
                <input
                  type="text"
                  name="pincode"
                  value={inputs.pin_code}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="input-lable-v-div">
            <button type="submit" className="submit-btn">
              <span>Create</span>
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default AddWarehouse;
