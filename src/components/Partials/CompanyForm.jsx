import React, { useState } from "react";
import DataList from "../Partials/DataList";

function CompanyForm(props) {
console.log("🚀 ~ file: CompanyForm.jsx:5 ~ CompanyForm ~ props", props.input)


  return (
   <React.Fragment>
   <div className="add-user-container">
        <div className="headingdiv">
          <span className="componet-title">Add Company</span>
          <div>
            <button onClick={() => navigate(-1)}>Back</button>
          </div>
        </div>

        <form key={inputs} className="flex-row form-2col-ver" onSubmit={props.handleSubmit}>
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
                value={props.inputs.companyid || ""}
                onChange={props.handleChange}
              />
            </div>

            <div className="input-lable-h-div">
              <label htmlFor="companyname">Company Name </label>
              <input
                type="text"
                name="companyname"
                value={props.inputs.companyname || ""}
                onChange={props.handleChange}
              />
            </div>

            <div className="input-lable-h-div">
              <label htmlFor="address">Address </label>
              <input
                type="text"
                name="address"
                value={props.inputs.address || ""}
                onChange={props.handleChange}
              />
            </div>

            <div className="input-lable-h-div">
              <DataList
                value={props.inputs.area || ""}
                path={"Area"}
                handleChange={props.handleChange}
                name={"area"}
                option={"area"}
                heading={"Area"}
              />
            </div>

            <div className="input-lable-h-div">
              <label htmlFor="telephone">Telephone </label>
              <input
                type="text"
                name="telephone"
                value={props.inputs.telephone || ""}
                onChange={props.handleChange}
              />
            </div>

            <div className="input-lable-h-div">
              <label htmlFor="alt_telepone">Alternate Telephone </label>
              <input
                type="text"
                name="alt_telepone"
                value={props.inputs.alt_telepone || ""}
                onChange={props.handleChange}
              />
            </div>

            <div className="input-lable-h-div">
              <label htmlFor="email">Email </label>
              <input
                type="text"
                name="email"
                value={props.inputs.email || ""}
                onChange={props.handleChange}
              />
            </div>

            <div className="input-lable-h-div">
              <button className="submit-btn" type="submit">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
   
   </React.Fragment>
  );
}

export default CompanyForm