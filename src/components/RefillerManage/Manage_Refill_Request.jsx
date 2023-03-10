import React from "react";
import TableData3 from "../Partials/TableData3";

function Manage_Refill_Request() {



  return (
    <div className="add-user-container">
      <div className="headingdiv">
        <span className="componet-title"> Manage Re-fill Request</span>
        <div>
          <button onClick={() => navigate(-1)}>Back</button>
        </div>
      </div>
      <div className="option-btn">
        <button
          onClick={() => {
            navigate("/usermanage/addnewuser");
          }}
        >
          Add New{" "}
        </button>
        <button
          onClick={() => {
            navigate("/usermanage/addnewuser");
          }}
        >
          Delete{" "}
        </button>
      </div>

      <div className="componet-sub-title">
        <span>Manage Re-fill Request Lists</span>
      </div>

    <TableData3/>



    </div>
  );
}

export default Manage_Refill_Request;