import React, { useState } from "react";

function Addnewcompany() {
  const[inputs,setInputs]=useState({});

  const[option,setOption]=useState({});

  const handleChange=(e)=>{
   const name=e.target.name;
   const value=e.target.value;
   setInputs(values=>({...values,[name]:value}))
   setOption((values)=>({...values, [name]:value}))
  }
 const handleSubmit=(e)=>{
 e.preventDefault();

 console.log(inputs)
 console.log(option)
 }
  return (
    <React.Fragment>
      <div className="add-user-container">
        <div>
          <span className="componet-title">Add New Company</span>
        </div>
       
        <form  onSubmit={handleSubmit}   className="flex-row form-2col-ver">
          <div className="componet-sub-title">
            <span>Company Details</span>
          </div>
         
          <div className="flex-col ">
          <div className="flex-row">
            
          <div className="input-lable-h-div">
              <label htmlFor="cname" className="adminlabel">
                Company Name:
              </label>
              <input
                type="text"
                name="cname"
                className="company_input"
                value={inputs.cname || ""}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-lable-h-div">
              <label htmlFor="cname" className="adminlabel">
                Company ID:
              </label>
              <input
                type="text"
                name="cid"
                className="company_input"
                value={inputs.cid || ""}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-lable-h-div">
              <label htmlFor="Caddress" className="adminlabel">
                Company Address:
              </label>
              <input
                type="text"
                name="cadd"
                className="company_input"
                value={inputs.cadd || ""}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-lable-h-div">
              <label htmlFor="Clocation" className="adminlabel">
                Company Location:
              </label>
              <input
                type="text"
                name="clocation"
                className="company_input"
                value={inputs.clocation || ""}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-lable-h-div">
              <label htmlFor="Cbno" className="adminlabel">
                Company Building No:
              </label>
              <input
                type="text"
                name="cbuildingno"
                className="company_input"
                value={inputs.cbuildingno || ""}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-lable-h-div">
              <label htmlFor="Cperson" className="adminlabel">
                Company Person:
              </label>
              <select className="" name="company_person" value={option.company_person || ""} onChange={handleChange} required>
                <option>Manoj</option>
                <option>Dinesh</option>
                <option>Shubham</option>
                <option>Kuldeep</option>
              </select>
            </div>
          </div>
         
          <div className="flex-row">
            <div className="input-lable-h-div" >
              <label htmlFor="cperson" className="adminlabel">
                Contact Person:
              </label>
              <input
                type="email"
                name="pemail"
                className="company_input"
                value={inputs.pemail || ""}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-lable-h-div">
              <label htmlFor="cperson" className="adminlabel">
                Contact Person:
              </label>
              <input
                type="text"
                name="pnum"
                className="company_input"
                value={inputs.pnum || ""}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-lable-h-div">
              <label htmlFor="country" className="adminlabel">
                Country:
              </label>
              <select className="company_input" name="country" value={option.country || ""} onChange={handleChange} required>
                <option>India</option>
                <option>Srilanka</option>
                <option>Australia</option>
                <option>England</option>
              </select>
            </div>

            <div className="input-lable-h-div">
              <label htmlFor="state" className="adminlabel">
                State:
              </label>

              <select className="company_input" name="state" value={option.state || ""} onChange={handleChange} required>
                <option>Karnatak</option>
                <option>Maharastra</option>
                <option>Andra</option>
                <option>Tamilnadu</option>
              </select>
            </div>

            <div className="input-lable-h-div">
              <label htmlFor="pcity" className="adminlabel">
                City:
              </label>
              <select className="company_input" name="city" value={option.city || ""} onChange={handleChange} required>
                <option>Bengaluru</option>
                <option>mumbai</option>
                <option>Hydrabad</option>
                <option>Channai</option>
              </select>
            </div>

            <div className="input-lable-h-div">
              <label htmlFor="admin" className="adminlabel">
                Admin:
              </label>
              <select className="company_input" name="admin" value={option.admin || ""} onChange={handleChange} required>
                <option>Employee</option>
                <option>Manager</option>
                <option>Refiller</option>
                <option>Account</option>
              </select>
            </div>
            <div className="form-submit-button">
            <button type="submit" >Save Company</button>
            </div>

          </div>
         

          </div>

        
        </form>
      </div>
    </React.Fragment>
  );
}

export default Addnewcompany;
