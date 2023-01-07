import React from "react";
import './updateemployee.css'

function Updateemployee() {
  const style = {
    color: 'black',
    fontSize: '25px',
    padding: '20px'
  };

  const style2 = {
    color: 'black',
    // fontSize: '20px',
    padding: '20px'
  };
  return (
    <div className="divtop">
      <span style={style}>Update employee</span>
      <p style={style2}> Bulk Employee Upload</p>

      <div className="div1">
        <div className="div11">
          <span>Select company:</span>
          <select id="dropdown">
            <option value="N/A">Select company</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          </div>
          
          <div className="div12">
          <span>Select machine:</span>
          <select id="dropdown">
            <option value="N/A">Select machine</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>

      </div>

      
      <div className="sample">
      <p>Sample report/ CSV</p>
      <button className="uploadbtn1">Download</button>
      </div>

      <div className="upload">
      <p>Upload CSV: </p>
      <input type="file" />
      <button className="uploadbtn2">Upload</button>
      </div>

    </div>
  );
}

export default Updateemployee;
