import React, { useState, useEffect } from "react";
import { postReq } from "../middleware/AxiosApisCall";
import { SuccessAlert, ErrorAlert } from "../middleware/AlertMsg"; //1
import TableData from "../Partials/TableData"; //2
import DataList from "../Partials/DataList";

function Citymanage() {
  const path = "City";

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
      SuccessAlert({ title: "Add City", message: "City Added successfully" });
    } else {
      ErrorAlert({ title: "Add City", message: response.error });
    }
  };

  return (
    <React.Fragment>
      <div className="add-user-container">
        <div>
          <span className="componet-title">City Manage</span>
        </div>

        <form className="flex-row form-2col-ver" onSubmit={handleSubmit}>
          <div className="componet-sub-title">
            <span>City Details</span>
          </div>

          <div className="general-manage-div">
            <label htmlFor="city">City:</label>
            <input
              name="city"
              type="text"
              value={inputs.city || ""}
              onChange={handleChange}
              required
            />
            <DataList
              value={inputs.state || ""}

              path={"State"}
              handleChange={handleChange}
              name={"state"}
              heading={"State"}
            />
            <button className="submit-btn">Add New</button>
          </div>
        </form>

        {/* <div className="componet-sub2-title">
  <span>Total City:</span>
 </div> */}

        {/* <CityTable key={cityList} table={cityList} path={path} parentFunction={loadCity}/> */}
        <TableData path={path} key={tableRefresh} />
      </div>
    </React.Fragment>
  );
}

export default Citymanage;
