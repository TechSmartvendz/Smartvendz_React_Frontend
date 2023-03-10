import React, { useState } from "react";
import DataList from "./DataList";
function TableData4() {
  const stockdetails = [
    {
      SLNO: "1",
      SlotCode: "A1",
      MaterialName: "Haldirams Bhujia Sev 40Gm",
      ClosingStock: "6",
      CurrentStock: "",
      RefillQuantity: "",
      SaleQuantity: "",
      Swap: "",
      ReplaceItem: "",
    },
    
    {
      SLNO: "2",
      SlotCode: "A2",
      MaterialName: "Haldirams Bhujia Sev 40Gm",
      ClosingStock: "6",
      CurrentStock: "",
      RefillQuantity: "",
      SaleQuantity: "",
      Swap: "",
      ReplaceItem: "",
    },
    {
      SLNO: "3",
      SlotCode: "A3",
      MaterialName: "Haldirams Bhujia Sev 40Gm",
      ClosingStock: "6",
      CurrentStock: "",
      RefillQuantity: "",
      SaleQuantity: "",
      Swap: "",
      ReplaceItem: "",
    },
    {
      SLNO: "4",
      SlotCode: "A4",
      MaterialName: "Haldirams Bhujia Sev 40Gm",
      ClosingStock: "6",
      CurrentStock: "",
      RefillQuantity: "",
      SaleQuantity: "",
      Swap: "",
      ReplaceItem: "",
    },
    {
      SLNO: "5",
      SlotCode: "A5",
      MaterialName: "Haldirams Bhujia Sev 40Gm",
      ClosingStock: "6",
      CurrentStock: "",
      RefillQuantity: "",
      SaleQuantity: "",
      Swap: "",
      ReplaceItem: "",
    },
  ];
  const [refilldata, setRefilldata] = useState(stockdetails);
  const [inputs, setInputs] = useState({});

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(inputs);
  }

  return (
    <React.Fragment>
      <div className="add-user-container">
        <div className="headingdiv">
          <span className="componet-title"> Refill Details</span>
          <div>
            <button onClick={() => navigate(-1)}>Back</button>
          </div>
        </div>
        <div className="option-btn">
          <button onClick={handleSubmit}>Save as draft </button>
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
            Generate Refill Request{" "}
          </button>
        </div>

        <div className="componet-sub-title">
          <span>Machine Information</span>
        </div>
        <form className="flex-row form-2col-ver">
          <div className="flex-row">
            <div className="input-lable-h-div">
              <label htmlFor="machineid"> Machine Name</label>
              <input
                type="text"
                name="machineid"
                value={inputs.machineid || ""}
                onChange={handleChange}
              />
            </div>
            <div className="input-lable-h-div">
              <DataList
                value={inputs.companyid || ""}
                path={"Company"}
                handleChange={handleChange}
                name={"companyid"}
                option={"companyid"}
                heading={"Machine Code"}
              />
            </div>
            <div className="input-lable-h-div">
              <label htmlFor="machinename">Date</label>
              <input
                type="text"
                name="machinename"
                value={inputs.machinename || ""}
                onChange={handleChange}
              />
            </div>

            <div className="input-lable-h-div">
              <label htmlFor="machinename">Warehouse Name</label>
              <input
                type="text"
                name="machinename"
                value={inputs.machinename || ""}
                onChange={handleChange}
              />
            </div>

            <div>
              <button className="submit-btn">Get Machine</button>
            </div>
          </div>
        </form>
        <div className="componet-sub-title">
          <span>Machine Stock Details</span>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="table_containernew-div">
            <div className="input-lable-v-div">
              <button className="submit-btn">Save</button>
            </div>
            <table>
              <tbody>
                <tr>
                  {stockdetails != null ? (
                    Object.keys(stockdetails[0]).map(
                      (key) =>
                        key != ("_id" || null) && (
                          <th key={key}>
                            <span style={{ textTransform: "capitalize" }}>
                              {key}
                            </span>
                          </th>
                        )
                    )
                  ) : (
                    <td></td>
                  )}
                </tr>

                {stockdetails != null ? (
                  stockdetails.map((item, index) => {
                    return (
                      <tr key={index}>
                        {Object.keys(item)
                          .filter((i) => i !== "_id")
                          .map((input, index) => {
                            if (input == "SLNO") {
                              return <td key={index}>{item[input]}</td>;
                            } else if (input == "Swap") {
                              return (
                                <td key={index}>
                                  <button className="btn_edit">Swap</button>
                                </td>
                              );
                            } else {
                              return (
                                <td key={index}>
                                  <input
                                    style={{
                                      width:
                                        [input] == "SlotCode" ||
                                        [input] == "ClosingStock" ||
                                        [input] == "CurrentStock" ||
                                        [input] == "RefillQuantity" ||
                                        [input] == "SaleQuantity"
                                          ? "100px"
                                          : "300px",
                                    }}
                                    name={[input]}
                                    onChange={handleChange}
                                  />
                                </td>
                              );
                            }
                          })}
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td> Data Not Found </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default TableData4;
