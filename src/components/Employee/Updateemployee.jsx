import React,{useState} from 'react'

function Updateemployee() {
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
    {/* new */}
    <div className="add-user-container">
      <div>
        <span className="componet-title">Add new employee</span>
      </div>
      <div className="componet-sub2-title">
        <span>Update Employee </span>
      </div>
      <form className="flex-row" onSubmit={handleSubmit}>
          <div className="input-lable-v-div">
            <label htmlFor="company">Select company:</label>
            <input 
            type="text"
            onChange={handleChange}
            value={data.company}
            name="company"
            list="dropdown"
            placeholder="Enter company"
            />
              <datalist id='dropdown'>
                <option>1</option>
                <option>2</option>
              </datalist>
          </div>

          <div className="input-lable-v-div">
            <label htmlFor="dropdown">Select machine:</label>
            <input
            type="text"
            onChange={handleChange}
            value={data.machine}
            name="machine"
            placeholder="Enter machine"
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
  )
}

export default Updateemployee
