
import React from 'react'

function MachineForm() {
  return (
   <React.Fragment>
   <div className="add-user-container">
        <div>
          <span className="componet-title">Add New Machine</span>
        </div>
        <form className="flex-row form-2col-ver">
          <div className="componet-sub-title">
            <span>Machine Details</span>
          </div>
          <div className="flex-col ">
            <div className="flex-row">
              <div className="input-lable-h-div">
                <label htmlFor="machineName">Machine Name</label>
                <input name="machineName" />
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="machineID">Mchine ID</label>
                <input name="machineID" />
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="country">Country</label>
                <select name="country">
                  <option>India</option>
                  <option>Nepal</option>
                  <option>Shrri Lanka</option>
                </select>
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="state">State</label>
                <select name="state">
                  <option>Karnataka</option>
                  <option>Delhi</option>
                  <option>Maharasthara</option>
                </select>
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="city">City</label>
                <select name="city">
                  <option>Banglore</option>
                  <option>Manglore</option>
                  <option>Mysore</option>
                </select>
              </div>
              <div className="input-lable-h-div">
                <label htmlFor="area">Area</label>
                <select name="area">
                  <option>HSR-Layout</option>
                  <option>Electroni City</option>
                  <option>BTM-Layout</option>
                </select>
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="address">Address</label>
                <input name="address" />
              </div>
              <div className="input-lable-h-div">
                <label htmlFor="building">Building</label>
                <input name="building" />
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="installLocation">Install Location</label>
                <input name="installLocation" />
              </div>
            </div>

            <div className="flex-row">
              <div className="input-lable-h-div">
                <label htmlFor="productType">Product Type</label>
                <select name="productType">
                  <option>Snacks Vending</option>
                  <option>IT Vending</option>
                  <option>Stationary Vending</option>
                </select>
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="totalSlot">Total Slots</label>
                <input type="number" name="totalSlot" />
              </div>
              <div className="input-lable-h-div">
                <label htmlFor="companyId">Company</label>
                <select name="companyId">
                  <option>BOSCH</option>
                  <option>Juniper</option>
                  <option>MIQ</option>
                  <option>Diageo</option>
                </select>
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="clientUserId">Client User</label>
                <select name="clientUserId">
                  <option>Raghu</option>
                  <option>Neelesh</option>
                  <option>Kuldeep</option>
                  <option>Vinayak</option>
                </select>
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="AdminId">Admin</label>
                <select name="AdminId">
                  <option>Chetan</option>
                  <option>Dinesh</option>
                  <option>Hemant</option>
                  <option>Swapnil</option>
                </select>
              </div>
              <div className="input-lable-h-div">
                <label htmlFor="refiller">Refiller</label>
                <select name="refiller">
                  <option>Rakesh</option>
                  <option>Kartika</option>
                  <option>Anil</option>
                  <option>Vanky</option>
                </select>
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="refiller">Refiller</label>
                <select name="refiller">
                  <option>Rakesh</option>
                  <option>Kartika</option>
                  <option>Anil</option>
                  <option>Vanky</option>
                </select>
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="warehouse">Ware House</label>
                <select name="warehouse">
                  <option>HSR warehouse</option>
                  <option>Manyta Warehouse</option>
                  <option>WhiteField Wareouse</option>
                  <option>JP Nagar WareHouse</option>
                </select>
              </div>
              <div className="input-lable-h-div">
                <label htmlFor="remark">Remark</label>
                <textarea />
              </div>
            </div>
          </div>
          <div>

          <div className="flex-col">
            <div className="input-lable-v-div">
              <button className="submit-btn">Save</button>
            </div>
          </div>
        </div> 
        </form>
      </div>
   
   
   
   </React.Fragment>
  )
}

export default MachineForm