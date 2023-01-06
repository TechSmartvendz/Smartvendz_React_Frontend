import React from "react";

function Addnewemployee() {
  function Download() {
  
    axios({
      url: urlz, //your url
      method: "POST",
    
      headers: {
         "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      console.log(res.data);
      fileDownload(res.data, "csvreport.csv");
    })
    .error( err => console.log(err))
      
  
  }
  const companies = ['abc','def','ghi','jkl','mno']
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
    <div>
      <option>Select User</option>
      {/* <select>
      {companies.map( (key) => (
          <option title={result.Id}>{result.title}</option>
      ))}
      </select> */}

      <p>Add new employee</p>
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
      {/* <p>Sample CSV: </p> */}
      <button onClick={Download} style={{cursor: 'pointer'}}>Download</button>
      <p>Upload CSV: </p>
      <input type="file" />
      <button>Upload</button>
    </div>
  );
}

export default Addnewemployee;
