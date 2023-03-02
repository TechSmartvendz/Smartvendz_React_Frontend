import React from 'react'
import { useNavigate } from 'react-router-dom'
function Employeecredit() {
  const navigate=useNavigate();
  return (
    <>
    {/* new */}
    <div className="add-user-container">
      <div className='headingdiv'>
        <span className="componet-title">Update Employee</span>
        <div>
        <button onClick={(()=>{navigate(-1)})}>Back</button>
        </div>
      </div>

      <div className="componet-sub-title">
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

export default Employeecredit;
