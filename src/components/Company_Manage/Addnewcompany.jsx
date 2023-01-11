import React from "react";

function Addnewcompany() {
  return (
    <React.Fragment>
      <div className="add-user-container">
        <div>
          <span className="componet-title">Add New Company</span>
        </div>
        <form className="flex-row form-2col-ver">
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
                required
              />
            </div>

            <div className="input-lable-h-div">
              <label htmlFor="Cbno" className="adminlabel">
                Company Building No:
              </label>
              <input
                type="text"
                name="clocation"
                className="company_input"
                required
              />
            </div>

            <div className="input-lable-h-div">
              <label htmlFor="Cperson" className="adminlabel">
                Company Person:
              </label>
              <select className="" required>
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
                required
              />
            </div>

            <div className="input-lable-h-div">
              <label htmlFor="country" className="adminlabel">
                Country:
              </label>
              <select className="company_input" required>
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

              <select className="company_input" required>
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
              <select className="company_input" required>
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
              <select className="company_input" required>
                <option>Employee</option>
                <option>Manager</option>
                <option>Refiller</option>
                <option>Account</option>
              </select>
            </div>
            <div className="form-submit-button">
            <button>Save Company</button>
            </div>

          </div>
         

          </div>

        
        </form>
      </div>
    </React.Fragment>
  );
}

export default Addnewcompany;
