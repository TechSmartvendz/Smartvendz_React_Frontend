import React, { useState, useEffect } from "react";
import { postReq } from "../middleware/AxiosApisCall";
import { SuccessAlert, ErrorAlert } from "../middleware/AlertMsg"; //1
import TableData from "../Partials/TableData"; //2

function Countrymanage() {
  const path = "Country";
  const [inputs, setInputs] = useState({});
  const [tableRefresh, setTableRefresh] = useState(0); //3

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await postReq(path, inputs);
    if (response.status === "success") {
      setTableRefresh(tableRefresh + 1); //4
      setInputs({}); //5
      SuccessAlert({
        title: "Add Country",
        message: "Country Added successfully",
      });
    } else {
      ErrorAlert({ title: "Add Country", message: response.error });
    }
  };

  return (
    <React.Fragment>
      <div className="add-user-container">
        <div>
          <span className="componet-title">Country Manage</span>
        </div>
        <form className="flex-row form-2col-ver" onSubmit={handleSubmit}>
          <div className="componet-sub-title">
            <span>Country Details</span>
          </div>
          <div className="general-manage-div">
            <label htmlFor="name">Country:</label>
            <input
              name="country"
              type="text"
              value={inputs.country || ""}
              onChange={handleChange}
              required
            />
            {/* <DataList
              value={inputs.country || ""}
              path={"Country"}
              handleChange={handleChange}
              name={"country"}
              heading={"Country"}
            /> */}
            <button className="submit-btn">Add New</button>
          </div>
        </form>
        <TableData path={path} key={tableRefresh} />
      </div>
    </React.Fragment>
  );
}

export default Countrymanage;
