import React, { useState, useEffect } from "react";
import { SuccessAlert, ErrorAlert } from "../middleware/AlertMsg";
import { postReq, putReq, getReq } from "../middleware/AxiosApisCall";
import DataList from "../Partials/DataList";
import { useParams, useNavigate } from "react-router-dom";
const AddSupplier = () => {
  const path = "addSupplier";
  // This path is used to get Supplier by ID
  const getpath = "listSupplier";
  const navigate = useNavigate();

  const ComponentName = "Supplier";
  const { _id } = useParams();
  console.log(_id);
  const [inputs, setInputs] = useState({});
  const [itemid, setItemid] = useState(_id);
  const [tableRefresh, setTableRefresh] = useState(0);
  const [par, setPar] = useState();

  const [selectedValue, setSelectedValue] = useState();
  const [wareHouse, setWareHouse] = useState();

  const WarehouseList = async () => {
    const response = await getReq(`getAllWarehouses/Datalist`);
    setWareHouse(response.data[0]);
  };
  // console.log("WAREHOSE:", wareHouse);

  useEffect(() => {
    WarehouseList();
  }, []);

 

  // This function And Api is used to get particular Supplier details on input field for edit
  const loadDate = async () => {
    const response = await getReq(`${getpath}/${itemid}`);
    console.log("Supplierss Data:", response.data);
    if (response.data) {
      //   setPar(response.data._id);
      setInputs(response.data[0]);
      console.log("GetOnInput:", inputs);
    } else {
      setInputs(null);
    }
  };

  // This function will only be call when itemid is gets true
  useEffect(() => {
    if (itemid) {
      loadDate();
    }
  }, [itemid]);

  //TODO:Handle Form Data Add Form
  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  }

  // This is used to create new supplier
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await postReq(path, inputs);
    console.log("SupplierData:", response.data);
    if (response.success) {
      SuccessAlert({
        title: `Add ${ComponentName}`,
        message: `${ComponentName} Added successfully`,
      });
      setPar();
      setInputs({});
      navigate("../listSupplier");
      //   setaddproductformstate(false);
    } else {
      ErrorAlert({ title: `Add ${ComponentName}`, message: response.msg });
    }
  };
  console.log("InputSupplier:", inputs);
  return (
    <React.Fragment>
      <div className="add-user-container">
        <div className="headingdiv">
          <span className="componet-title"></span>
          <div>
            <button onClick={() => navigate(-1)}>Back</button>
          </div>
        </div>

        <div className="add-user-container">
          <div className="componet-sub-title">
            <span>
              {/* {par
                  ? `Update ${ComponentName} Details`
                  : `Add ${ComponentName} Details`} */}
              Add Supplier Details
            </span>
          </div>
          <form className="flex-col" onSubmit={handleSubmit}>
            {/*  */}
            <div className="input-lable-v-div">
              <label htmlFor="supplierName">Supplier Name</label>
              <input
                type="text"
                name="supplierName"
                value={inputs.supplierName || ""}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-lable-v-div">
              <label htmlFor="supplierEmail">Supplier Email</label>
              <input
                type="text"
                name="supplierEmail"
                value={inputs.supplierEmail || ""}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-lable-v-div">
              <label htmlFor="supplierPhone">Supplier Phone</label>
              <input
                type="text"
                name="supplierPhone"
                value={inputs.supplierPhone || ""}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-lable-v-div">
              <label htmlFor="supplierAddress">Supplier Address</label>
              <input
                type="text"
                name="supplierAddress"
                value={inputs.supplierAddress || ""}
                onChange={handleChange}
              />
            </div>
            <div className="input-lable-v-div">
              <label htmlFor="contactPerson">Contact Person</label>
              <input
                type="text"
                name="contactPerson"
                value={inputs.contactPerson || ""}
                onChange={handleChange}
              />
            </div>
            <div className="input-lable-v-div">
              <DataList
                name={"country"}
                value={inputs.country || null}
                path={"Country"}
                option={"country"}
                handleChange={handleChange}
                heading={"Country"}
              />
            </div>

            <div className="input-lable-v-div">
              <DataList
                name="state"
                value={inputs.state || " "}
                path={"State"}
                option={"state"}
                handleChange={handleChange}
                heading={"State"}
              />
            </div>

            <div className="input-lable-v-div">
              <DataList
                name={"city"}
                value={inputs.city || " "}
                path={"City"}
                option={"city"}
                handleChange={handleChange}
                heading={"City"}
              />
            </div>

            <div className="input-lable-v-div">
              <DataList
                name={"area"}
                value={inputs.area || " "}
                path={"Area"}
                option={"area"}
                handleChange={handleChange}
                heading={"Area"}
              />
            </div>
            <div className="input-lable-v-div">
              <label htmlFor="department">Pincode</label>
              <input
                type="text"
                name="pincode"
                value={inputs.pincode || ""}
                onChange={handleChange}
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
            {/* <div className="input-lable-v-div">
                <label htmlFor="warehouse">WareHouse</label>
                <input
                  type="text"
                  name="warehouse"
                  value={inputs.warehouse || ""}
                  onChange={handleChange}
                />
              </div> */}

            <div className="input-lable-h-div">
              <button className="submit-btn" type="submit">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AddSupplier;
