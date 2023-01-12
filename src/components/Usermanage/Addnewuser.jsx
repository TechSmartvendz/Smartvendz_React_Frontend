import React from "react";

function Addnewuser() {
  return (
    <>
      <div className="add-user-container">
        <div>
          <span className="componet-title">Add New User</span>
        </div>
        <form className="flex-row form-2col-ver">
        <div className="componet-sub-title">
        <span>User Details</span>
       </div>
          <div className="flex-col ">
       
            <div className="flex-row">
              <div className="input-lable-h-div">
                <label htmlFor="name">Name</label>
                <input name="name" type="text" required/>
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="ename">Employee Name</label>
                <input name="Ename"  type="text" required/>
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="mname">Manufacture Name</label>
                <input  type="text" required name="mname" />
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="pdate">Purchase Date</label>
                <input  name="pdate"  type="date" required />
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="pamount">Purchase Amount</label>
                <input name="pamount"  type="text" required />
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="samount">Service Amount</label>
                <input name="samount"  type="text" required/>
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="sduration">Service Duration To</label>
                <input name="sduration"  type="date" required />
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="sduration">Service Email</label>
                <input htmlFor="sduration"  type="text" required />
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="textarea" required>Service Details</label>
                <textarea />
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="checkbox">Is Coin Machine</label>
                <input type="checkbox" />
              </div>
            </div>
            <div  className="flex-row">
              <div className="input-lable-h-div">
                <label htmlFor="mcode">Machine Code</label>
                <input name="mcode"  type="text" required />
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="lname">Location Name</label>
                <input name="lname"  type="text" required/>
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="sno">Serial No</label>
                <input name="sno"  type="text" required />
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="pfrom">Purchase From</label>
                <input name="pfrom"  type="text" required/>
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="stype">Service Type</label>
                <input name="stype"   type="text" required/>
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="sdform">Service Duration From</label>
                <input name="sdfrom"  type="text" required/>
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="sby"> Serviced By</label>
                <input name="sby"  type="text" required/>
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="sby">Service Mobile No</label>
                <input name="sby"  type="number" required/>
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="remark">Remark</label>
                <textarea />
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="wname">Warehouse Name</label>
                <input name="wname"  type="text" required/>
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
                required
              />
            </div>

            <div className="input-lable-v-div">
              <label htmlFor="email">User Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter user email"
                required
              />
            </div>

            <div className="input-lable-v-div">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                required
              />
            </div>

            <div className="input-lable-v-div">
              <label htmlFor="cpassword">Confirm Password</label>
              <input
                type="password"
                name="cpassword"
                placeholder="Confirm Password"
                required
              />
            </div>

            <div className="input-lable-v-div">
            <button className="submit-btn">Save</button>
            </div>
          </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Addnewuser;
