import React from "react";

function BulkProductUpload() {
  return (
    <div>
      <p> Bulk Employee Upload</p>
      <p>Select company:</p>
      <select id="dropdown">
        <option value="N/A">Select company</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <p>Select machine:</p>
      <select id="dropdown">
        <option value="N/A">Select machine</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <p>Sample report/ CSV</p>
      <button>Download</button>
      <p>Upload CSV: </p>
      <input type="file" />
      <button>Upload</button>
    </div>
  );
}

export default BulkProductUpload;
