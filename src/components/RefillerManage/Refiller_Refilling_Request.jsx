import React, { useEffect, useState } from "react";
import './Refiller.css'
import { Cookies } from "react-cookie";
import axios from "axios";
import { ErrorAlert, SuccessAlert } from "../middleware/AlertMsg";
import { FaTrash } from "react-icons/fa";

const Refiller_Refilling_Request = () => {
  const cookies = new Cookies();
  const token = cookies.get('JWTcookie');
  const [companies, setCompanies] = useState();
  const [showTable, setshowTable] = useState(false);
  const [machine, setMachine] = useState();
  const [deletedSlots, setDeletedSlots] = useState(null);
  const [removedArray, setRemovedArray] = useState([])

  const getCompanies = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/getallmachines', { headers: { 'Authorization': 'Bearer ' + token } })
      const data = res.data.data;
      // console.log('data: ', data);
      setCompanies(data);
    } catch (error) {
      console.log(error);
    }
  }

  const getMachineDetails = async (id) => {
    try {
      const res = await axios.get(`http://localhost:3000/api/getallmachineslots?machineName=${id}`, { headers: { 'Authorization': 'Bearer ' + token } })
      const data = res.data.data;
      // console.log('data: ', data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  const handleMachineId = (e) => {
    const machineName = e.target.value
    // console.log('machineName: ', machineName);
    getMachineDetails(machineName)
      .then(res => {
        if (res !== "") {
          setMachine(res);
          setshowTable(true)
        }
        else {
          setMachine();
          setshowTable(false);
        }
      });
  }

  useEffect(() => {
    getCompanies();
  }, []);

  const handleRefillQty = (id, e) => {
    const newmachine = machine.machineSlot.map((input) => {
      if (input._id === id) {
        const refillValue = e.target.value <= (input.maxquantity - input.currentStock) ? e.target.value : 0;
        if (e.target.value > (input.maxquantity - input.currentStock)) {
          alert("Sharan");
        }
        return {
          ...input,
          refillQuantity: refillValue
        };
      }
      return input;
    });
    setMachine((prevState) => ({ ...prevState, machineSlot: newmachine }));
  };

  const handleCurrentStock = (id, e) => {
    const value = e.target.value;
    const newmachine = machine.machineSlot.map((item) => {
      if (item._id == id) {
        return { ...item, currentStock: value, saleQuantity: item.closingStock - Number(value) };
      }
      return item;
    });
    setMachine((prevState) => ({ ...prevState, machineSlot: newmachine }));
  };

  const handleSubmit = async () => {
    // need a Refiller token to refill request
    const newToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGMyMjI4YTNiMmRmM2Y5ZmNjODRjYjUiLCJpYXQiOjE2OTA0NDQ0MjZ9.j9xy7VTfj74LDo7yyg0DOyG4YSVNIRMK9CEMXiKqXVE";
    try {
      const res = await axios.post('http://localhost:3000/api/refill/request', machine, { headers: { 'Authorization': 'Bearer ' + newToken } })
      const data = res.data
      // console.log('data: ', data);
      if (data.success) {
        SuccessAlert({
          title: "Success",
          message: "Slots Updated successfully",
        })
      }
      else {
        ErrorAlert({
          title: "Fail",
          message: "Slots not Updated",
        })
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (id) => {
    const shouldDelete = window.confirm("Are you sure you want to delete this item?");
    console.log('shouldDelete: ', shouldDelete);
    if (!shouldDelete) {
      return;
    }
    const removedItem = machine?.machineSlot.find((item) => item._id == id);

    if (removedItem) {
      // Update the removedArray state by adding the removed item
      const arr = [...removedArray, removedItem];
      setRemovedArray(arr);
      setDeletedSlots({ ...machine, machineSlot: arr });
    }

    const newData = machine.machineSlot.filter((item, i) =>
      id !== item._id
    )
    setMachine({ ...machine, machineSlot: newData });
  };
  // console.log('machine: ', machine);
  // console.log("deletedSlots", deletedSlots)

  return (
    <div>
      <div className="selectMachine">
        <label> Machine ID & Company ID</label>
        <select
          onChange={(e) => handleMachineId(e)}
        >
          <option value="">Select Machine</option>
          {companies && companies.map((item, i) => (
            <option key={item._id} value={item.machineid}>{item.machineid} & {item.companyid}</option>
          ))}
        </select>
      </div>
      <div>
        {showTable &&
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
              <table >
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
                      <td>{item.product}</td>
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
                          value={item.refillQuantity}
                          onChange={(e) => handleRefillQty(item._id, e)}
                        />
                      </td>
                      <td >
                        <div className="actionsBtn">
                          <
                            FaTrash
                            onClick={() => handleDelete(item._id)}
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {
              deletedSlots?.machineSlot.length > 0 &&
              <div className="tcontainer">
                <h3>Update Slots with new Product</h3>
                <table >
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
                    {deletedSlots.machineSlot.map((item, index) => (
                      <tr key={item._id}>
                        <td>{item.slot}</td>
                        <td>{item.product}</td>
                        <td>{item.closingStock}</td>
                        <td className="tbody_td">
                          <input
                            className="td_input"
                            type="number"
                            value={item.currentStock}
                            onChange={(e) => handleCurrentStock(item._id, e)}
                          />
                        </td>
                        <td>{item.saleQuantity}</td>
                        <td className="tbody_td">
                          <input
                            className="td_input"
                            type="number"
                            value={item.refillQuantity}
                            onChange={(e) => handleRefillQty(item._id, e)}
                          />
                        </td>
                        <td >
                          <div className="actionsBtn">
                            <
                              FaTrash
                              onClick={() => handleDelete(item._id)}
                            />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            }
            <div className="input-lable-v-div">
              <button className="submit-btn" onClick={handleSubmit}>Submit</button>
            </div>
          </div>
        }

      </div>
    </div>
  );
}

export default Refiller_Refilling_Request;
