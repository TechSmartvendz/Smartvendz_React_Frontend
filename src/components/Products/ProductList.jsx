import React from "react";

function ProductList() {
  return (
    <>
      <div className="add-user-container">
        <div>
          <span className="componet-title">Product</span>
        </div>
        <div className="componet-sub2-title">
          <span> Product List </span>
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
            <label>Select machine:</label>
            <select>
              <option value="N/A">Select machine</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>

          <div className="input-lable-v-div">
            <label htmlFor="abc">Product:</label>
            <select>
              <option value="N/A">Select machine</option>
              <option value="1">A</option>
              <option value="2">B</option>
              <option value="3">C</option>
              <option value="4">D</option>
            </select>
            {/* <input type="search" placeholder="Search..." id="abc" /> */}
          </div>

          <div className="upload-download-btn">
            <button>Search</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ProductList;
