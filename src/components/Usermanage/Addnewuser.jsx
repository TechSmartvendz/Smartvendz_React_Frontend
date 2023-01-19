import React,{useState} from "react";

function Addnewuser() {

  const [inputs,setInputs]=useState({})

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({...values, [name]: value}))
    // console.log(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
   console.log(inputs);
  }

  return (
    <React.Fragment>
      <div className="add-user-container">
        <div>
          <span className="componet-title">Add New User</span>
        </div>
       
        <form className="flex-row form-2col-ver" onSubmit={handleSubmit}>
        <div className="componet-sub-title">
        <span>User Details</span>
       </div>
          
       <div className="flex-col ">
       
            <div className="flex-row">
             
            <div className="input-lable-h-div">
                <label htmlFor="name">Name</label>
                <input name="name" type="text" value={inputs.name || "" } onChange={handleChange} required/>
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="ename">Employee Name</label>
                
                <input name="ename"  type="text" value={inputs.ename || "" } onChange={handleChange} required/>
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="mname">Manufacture Name</label>
                <input  type="text" name="mname" value={inputs.mname || "" } onChange={handleChange} required  />
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="pdate">Purchase Date</label>
                <input  name="pdate"  type="date" value={inputs.pdate || "" } onChange={handleChange} required />
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="pamount">Purchase Amount</label>
                <input name="pamount"  type="text" value={inputs.pamount || "" } onChange={handleChange} required />
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="samount">Service Amount</label>
                <input name="samount"  type="text" value={inputs.samount || "" } onChange={handleChange} required/>
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="sduration">Service Duration To</label>
                <input name="sduration"  type="date" value={inputs.sduration || "" } onChange={handleChange} required />
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="sduration">Service Email</label>
                <input name="service_email"  type="email" value={inputs.service_email || "" } onChange={handleChange} required />
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="textarea" required>Service Details</label>
                <textarea name="serviced" value={inputs.serviced || "" } onChange={handleChange}/>
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="checkbox">Is Coin Machine</label>
                <input type="checkbox" name="iscoin" value={inputs.iscoin || "" } onChange={handleChange} />
              </div>
            </div>
            <div  className="flex-row">
              <div className="input-lable-h-div">
                <label htmlFor="mcode">Machine Code</label>
                <input name="mcode"  type="text" value={inputs.mcode || "" } onChange={handleChange} required />
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="lname">Location Name</label>
                <input name="lname"  type="text" value={inputs.lname || "" } onChange={handleChange} required/>
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="sno">Serial No</label>
                <input name="sno"  type="text" value={inputs.sno || "" } onChange={handleChange} required />
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="pfrom">Purchase From</label>
                <input name="pfrom"  type="text" value={inputs.pfrom || "" } onChange={handleChange} required/>
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="stype">Service Type</label>
                <input name="stype"   type="text" value={inputs.stype || "" } onChange={handleChange} required/>
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="sdform">Service Duration From</label>
                <input name="sdfrom"  type="text" value={inputs.sdfrom || "" } onChange={handleChange} required/>
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="sby"> Serviced By</label>
                <input name="sby"  type="text" value={inputs.sby || "" } onChange={handleChange} required/>
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="sby">Service Mobile No</label>
                <input name="smobileno"  type="number" value={inputs.smobileno || "" } onChange={handleChange} required/>
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="remark">Remark</label>
                <textarea name="remark" value={inputs.remark || "" } onChange={handleChange}/>
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="wname">Warehouse Name</label>
                <input name="wname"  type="text" value={inputs.wname || "" } onChange={handleChange} required/>
              </div>
            </div>
          </div>
          {/* Log in info start from here*/}
        
         <div className="componet-sub-title">
          <span>Login Info</span>
         </div>
         <div>
          <div className="flex-col" >
            <div className="input-lable-v-div">
              <label htmlFor="username">User Name</label>
             
              <input
                type="text"
                name="user_name"
                placeholder="Enter User name"
                value={inputs.user_name || "" }
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-lable-v-div">
              <label htmlFor="email">User Email</label>
             
              <input
                type="email"
                name="email"
                placeholder="Enter user email"
                value={inputs.email || "" }
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-lable-v-div">
              <label htmlFor="password">Password</label>
             
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                value={inputs.password || "" }
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-lable-v-div">
              <label htmlFor="cpassword">Confirm Password</label>
              <input
                type="password"
                name="cpassword"
                placeholder="Confirm Password"
                value={inputs.cpassword || "" }
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-lable-v-div">
            <button  type="submit" className="submit-btn" >Save</button>
            </div>
          </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Addnewuser;
