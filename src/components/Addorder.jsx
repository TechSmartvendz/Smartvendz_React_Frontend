import React, { useState } from "react";

function Addorder() {
  // const [formInputData, setformInputData] = useState({

  //     rficardno: " ",
  //     lockermachineid: " ",
  //     lockerslotno: " ",
  //     password: " ",
  //     item: " ",
  //     date: " "
  // })

  return (
    <React.Fragment>
      {/*Form data start from here*/}
    
        <div className="empty"></div>

        <div className="formcontain">
          <div className="span_div">
            <span>Add-order</span>
          </div>

          <form className="form_div">
            <div className="input_field">
              <label>Employee RFI Card No.</label>

              <input type="text" name="rficardno" placeholder="Card no" />
            </div>

            <div className="input_field">
              <label>Locker Machine Id</label>
              <select className="machine_id" name="machine_id">
                <option>SVZLOCK001</option>
              </select>
            </div>

            <div className="input_field">
              <label>Locker Slot No</label>

              <input
                type="text"
                className="locker_slot"
                name="locker_slotno"
                placeholder="Locker slot No"
                required
              />
            </div>

            <div className="input_field">
              <label>Password for Employee</label>

              <input
                type="password"
                placeholder="password"
                name="password"
                className="E_password"
                required
              />
            </div>

            <div className="input_field">
              <label>Item</label>

              <select className="item" name="item">
                <option>Dellmouse-delweak</option>
                <option>Dellmouse-dstrong</option>
                <option>lenovo-strong</option>
              </select>
            </div>

            <div className="input_field">
              <label>Expire Date</label>

              <input type="date" className="dates" name="e_date" />
            </div>

           
          </form>

          <div id="addorder-btn" className="span_div">
          <button type="submit" className="button">
              Add-order
            </button>
          </div>
         
        </div>
        {/*Table data start from here*/}

        <div className="table_container">
          <div className="span_div">
            <span>Last Pending Records </span>
            <div id="addorder-btn">
              <button type="button" className="button">
                Refresh
              </button>

            </div>
          
          </div>

          <table>
            <tr>
              <th>Card no</th>
              <th>Machine ID</th>
              <th>Locker NO.</th>
              <th>Employee ID</th>
              <th>Item Discription</th>
              <th>Created on</th>
              <th>Expired on</th>
              <th>Locker PIN</th>
            </tr>

            <tr>
              <td>412</td>
              <td>SlZV562</td>
              <td>Emklds232</td>
              <td>Dnmouse ea</td>
              <td>strong machine to operate dsjsnaxsmart vender machnine</td>
              <td>12/08/2023 11:30pm</td>
              <td>7/11/2024</td>
              <td>45</td>
            </tr>
            <tr>
              <td>412</td>
              <td>SlZV562</td>
              <td>Emklds232</td>
              <td>Dnmouse ea</td>
              <td>strong machine to operate</td>
              <td>12/08/2023 11:30pm</td>
              <td>7/11/2024</td>
              <td>45</td>
            </tr>
            <tr>
              <td>412</td>
              <td>SlZV562</td>
              <td>Emklds232</td>
              <td>Dnmouse ea</td>
              <td>strong machine to operate</td>
              <td>12/08/2023 11:30pm</td>
              <td>7/11/2024</td>
              <td>45</td>
            </tr>

            <tr>
              <td>412</td>
              <td>SlZV562</td>
              <td>Emklds232</td>
              <td>Dnmouse ea</td>
              <td>strong machine to operate</td>
              <td>12/08/2023 11:30pm</td>
              <td>7/11/2024</td>
              <td>45</td>
            </tr>
          </table>
        </div>
      
    </React.Fragment>
  );
}

export default Addorder;











// import React from 'react'

// function Addorder() {
//   return (
//     <>
//       <p>Addorder</p>
//     </>
//   )
// }

// export default Addorder
