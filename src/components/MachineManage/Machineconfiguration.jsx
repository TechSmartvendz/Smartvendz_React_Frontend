import React from "react";

function Machineconfiguration() {
  return (
    <React.Fragment>
      <div className="add-user-container">
        <div>
          <span className="componet-title">Machine List</span>
        </div>
        <div className="componet-sub2-title">
          <span>Total Machine:</span>
        </div>

        <form className="flex-row form-2col-ver">
          <div className="flex-row" >
            <div className="input-lable-h-div">
              <label htmlFor="machinetype" className="">
                Select Machine type
              </label>

              <select className="type">
                <option>GVC DEVICE</option>
                <option>RASPBARRY PI</option>
              </select>
            </div>

            <div className="input-lable-h-div">
              <label htmlFor="vendtype">Select Vend type</label>
              <select className="type">
                <option>NORMAL VEND</option>
                <option>CREDIT VEND</option>
              </select>
            </div>
         

          <div className="input-lable-checkbox-div">
            <label className="access">Access Type:</label>
            <input type="checkbox" name="rfid" />
            <label htmlFor="rfid">RFID(HID)</label>
            <div>
              <input type="checkbox" name="qrupi" />
              <label htmlFor="qrupi">QR UPI</label>
            </div>
            <div>
              <input type="checkbox" name="mobilea" />
              <label htmlFor="mobileapp">MOBILE APPLICATION</label>
            </div>
            <div>
              <input type="checkbox" name="microrfid" />
              <label htmlFor="myrfid">RFID(MFARE RFID)</label>
            </div>
          </div>

          <div className="input-lable-h-div">
            <label htmlFor="rfidcard" className="">
              RFID CARD
            </label>
            <select className="rfidcard">
              <option>HID 26</option>
              <option>HID 34</option>
            </select>
          </div>
          <div className="input-lable-h-div">
            <label htmlFor="apiurl" className="labelapi">
              API URL:
            </label>
            <input name="URL" className="api" type="text" />
          </div>
        <div className="input-lable-h-div">
         <button type="submit" className="submit-btn">
            Submit
          </button>
        </div>
          
          </div>
          <div className="flex-row" >
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Machineconfiguration;
