import React, { useState } from "react";
import TableData4 from "../Partials/TableData4";
import DataList from "../Partials/DataList";
function Refiller_Refilling_Request() {
  const [inputs, setInputs] = useState([{}]);

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(inputs);

  }
  return (
    <React.Fragment>
      <div className="add-user-container">
        {/* <div className="headingdiv">
          <span className="componet-title"> Refill Details</span>
          <div>
            <button onC
            lick={() => navigate(-1)}>Back</button>
          </div>
        </div> */}
        {/* <div className="option-btn">
          <button onClick={handleSubmit}>Save as draft </button>
          <button
            onClick={() => {
              navigate("/usermanage/addnewuser");
            }}
          >
            Add New{" "}
          </button>
          <button
            onClick={() => {
              navigate("/usermanage/addnewuser");
            }}
          >
            Generate Refill Request{" "}
          </button>
        </div> */}

        {/* <div className="componet-sub-title">
          <span>Machine Information</span>
        </div> */}

        {/* <form className="flex-row form-2col-ver">
          <div className="flex-row">
            <div className="input-lable-h-div">
              <label htmlFor="machinename"> Machine Name</label>

              <input
                type="text"
                name="machinename"
                value={inputs.machinename || ""}
                onChange={handleChange}
              />

            </div>

            <div className="input-lable-h-div">
              <DataList
                value={inputs.companyid || ""}
                path={"Company"}
                handleChange={handleChange}
                name={"companyid"}
                option={"companyid"}
                heading={"Machine Code"}
              />
            </div>

            <div className="input-lable-h-div">
              <label htmlFor="date">Date</label>
              <input
                type="text"
                name="date"
                value={inputs.date || ""}
                onChange={handleChange}
              />
            </div>

            <div className="input-lable-h-div">
              <label htmlFor="warehousename">Warehouse Name</label>
              <input
                type="text"
                name="warehousename"
                value={inputs.warehousename || ""}
                onChange={handleChange}
              />
            </div>

            <div>
              <button className="submit-btn">Get Machine</button>
            </div>
            
          </div>
        </form>
        <div className="componet-sub-title">
          <span>Machine Stock Details</span>
        </div> */}

        <TableData4 />
        
      </div>
    </React.Fragment>
  );
}

export default Refiller_Refilling_Request;
