import React, { useState, useContext } from "react";
import MachineContext from "../Context/MachineContext";
import Message_box from "./Result_msg/Message_box";

function Machine_manage() {
  const machinedata = [
    {
      name: "Enphase 2nd phase",
      EmployeeName: "Ayyappa",
      officename: "enphase 2ndphase",
    },
    {
      name: "Tessolve SJP ",
      EmployeeName: "Vinod Kumar HSR",
      officename: "Tessolve SJP",
    },
    {
      name: "NSL india university",
      EmployeeName: "Venkatesh",
      officename: "NSL india university",
    },
    {
      name: "CAI info india",
      EmployeeName: "Venkatesh",
      officename: "CAI info india",
    },
    {
      name: "Enphase 2nd phase",
      EmployeeName: "Ayyappa",
      officename: "enphase 2ndphase",
    },
    {
      name: "Enphase 2nd phase",
      EmployeeName: "Ayyappa",
      officename: "enphase 2ndphase",
    },
  ];
  const { add1, setAdd1 } = useContext(MachineContext);

  function addnew() {
    setAdd1(false);
  }

  return (
    <React.Fragment>
   
     <div><Message_box/></div>
      <div className="mm_container">
      
        <div>
          <span className="main_head">Manage Machines</span>
        </div>

        <div className="btn_conatiner">
          <button className="mmAddnew_btn" onClick={addnew}>
            {" "}
            {{ add1 } ? "AddNew" : "Close"}
          </button>

          <button className="mmDelete_btn">Delete</button>
          <button className="mmClose_btn">Close</button>
        </div>

        <div>
          <span className="heading">Machine List</span>
        </div>

        <div className="mm_option">
          <label>Show</label>
          <select className="show_drop" name="options">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <label>Entries</label>

          <div className="search">
            <label>Search:</label>
            <input type="text"></input>
          </div>
        </div>
        <div className="mm_table_container">
          <table className="mm_table">
          <tbody>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th className="table_headings">Name[Code]</th>
              <th className="table_headings">Employee Name</th>
              <th className="table_headings">Office Name</th>
              <th></th>
            </tr>
            {machinedata.map((data, key) => {
              return (
                <tr key={key}>
                  <td>
                    <input type="checkbox"></input>
                  </td>
                  <td>{data.name}</td>
                  <td>{data.EmployeeName}</td>
                  <td>{data.officename}</td>
                  <td>
                    <button className="mm_edit_btn">Edit</button>
                  </td>
                </tr>
              );
            })}
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Machine_manage;
