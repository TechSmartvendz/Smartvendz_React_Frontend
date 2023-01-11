import { useState} from "react";
import MachineContext from "../../Context/MachineContext";


function Addnewmachine() {


  const [array,setArray]=useState([])
  const [inputdata,setInputdata]=useState({slno:"",slotname:"",materialname:"",currentstock:"",initialstock:"",notinuse:""})

  
  let {slotname,materialname,currentstock,initialstock,notinuse}=inputdata;
  
  function addTableRow()
  {  
    if(slotname==="" ||  currentstock==="" || initialstock===""){
      alert("please enter data in the form");

    }else{
      setArray([...array,{slotname,materialname,currentstock,initialstock,notinuse}])
      console.log(inputdata)
      setInputdata({slno:"",slotname:"",materialname:"",currentstock:"",initialstock:"",notinuse:""})
    }
   
  }
function changeData(e)
  {  
    setInputdata({...inputdata,[e.target.name]:e.target.value})
  }
  
  function deleteAddmachine(i)
  {
console.log(i)
  
   
   const total=[...array]
   total.splice(i,1)
   setArray(total);
  }




  return (
    <>
      <div className="add-user-container">
        <div>
          <span className="componet-title">Add New Machine</span>
        </div>
        <form className="flex-row form-2col-ver">
          <div className="componet-sub-title">
            <span>Machine Details</span>
          </div>
          <div className="flex-col ">
            <div className="flex-row">
              <div className="input-lable-h-div">
                <label htmlFor="machineName">Machine Name</label>
                <input name="machineName" />
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="machineID">Mchine ID</label>
                <input name="machineID" />
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="country">Country</label>
                <select name="country">
                  <option>India</option>
                  <option>Nepal</option>
                  <option>Shrri Lanka</option>
                </select>
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="state">State</label>
                <select name="state">
                  <option>Karnataka</option>
                  <option>Delhi</option>
                  <option>Maharasthara</option>
                </select>
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="city">City</label>
                <select name="city">
                  <option>Banglore</option>
                  <option>Manglore</option>
                  <option>Mysore</option>
                </select>
              </div>
              <div className="input-lable-h-div">
                <label htmlFor="area">Area</label>
                <select name="area">
                  <option>HSR-Layout</option>
                  <option>Electroni City</option>
                  <option>BTM-Layout</option>
                </select>
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="address">Address</label>
                <input name="address" />
              </div>
              <div className="input-lable-h-div">
                <label htmlFor="building">Building</label>
                <input name="building" />
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="installLocation">Install Location</label>
                <input name="installLocation" />
              </div>
            </div>

            <div className="flex-row">
              <div className="input-lable-h-div">
                <label htmlFor="productType">Product Type</label>
                <select name="productType">
                  <option>Snacks Vending</option>
                  <option>IT Vending</option>
                  <option>Stationary Vending</option>
                </select>
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="totalSlot">Total Slots</label>
                <input type="number" name="totalSlot" />
              </div>
              <div className="input-lable-h-div">
                <label htmlFor="companyId">Company</label>
                <select name="companyId">
                  <option>BOSCH</option>
                  <option>Juniper</option>
                  <option>MIQ</option>
                  <option>Diageo</option>
                </select>
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="clientUserId">Client User</label>
                <select name="clientUserId">
                  <option>Raghu</option>
                  <option>Neelesh</option>
                  <option>Kuldeep</option>
                  <option>Vinayak</option>
                </select>
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="AdminId">Admin</label>
                <select name="AdminId">
                  <option>Chetan</option>
                  <option>Dinesh</option>
                  <option>Hemant</option>
                  <option>Swapnil</option>
                </select>
              </div>
              <div className="input-lable-h-div">
                <label htmlFor="refiller">Refiller</label>
                <select name="refiller">
                  <option>Rakesh</option>
                  <option>Kartika</option>
                  <option>Anil</option>
                  <option>Vanky</option>
                </select>
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="refiller">Refiller</label>
                <select name="refiller">
                  <option>Rakesh</option>
                  <option>Kartika</option>
                  <option>Anil</option>
                  <option>Vanky</option>
                </select>
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="warehouse">Ware House</label>
                <select name="warehouse">
                  <option>HSR warehouse</option>
                  <option>Manyta Warehouse</option>
                  <option>WhiteField Wareouse</option>
                  <option>JP Nagar WareHouse</option>
                </select>
              </div>
              <div className="input-lable-h-div">
                <label htmlFor="remark">Remark</label>
                <textarea />
              </div>
            </div>
          </div>
          <div>

          <div className="flex-col">
            <div className="input-lable-v-div">
              <button className="submit-btn">Save</button>
            </div>
          </div>
        </div> 
        </form>
      </div>
<div className="add-user-container"> {/* Add foem for add slot*/}

</div >
      <div className="add-user-container">
      <div className="componet-sub-title">
      <span>Add Slots</span>
    </div>
    <div className="option-btn">
    <button onClick={addTableRow}>
      Add Machine Slots
    </button>
  </div>
    <div className="table_container-div">
    <table>
      <tbody>
        <tr>
          <th>Slno</th>
          <th>Slot Name</th>
          <th>Material Name</th>
          <th>Current Stock</th>
          <th>Initial Stock</th>
          <th>Not In Use</th>
          <th>Delete</th>
        </tr>

        {array &&
          array.map((item, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{item.slotname}</td>
                <td>{item.materialname}</td>
                <td>{item.currentstock}</td>
                <td>{item.initialstock}</td>

                <td>{item.notinuse}</td>
                <td>
                  <button
                    className="mmDelete_btn"
                    onClick={() => deleteAddmachine(i)}
                  >
                    Delete
                  </button>
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

export default Addnewmachine;
