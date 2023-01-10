import React from "react";

function Listuser() {
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
          <span className="componet-title">Users List</span>
        </div>
        <div className="option-btn">
        <button >Add New User</button>
        <button >Add New User</button>
        <button >Add New User</button>
      </div>
        <div className="componet-sub2-title">
          <span>Total User:</span>
        </div>

        <div className="table_container-div">
          <table>
            <tbody>
              <tr>
                <th>Sl no</th>
                <th> Name</th>
                <th>Role</th>
                <th>Office/Location</th>
                <th>Action</th>
                
               
              </tr>
              {userdata.map((data, key) => {
                return (
                  <tr kay={key}>
                    <td>{key + 1}</td>
                    <td>{data.name}</td>
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

export default Listuser;
