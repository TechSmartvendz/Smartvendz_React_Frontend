import React, { useEffect, useState } from "react";
import './Refiller.css'
import { Cookies } from "react-cookie";
import axios from "axios";
import { ErrorAlert, SuccessAlert } from "../middleware/AlertMsg";

const Refiller_Refilling_Request = () => {
  const cookies = new Cookies();
  const token = cookies.get('JWTcookie');
  const [companies, setCompanies] = useState();
  const [showTable, setshowTable] = useState(false);
  const [machine, setMachine] = useState();

  const getCompanies = async () => {
    try {
      const res = await axios.get('http://192.168.1.15:3000/api/getallmachines', { headers: { 'Authorization': 'Bearer ' + token } })
      const data = res.data
      // console.log('data: ', data);
      setCompanies(data);
    } catch (error) {
      console.log(error);
    }
  }

  const getMachineDetails = async (id) => {
    try {
      const res = await axios.get(`http://192.168.1.15:3000/api/getallmachineslots?machineName=${id}`, { headers: { 'Authorization': 'Bearer ' + token } })
      const data = res.data.data;
      console.log('data: ', data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  const handleMachineId = (e) => {
    const machineName = e.target.value
    console.log('machineName: ', machineName);
    getMachineDetails(machineName)
      .then(res => {
        // console.log(res);
        setMachine(res);
        setshowTable(true)
      });
  }

  useEffect(() => {
    getCompanies();
  }, []);

  const handleRefillQty = (id, e) => {
    const newmachine = machine.slots.map((input) => {
      if (input._id === id) {
        return { ...input, refillQty: e.target.value };
      }
      return input;
    });
    setMachine((prevState) => ({ ...prevState, slots: newmachine }));
  };

  const handleCurrentStock = (id, e) => {
    const newmachine = machine.slots.map((input) => {
      if (input._id === id) {
        return { ...input, currentStock: e.target.value };
      }
      return input;
    });
    setMachine((prevState) => ({ ...prevState, slots: newmachine }));
  };

  const handleSubmit = async () => {
    const newToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDc3MDA5YWRhMmVlMWI0MWIxYzJkNGMiLCJpYXQiOjE2ODU1MjA1Mzh9.W2kKhEgLbH5Ib2JHghm_SxmqQ5fawM35AO7WozH2FGo";
    try {
      const res = await axios.post('http://192.168.1.14:3000/api/refillerrequest', machine, { headers: { 'Authorization': 'Bearer ' + newToken } })
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
      {showTable &&

        <div>
          <div className="tcontainer">
            <table>
              <thead>
                <th>Machine Id</th>
                <th>Machine Name</th>
                <th>Company Name</th>
                <th>Admin</th>
              </thead>
              <tbody>
                <tr>
                  <td>{machine.machineID}</td>
                  <td>{machine.machineName}</td>
                  <td>{machine.companyName}</td>
                  <td>{machine.admin}</td>
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
                </tr>
              </thead>
              <tbody>
                {machine.slots.map((item, index) => (
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
                    <td>{item.saleQty}</td>
                    <td className="tbody_td">
                      <input
                        className="td_input"
                        type="number"
                        value={item.refillQty}
                        onChange={(e) => handleRefillQty(item._id, e)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="input-lable-v-div">
            <button className="submit-btn" onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      }
    </div>
  );
}

export default Refiller_Refilling_Request;
