import React from "react";
import "./addnewemployee.css";

function Addnewemployee() {
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

  function Download() {
    axios({
      url: urlz, //your url
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        console.log(res.data);
        fileDownload(res.data, "csvreport.csv");
      })
      .error((err) => console.log(err));
  }
  const companies = ["abc", "def", "ghi", "jkl", "mno"];
  const sampleCSV = [
    { cid: 1, mid: 1 },
    { cid: 2, mid: 2 },
    { cid: 3, mid: 3 },
    { cid: 4, mid: 4 },
  ];

  const uploadCSV = [
    { cid: 1, mid: 1 },
    { cid: 2, mid: 2 },
    { cid: 3, mid: 3 },
    { cid: 4, mid: 4 },
  ];

  return (
    // <div id="abcd">
    <>
       <div className="divtop">
       <span style={style}>Add employee</span>

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

      </>
    //  </div>
  );
}

export default Addnewemployee;
