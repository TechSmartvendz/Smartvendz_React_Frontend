import React,{useState} from "react";

function Addnewemployee() {
  const[data, setData] = useState({
    machine:"",
    company:""
    
  })
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

  function handleSubmit(event) {
    event.preventDefault()
    console.log(data)
  }

  function handleChange(event) {
    const{name,value} = event.target
    setData(prevData => {
      return {
        ...prevData,
        [name]: value
      }
    })

  }

  return (
    <>
      {/* new */}
      <div className="add-user-container">
        <div>
          <span className="componet-title">Add new employee</span>
        </div>
        <div className="componet-sub2-title">
          <span>Bulk Employee Upload</span>
        </div>
        <form className="flex-row" onSubmit={handleSubmit}>
        <div className="input-lable-v-div">
            <label htmlFor="dropdown">Select company:</label>
            <input   
            placeholder="Enter company name"
            type="text"
            onChange={handleChange}
            value={data.company}
            name="company"
            list="dropdown"
            />
              <datalist id='dropdown'>
                <option>1</option>
                <option>2</option>
              </datalist>
          </div>

          <div className="input-lable-v-div">
            <label htmlFor="machine">Select machine:</label>
            <input
            type="text"
            onChange={handleChange}
            value={data.machine}
            name="machine"
            placeholder="Enter machine name"
            list="dropdown"
            />
                <datalist id='dropdown'>
                  <option>1</option>
                  <option>2</option>
                </datalist>
          </div>
          <div className="input-lable-v-div">
            <label htmlFor="file">Upload CSV: </label>
            <input type="file" id="file" />
          </div>

          <div className="upload-download-btn">
            <button>Sample CSV</button>
            <button>Upload</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Addnewemployee;
