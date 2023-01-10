import React from "react";
import "./searchandemployee.css";

function SearchandUpdateemployee() {
  return (
    <div className="maindiv">
      <form className="employeesearch">
        <div>
      <label htmlFor="eid"> Company </label>
        <select id="dropdown">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        </div>

        <div>
          <label htmlFor="eid"> Employee ID: </label>
          <input type="text" id="eid" />
        </div>

        <div>
          <label htmlFor="ename"> Employee Name: </label>
          <input type="text" id="ename" />
        </div>

        <div>
          <label htmlFor="ecard"> Employee Card: </label>
          <input type="text" id="ecard" />
        </div>

        <div>
          <label htmlFor="name">Employee:</label>
          <input type="text" id="name" />
        </div>

        <div>
          <label htmlFor="abc"></label>
        <input type="search" placeholder="Search..." id="abc"/>
      <button className="btn">Search</button> 
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

export default SearchandUpdateemployee;
