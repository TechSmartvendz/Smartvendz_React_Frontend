import React, { useState } from "react";
import DataList from "../Partials/DataList";


function Addnewcompany() {

  const [inputs, setInputs] = useState({});
  const [option, setOption] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    setOption((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(inputs);
    console.log(option);
  };
  return (
    <React.Fragment>
      <div className="add-user-container">
        <div>
          <span className="componet-title">Add New Company</span>
        </div>

        <form onSubmit={handleSubmit} className="flex-row form-2col-ver">
          <div className="componet-sub-title">
            <span>Company Details</span>
          </div>

          <div className="flex-col ">
            <div className="flex-row">
              <div className="input-lable-h-div">
                <label htmlFor="cname" className="adminlabel">
                  Company Name:
                </label>
                <input
                  type="text"
                  name="cname"
                  className="company_input"
                  value={inputs.cname || ""}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="cname" className="adminlabel">
                  Company ID:
                </label>
                <input
                  type="text"
                  name="cid"
                  className="company_input"
                  value={inputs.cid || ""}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="Caddress" className="adminlabel">
                  Company Address:
                </label>
                <input
                  type="text"
                  name="cadd"
                  className="company_input"
                  value={inputs.cadd || ""}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="Clocation" className="adminlabel">
                  Company Location:
                </label>
                <input
                  type="text"
                  name="clocation"
                  className="company_input"
                  value={inputs.clocation || ""}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="Cbno" className="adminlabel">
                  Company Building No:
                </label>
                <input
                  type="text"
                  name="cbuildingno"
                  className="company_input"
                  value={inputs.cbuildingno || ""}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-lable-h-div">
                <DataList
                  value={inputs.country || ""}
                  path={"Country"}
                  handleChange={handleChange}
                  name={"country"}
                  heading={"Company Person"}
                />
              </div>
            </div>

            <div className="flex-row">
              {/* <div className="general-manage-div"> */}

              <div className="input-lable-h-div">
                <DataList
                  value={inputs.city || ""}
                  path={"City"}
                  handleChange={handleChange}
                  name={"city"}
                  heading={"Contact Person"}
                />
              </div>

              <div className="input-lable-h-div">
                <DataList
                  value={inputs.country || ""}
                  path={"Country"}
                  handleChange={handleChange}
                  name={"country"}
                  heading={"Country"}
                />
              </div>

              <div className="input-lable-h-div">
                <DataList
                  value={inputs.state || ""}
                  path={"State"}
                  handleChange={handleChange}
                  name={"state"}
                  heading={"State"}
                />
              </div>

              <div className="input-lable-h-div">
                <DataList
                  value={inputs.city || ""}
                  path={"City"}
                  handleChange={handleChange}
                  name={"city"}
                  heading={"City"}
                />
              </div>

              <div className="input-lable-h-div">
                <DataList
                  value={inputs.admin || ""}
                  path={"Admin"}
                  handleChange={handleChange}
                  name={"admin"}
                  heading={"Admin"}
                />
              </div>

              <div className="form-submit-button">
                <button type="submit">Save Company</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Addnewcompany;
