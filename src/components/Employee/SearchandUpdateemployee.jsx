import React,{useState} from "react";

function SearchandUpdateemployee() {
 
  const[data, setData] = useState({
    company:"",
    employeename: "",
    employeecardno:""
  })

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
          <span className="componet-title">Search and update employee</span>
        </div>
        <div className="componet-sub2-title">
          <span>Search and Update Employee </span>
        </div>    
    


        <form className="flex-row">
        <div className="input-lable-v-div">
            <label htmlFor="dropdown">Company name:</label>
            <input   
            placeholder="Enter company name"
            type="text"
            onChange={handleChange}
            value={data.company}
            name="company"
            list="dropdown"
            />
              <datalist id='dropdown'>
                <option>Select company</option>
                <option>1</option>
                <option>2</option>
              </datalist>
          </div>

          <div className="input-lable-v-div">
            <label htmlFor="ename"> Employee name:</label>
            <input 
            type="text" 
            placeholder="Enter employee name"
              value={data.employeename}
            onChange={handleChange}
            list="ename"
            name="employeename"
            />
            <datalist id='ename'>
              <option>Ram</option>
              <option>Shyam</option>
            </datalist>
          </div>

    

        
          

          <div className="input-lable-v-div">
          <label htmlFor="enumber"> Employee card number:</label>
            <input type="text" 
            placeholder="Employee cardno" 
            value={data.employeecardno}
            onChange={handleChange}
            list="enumber"
            name="employeecardno"
            />
              <datalist id='enumber'>
              <option>1</option>
              <option>2</option>
            </datalist>
          </div>

          {/* <div className="input-lable-v-div">
      
          </div> */}
          <div className="upload-download-btn">
            <button>Search</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SearchandUpdateemployee;
