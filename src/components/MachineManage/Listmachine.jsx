import React from "react";

function Listmachine() {
  const userdata = [
    { Slno: "", name: "Ashok", role: "refiller", officelocation: "hsr Layout" },
    { Slno: "", name: "Sharan", role: "support", officelocation: "Marthalli" },
    { Slno: "", name: "Shubham", role: "developer", officelocation: "Hebbal" },
    { Slno: "", name: "Kuldeep", role: "devloper", officelocation: "Nagvar" },
    { Slno: "", name: "Dinesh", role: "Ac count", officelocation: "Itpl" },
  ];
  return (
    <>
      <div className="add-user-container">
        <div>
          <span className="componet-title">Machine List</span>
        </div>
        <div className="option-btn">
        <button >Add New Machine</button>
       
      </div>
        <div className="componet-sub2-title">
          <span>Total Machine:</span>
        </div>

        <div className="table_container-div">
          <table>
            <tbody>
              <tr>
                <th>S.no.</th>
                <th>Company ID</th>
                <th>Machine ID </th>
                <th>Office/Location</th>
                <th>Client Admin</th>
                <th>Admin</th>
                <th>Action</th>
                
               
              </tr>
              {userdata.map((data, key) => {
                return (
                  <tr kay={key}>
                    <td>{key + 1}</td>
                    <td>{data.name}</td>
                    <td>{data.role}</td>
                    <td>{data.role}</td>
                    <td>{data.role}</td>
                    <td>{data.officelocation}</td>
                    <td>
                      <button className="btn_edit">Edit</button>
                      <button className="btn_delete">Delete</button>
                    </td>
                  
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Listmachine;

