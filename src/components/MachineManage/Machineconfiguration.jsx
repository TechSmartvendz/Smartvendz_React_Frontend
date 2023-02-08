import React, { useState } from "react";
import { ErrorAlert, SuccessAlert } from "../middleware/AlertMsg";
import { postReq } from "../middleware/AxiosApisCall";

function Machineconfiguration() {
  const [inputs, setInputs] = useState();
  const path = "Machine";

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const response = await postReq(inputs, path);
    if ((response.status = "success")) {
      SuccessAlert({
        title: "Add New Machine",
        message: "New Machine Added Successfully",
      });
    } else {
      ErrorAlert({ title: "Add New Machine", message: response.error });
    }
  };

  return (
    <React.Fragment>
      <div className="add-user-container">
        <div>
          <span className="componet-title">Machine List</span>
        </div>
        <div className="componet-sub2-title">
          <span>Total Machine:</span>
        </div>

        <form onSubmit={handleSubmit} className="flex-row form-2col-ver">
          <div className="flex-row">
            <div className="input-lable-h-div">
              <label htmlFor="machinetype" className="">
                Select Machine type
              </label>

              <input list="mtype" className="type" />

              <datalist id="mtype">
                <option>GVC DEVICE</option>
                <option>RASPBARRY PI</option>
              </datalist>
            </div>

            <div className="input-lable-h-div">
              <label htmlFor="vendtype">Select Vend type</label>
              <input list="svty" className="type" />
              <datalist id="svty">
                <option>NORMAL VEND</option>
                <option>CREDIT VEND</option>
              </datalist>
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

              <input list="rfid" className="rfidcard" />

              <datalist id="rfid">
                <option>HID 26</option>
                <option>HID 34</option>
              </datalist>
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
          <div className="flex-row"></div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Machineconfiguration;
