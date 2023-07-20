import React ,{ useState, useEffect }from "react";

import { SuccessAlert, ErrorAlert } from "../middleware/AlertMsg";
import { postReq, putReq, getReq } from "../middleware/AxiosApisCall";
import DataList from "../Partials/DataList";
import { useParams, useNavigate } from "react-router-dom";
function PurchaseStock() {
  const [inputs, setInputs] = useState({});

  const path='purchaseStock'
  const ComponentName='Purchase'
   const navigate=useNavigate()
//   handleChange is used to set the field data
  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  }

//   Handle Submit i used to Purchase the Stock
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await postReq(path, inputs);
    // console.log("SupplierData:", response.data);
    if (response.success) {
      SuccessAlert({
        title: `Add ${ComponentName}`,
        message: `${ComponentName} successfully`,
      });
    //   setPar();
      setInputs({});
      navigate("../purchasestocklist");
      //   setaddproductformstate(false);
    } else {
      ErrorAlert({ title: `Add ${ComponentName}`, message: response.msg });
    }
  };

  return (
    <React.Fragment>
      <div className="add-user-container">
        <div className="headingdiv">
          <span className="componet-title"></span>
          <div>
            <button onClick={() => navigate(-1)}>Back</button>
          </div>
        </div>
        <div className="option-btn">
          <button
            onClick={() => {
              navigate("../purchasestocklist");
            }}
          >
        Purchased  Stock List
          </button>
        </div>
        <div className="add-user-container">
          <div className="componet-sub-title">
            <span>
              {/* {par
                  ? `Update ${ComponentName} Details`
                  : `Add ${ComponentName} Details`} */}
              Purchase Stock
            </span>
          </div>
         
          <form className="flex-col" onSubmit={handleSubmit}>
            {/*  */}
            <div className="input-lable-v-div">
              <DataList
                name={"supplier"}
                value={inputs.supplier || " "}
                path={"listSupplier"}
                option={"supplierName"}
                handleChange={handleChange}
                heading={"Supplier"}
              />
            </div>

            <div className="input-lable-v-div">
              <DataList
                name={"warehouse"}
                value={inputs.warehouse || " "}
                path={"getAllWarehouses"}
                option={"wareHouseName"}
                handleChange={handleChange}
                heading={"Warehouse"}
              />
            </div>
            <div className="input-lable-v-div">
              <DataList
                name={"product"}
                value={inputs.product || " "}
                path={"Product"}
                option={"productname"}
                handleChange={handleChange}
                heading={"Product"}
              />
            </div>
            <div className="input-lable-v-div">
              <label htmlFor="supplierAddress">Product Qty</label>
              <input
                type="number"
                name="productQuantity"
                value={inputs.productQuantity || ""}
                onChange={handleChange}
              />
            </div>
            <div className="input-lable-v-div">
              <label htmlFor="contactPerson">Selling Price</label>
              <input
                type="number"
                name="sellingPrice"
                value={inputs.sellingPrice || ""}
                onChange={handleChange}
              />
            </div>
            <div className="input-lable-v-div">
              <label htmlFor="contactPerson">Total Price</label>
              <input
                type="number"
                name="totalPrice"
                value={inputs.totalPrice || ""}
                onChange={handleChange}
              />
            </div>

            <div className="input-lable-v-div">
              <label htmlFor="contactPerson">Invoice Number</label>
              <input
                type="number"
                name="invoiceNumber"
                value={inputs.invoiceNumber || ""}
                onChange={handleChange}
              />
            </div>

            <div className="input-lable-v-div">
              <label htmlFor="contactPerson">GRN Number</label>
              <input
                type="number"
                name="GRN_Number"
                value={inputs.GRN_Number || ""}
                onChange={handleChange}
              />
            </div>
            <div className="input-lable-v-div">
              <DataList
                name={"gstName"}
                value={inputs.gstName || " "}
                path={"AllTax"}
                option={"gstName"}
                handleChange={handleChange}
                heading={"GST"}
              />
            </div>

            <div className="input-lable-h-div">
              <button className="submit-btn" type="submit">
                Purchase
              </button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default PurchaseStock;
