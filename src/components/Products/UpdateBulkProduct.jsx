import React,{useState} from "react";

function UpdateBulkProduct() {
  const [data, setData] = useState({
    company:"",
    machine:""    
  });
  function handleChange(event) {
    const{name,value} = event.target
   setData((prevState) => {
     return {
       ...prevState,
       [name]: value
     };
   });
 }

 function handleSubmit(event) {
   event.preventDefault()
   console.log(data)
 }
  return (
    <>
      <div className="add-user-container">
        <div>
          <span className="componet-title">Product</span>
        </div>
        <div className="componet-sub2-title">
          <span>Upload Product Bulk File</span>
        </div>
        <form className="flex-row">
          <div className="input-lable-v-div">

            <label htmlFor="company">Select company:</label>
            <select 
               value={data.company}
               onChange={handleChange}
               name="company"
               id="company"
            >
              <option value="N/A">--Select company--</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>

          <div className="input-lable-v-div">
            <label htmlFor="machineno">Select machine:</label>
            <select id="machine"
               value={data.machine}
               onChange={handleChange}
               name="machineno"
               >
              <option value="N/A">--Select machine--</option>
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
  );
}

export default UpdateBulkProduct;
