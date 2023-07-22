import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getReq, postReq } from "../middleware/AxiosApisCall";
import DataList from "../Partials/DataList";
import { SuccessAlert, ErrorAlert } from "../middleware/AlertMsg";
function TransferStock() {
  const [warehouse, setWarehouse] = useState("HSR Layout");
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({});
  const [warehouseList, setWarehouseList] = useState(null);
  const path = "sendStockTransferRequest";

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  // console.log('Inputs:',inputs)
  // const handleChange2 = (event) => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   setInputs2((values) => ({ ...values, [name]: value }));
  // };
  // console.log("setInputs", inputs);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await postReq(path, inputs);
    if (response.success) {
      // setInputs(response.data)
      SuccessAlert({
        title: "Ware House",
        message: "Ware House Added successfully",
      });
      setInputs("");
    
    } else {
      ErrorAlert({ title: "Ware House", message: response.msg });
    }
  };
  const loadList = async () => {
    const response = await getReq(`getAllWarehouses/Datalist`);
    setWarehouseList(response.data);
    // console.log(response);
  };

  useEffect(() => {
    loadList();
  }, []);



  
  return (
    <React.Fragment>
      <div className="add-user-container">
        <div className="headingdiv">
          {/* {itemid ? 'Edit Company' :'Add Company Details'} */}
          <span className="componet-title"> </span>
          <div>
            <button onClick={() => navigate(-1)}>Back</button>
          </div>
        </div>
        <div className="option-btn">
          {/* <button onClick={()=>{navigate("/companymanage/listcompany")}}>Company List</button> */}
        </div>

        {/* onSubmit={handleSubmit} */}
        <form className="flex-row form-2col-ver" onSubmit={handleSubmit}>
          <div className="componet-sub-title">
            <span>Transfer Stocks</span>
          </div>

          <div className="flex-row">
            <div className="input-lable-h-div">
              <label htmlFor="fromwarehouse">From Warehouse:</label>

              <select
                name="fromWarehouse"
                value={inputs.fromWarehouse}
                onChange={handleChange}
              >
                <option value="Select Warehouse">Select Warehouse</option>
                {warehouseList != null ? (
                  warehouseList.map((warehouse,i) => {
                    return <option key={i}>
                   
                    {warehouse.wareHouseName}
                    </option>;
                  })
                ) : (
                  <option>warehouse not found</option>
                )}
              </select>
            </div>

            <div className="input-lable-h-div">
              <DataList
                name={"toWarehouse"}
                value={inputs.toWarehouse || " "}
                path={"getAllWarehouses"}
                option={"wareHouseName"}
                handleChange={handleChange}
                heading={"To Warehouse"}
              />
            </div>

            <div className="input-lable-h-div">
              <DataList
                name={"productName"}
                value={inputs.productName || " "}
                path={"Product"}
                option={"productname"}
                handleChange={handleChange}
                heading={"Product"}
              />
            </div>

            <div className="input-lable-h-div">
              <label htmlFor="quantity">Quantity:</label>
              <input
                name="quantity"
                type="number"
                value={inputs.quantity || ""}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-lable-h-div">
              <button className="submit-btn" type="submit">
                {/* {itemid  ? 'Update' :'Save'}   */}
                Transfer
              </button>
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default TransferStock;
