import React from 'react'

function Updateemployee() {
  return (
    <>
    {/* new */}
    <div className="add-user-container">
      <div>
        <span className="componet-title">Add new employee</span>
      </div>
      <div className="componet-sub2-title">
        <span>Update Employee </span>
      </div>
      <form className="flex-row">
        <div className="input-lable-v-div">
          <label htmlFor="dropdown">Select company:</label>
          <select id="dropdown">
            <option value="N/A">Select company</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>

        <div className="input-lable-v-div">
          <label htmlFor="dropdown">Select machine:</label>
          <select id="dropdown">
            <option value="N/A">Select machine</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div className="input-lable-v-div">
          <label>Upload CSV: </label>
          <input type="file" />
        </div>

        <div className="upload-download-btn">
          <button>Sample CSV</button>
          <button>Upload</button>
        </div>
      </form>
    </div>
  </>
  )
}

export default Updateemployee
