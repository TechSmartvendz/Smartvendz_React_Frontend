import React from "react";

function SearchandUpdateemployee() {
  return (
    <>
      {/* new */}
      <div className="add-user-container">
        <div>
          <span className="componet-title">Search and update employee</span>
        </div>
        <div className="componet-sub2-title">
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
