import React from "react";
import { useNavigate } from "react-router-dom";
function SearchandUpdateemployee() {
  const navigate=useNavigate();
  return (
    <>
      {/* new */}
      <div className="add-user-container">
        <div className="headingdiv">
          <span className="componet-title">Search and Udate Employee</span>
          <div>
          <button onClick={(()=>navigate(-1))}>Back</button>
          </div>
        </div>
        <div className="componet-sub-title">
          <span>Search and Update Employee </span>
        </div>

        <form className="flex-row">
          <div className="input-lable-v-div">
            <label>Select company:</label>
            <select>
              <option value="N/A">Select company</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>

          <div className="input-lable-v-div">
            <input type="search" placeholder="Search..." />
          </div>
          <div className="upload-download-btn">
            <button>Search</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SearchandUpdateemployee;
