import React from "react";
import "./Transactions.css";

function Transactions1() {
  return (
    <div>
      <p>Transaction Report</p>
      <form>
        <div className="start">
          <div>
            <label>Start Date-Time</label>
            <input type="date" />
          </div>

          <div>
            <label>End Date-Time</label>
            <input type="date" />
          </div>

          <div>
            <label>Product</label>
            <select className="item">
              <option>All</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>

          <div>
            <label> Machine ID</label>
            <select className="item">
              <option>SVZLOCK001</option>
              <option>SVZLOCK001</option>
              <option>SVZLOCK001</option>
              <option>SVZLOCK001</option>
            </select>
          </div>

          <div>
            <label> Company ID</label>
            <select className="item">
              <option>SVZLOCK001</option>
              <option>SVZLOCK001</option>
              <option>SVZLOCK001</option>
              <option>SVZLOCK001</option>
            </select>
          </div>

          <div>
            <label>Employee RFID Card No.</label>
            <input type="text" />
          </div>

          <div id="">
            <button className="btn" id="btn1">Transaction</button>
            <button className="btn" id="btn2">CSV Report</button>
          </div>

        </div>
        </form>



        <div className="table_container">
          <table>
            <tr>
              <th>Card no</th>
              <th>Machine ID</th>
              <th>Locker NO.</th>
              <th>Item </th>
              <th>Employee ID</th>
              <th>Employee Email</th>
              <th>Date-Time</th>
            </tr>

            <tr>
              <td>4143</td>
              <td>SlZV562</td>
              <td>12</td>
              <td>HP black i5 500GB</td>
              <td>14116</td>
              <td>null</td>
              <td>7/11/2024 12:47:05</td>
            </tr>
            <tr>
              <td>4143</td>
              <td>SlZV562</td>
              <td>12</td>
              <td>HP black i5 500GB</td>
              <td>14116</td>
              <td>null</td>
              <td>7/11/2024 12:47:05</td>
            </tr>
            <tr>
              <td>4143</td>
              <td>SlZV562</td>
              <td>12</td>
              <td>HP black i5 500GB</td>
              <td>14116</td>
              <td>null</td>
              <td>7/11/2024 12:47:05</td>
            </tr>
            <tr>
              <td>4143</td>
              <td>SlZV562</td>
              <td>12</td>
              <td>HP black i5 500GB</td>
              <td>14116</td>
              <td>null</td>
              <td>7/11/2024 12:47:05</td>
            </tr>
            <tr>
              <td>4143</td>
              <td>SlZV562</td>
              <td>12</td>
              <td>HP black i5 500GB</td>
              <td>14116</td>
              <td>null</td>
              <td>7/11/2024 12:47:05</td>
            </tr>
          </table>
        </div>
    </div>
  );
}

export default Transactions1;
