import React, { useEffect, useState } from "react";
import "./Refiller.css";
import { Cookies } from "react-cookie";
import axios from "axios";
import { ErrorAlert, SuccessAlert } from "../middleware/AlertMsg";
import { FaTrash } from "react-icons/fa";
import DataList from "../Partials/DataList";
import Loading from "../Loading";
import { useNavigate } from "react-router";

const Refiller_Refilling_Request = () => {
  const cookies = new Cookies();
  const token = cookies.get("JWTcookie");
  const [companies, setCompanies] = useState();
  const [showTable, setshowTable] = useState(false);
  const [isLoading, setLoading] = useState(false)
  const [machine, setMachine] = useState();
  const [updatedSlots, setUpdatedSlots] = useState([]);
  const [returnItems, setReturnItems] = useState([]);
  const [machineId, setMachineId] = useState();
  const navigate = useNavigate()

  const getCompanies = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/getallmachines", {
        headers: { Authorization: "Bearer " + token },
      });
      const data = res.data.data;
      // console.log('data: ', data);
      setCompanies(data);
    } catch (error) {
      // console.log(error);
      ErrorAlert({
        title: "Fail",
        message: "Please refresh the page",
      });
    }
  };

  const getMachineDetails = async (id) => {
    setLoading(true);
    setshowTable(true);
    try {
      const res = await axios.get(
        `http://localhost:3000/api/getallmachineslots?machineid=${id}`,
        { headers: { Authorization: "Bearer " + token } }
      );
      const data = res.data.data;
      // console.log('data: ', data);
      return data;
    } catch (error) {
      console.log(error);
      setLoading(false);
      ErrorAlert({
        title: "Fail",
        message: "Please refresh the page",
      });
    }
  };

  const handleMachineId = (e) => {
    const newMachineId = e.target.value;
    setMachineId(newMachineId);
    setReturnItems([]);

    getMachineDetails(newMachineId).then((res) => {
      if (res !== "") {
        setMachine(res);
        setshowTable(true);
      } else {
        setMachine();
        setReturnItems([])
        setshowTable(false);
      }
      setLoading(false);
    });
  };

  useEffect(() => {
    getCompanies();
  }, [machineId, returnItems]);

  const handleRefillQty = (id, e) => {
    const newmachine = machine.machineSlot.map((input) => {
      if (input._id === id) {
        const refillValue =
          e.target.value <= input.maxquantity - input.currentStock
            ? e.target.value
            : 0;
        if (e.target.value > input.maxquantity - input.currentStock) {
          alert("Refill Quantity not greater than Slot capacity");
          e.target.value = refillValue
        }
        return {
          ...input,
          refillQuantity: refillValue,
        };
      }
      return input;
    });
    setMachine((prevState) => ({ ...prevState, machineSlot: newmachine }));
  };

  const handleCurrentStock = (id, e) => {
    const value = e.target.value;
    console.log('value: ', value);
    const newmachine = machine.machineSlot.map((item) => {
      if (item._id == id) {
        const CurrentStockValue = value <= item.maxquantity ? value : 0;
        if (value > item.maxquantity) {
          alert("Current Stock is not greater than Slot Capacity");
          e.target.value = CurrentStockValue
        }
        return {
          ...item,
          currentStock: CurrentStockValue,
          // saleQuantity: value <= item.maxquantity && value !== "" && CurrentStockValue !== 0 ? item.closingStock - Number(value) : 0,
          saleQuantity: Number(value) <= item.maxquantity && value !== ""? item.closingStock - Number(value) : 0,
        };
      }
      return item;
    });
    setMachine((prevState) => ({ ...prevState, machineSlot: newmachine }));
  };

  const handleDelete = (id) => {
    const shouldDelete = window.confirm("Are you sure to delete this item ?");
    // console.log('shouldDelete: ', shouldDelete);
    if (!shouldDelete) {
      return;
    }
    const removedItem = machine?.machineSlot.find((item) => item._id == id);

    if (removedItem) {
      if (removedItem.currentStock == 0) {
        return alert("Please First fill current Stock Of Item")
      }
      // Update the returnItems state by adding the removed item
      const arr = [...returnItems, removedItem];
      setReturnItems(arr);
      // setUpdatedSlots({ ...machine, machineSlot: arr });
      setUpdatedSlots(arr);
    }
    const newData = machine.machineSlot.filter((item, i) => id !== item._id);
    setMachine({ ...machine, machineSlot: newData });
  };
  // console.log('machine: ', machine);
  // console.log("updatedSlots", updatedSlots)
  // console.log('removedArray: ', removedArray);

  const handleProductUpdateSlot = (event, id) => {
    const value = event.target.value;
    const newupdatedSlots = updatedSlots.map((item, i) => {
      if (id == item._id) {
        return {
          ...item,
          productname: value
        }
      }
      else {
        return item
      }
    })
    // setUpdatedSlots((prevState) => ({ ...prevState, machineSlot: newupdatedSlots }));
    setUpdatedSlots(newupdatedSlots);
  }

  const handleUpdatedProductRefillQty = (id, e) => {
    const newmachine = updatedSlots.map((input) => {
      if (input._id === id) {
        const refillValue = e.target.value <= input.maxquantity ? e.target.value : 0;
        if (e.target.value > input.maxquantity) {
          alert("Refill Quantity not greater than Slot capacity");
        }
        return {
          ...input,
          refillQuantity: refillValue,
        };
      }
      return input;
    });
    setUpdatedSlots(newmachine);
  };

  const handleSubmit = async () => {
    // need a Refiller token to refill request
    const payload = { ...machine, machineSlot: [...machine.machineSlot, ...updatedSlots], returnItems }
    // console.log('data: ', data);
    const newToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGMyMjI4YTNiMmRmM2Y5ZmNjODRjYjUiLCJpYXQiOjE2OTA0NDQ0MjZ9.j9xy7VTfj74LDo7yyg0DOyG4YSVNIRMK9CEMXiKqXVE";
    try {
      const res = await axios.post(
        "http://localhost:3000/api/refill/request",
        payload,
        { headers: { Authorization: "Bearer " + newToken } }
      );
      const data = res.data;
      // console.log('data: ', data);
      if (data.success) {
        SuccessAlert({
          title: "Success",
          message: "Slots Updated successfully",
        });
        navigate("/")
      } else {
        ErrorAlert({
          title: "Fail",
          message: "Slots not Updated,Please try again",
        });
      }
    } catch (error) {
      // console.log(error);
      ErrorAlert({
        title: "Fail",
        message: "Slots not Updated,Please try again",
      });
    }
  };


  return (
    <div>
      <div className="selectMachine">
        <label> Machine ID & Company ID</label>
        <select onChange={(e) => handleMachineId(e)} >
          <option value="">Select Machine</option>
          {companies &&
            companies.map((item, i) => (
              <option key={item._id} value={item._id}>
                {item.machineid} & {item.companyid}
              </option>
            ))}
        </select>
      </div>
      {showTable && <div>
        {!isLoading ?
          <div>
            <div className="tcontainer">
              <table>
                <thead>
                  <tr>
                    <th>Machine Name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{machine.machineName}</td>
                  </tr>
                </tbody>
              </table>
              <table>
                <thead style={{ position: "sticky", top: 0 }}>
                  <tr>
                    <th>Slot Name</th>
                    <th>Product</th>
                    <th>Closing Stock</th>
                    <th>Current Stock</th>
                    <th>Sale Qty</th>
                    <th>Refill Qty</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {machine.machineSlot.map((item, index) => (
                    <tr key={item._id}>
                      <td>{item.slot}</td>
                      <td>{item.productname}</td>
                      <td>{item.closingStock}</td>
                      <td className="tbody_td">
                        <input
                          className="td_input"
                          type="number"
                          // value={item.currentStock}
                          placeholder={item.currentStock}
                          onChange={(e) => handleCurrentStock(item._id, e)}
                        />
                      </td>
                      <td>{item.saleQuantity}</td>
                      <td className="tbody_td">
                        <input
                          className="td_input"
                          type="number"
                          // value={item.refillQuantity}
                          placeholder={item.refillQuantity}
                          onChange={(e) => handleRefillQty(item._id, e)}
                        />
                      </td>
                      <td>
                        <div className="actionsBtn">
                          <FaTrash onClick={() => handleDelete(item._id)} />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {updatedSlots.length > 0 && (
              <div className="tcontainer">
                <h3>Update Slots with new Product</h3>
                <table>
                  <thead style={{ position: "sticky", top: 0 }}>
                    <tr>
                      <th>Slot Name</th>
                      <th>Product</th>

                      <th>Refill Qty</th>

                    </tr>
                  </thead>
                  <tbody>
                    {updatedSlots?.map((item, index) => (
                      <tr key={item._id}>
                        <td>{item.slot}</td>
                        <td>
                          <DataList
                            value={item.productname || " "}
                            handleChange={(e) => handleProductUpdateSlot(e, item._id)}
                            name={"product"}
                            path={"Product"}
                            option={"productname"}
                            error={"Product Not Found"}
                          />
                        </td>
                        <td className="tbody_td">
                          <input
                            className="td_input"
                            type="number"
                            value={item.refillQuantity}
                            onChange={(e) => handleUpdatedProductRefillQty(item._id, e)}
                          />
                        </td>

                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            <div className="input-lable-v-div">
              <button className="submit-btn" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
          :
          <Loading />
        }
      </div>
      }
    </div>
  );
};

export default Refiller_Refilling_Request;
