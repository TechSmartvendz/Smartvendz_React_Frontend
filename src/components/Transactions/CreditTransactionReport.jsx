import React,{useState} from "react";

function CreditTransactionReport() {
  const [data, setData] = useState({
    startdate: "",
    enddate:"",
    product:"",
    machineid:"",
    companyid:"",
    rfidno:""
  });
  const credittransactionreport = [
    {
      cardno: "4143",
      mid: "SlZV562",
      lockerno: "12",
      item: "HP black i5 500GB",
      eid: "14116",
      email: "null",
      datetime: "7/11/2024 12:47:05",
    },
    {
      cardno: "4143",
      mid: "SlZV562",
      lockerno: "12",
      item: "HP black i5 500GB",
      eid: "14116",
      email: "null",
      datetime: "7/11/2024 12:47:05",
    },
    {
      cardno: "4143",
      mid: "SlZV562",
      lockerno: "12",
      item: "HP black i5 500GB",
      eid: "14116",
      email: "null",
      datetime: "7/11/2024 12:47:05",
    },
    {
      cardno: "4143",
      mid: "SlZV562",
      lockerno: "12",
      item: "HP black i5 500GB",
      eid: "14116",
      email: "null",
      datetime: "7/11/2024 12:47:05",
    },
    {
      cardno: "4143",
      mid: "SlZV562",
      lockerno: "12",
      item: "HP black i5 500GB",
      eid: "14116",
      email: "null",
      datetime: "7/11/2024 12:47:05",
    },
  ];

  function handleChange(event) {
    const{name,value} = event.target
   setData((prevState) => {
     return {
       ...prevState,
       [name]: value
     };
   });
 }
  function handleSubmit(event) {
    event.preventDefault()
    console.log(data)
  }
  return (
    <>
      <div className="add-user-container">
        <div>
          <span className="componet-title">Credit Transaction Report</span>
        </div>
        <div className="componet-sub-title">
          <span>Search Credit Transaction</span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex-col">
            <div className="input-lable-v-div">
              <label htmlFor="start">Start Date-Time</label>

              <input 
                type="date" 
                onChange={handleChange}
                name="startdate"
                value={data.startdate}
                id="start"
                required
              />
            </div>

            <div className="input-lable-v-div">
              <label htmlFor="end">End Date-Time</label>

              <input 
                type="date" 
                onChange={handleChange}
                name="enddate"
                id="end"
                value={data.enddate}
                required
              />
            </div>

            <div className="input-lable-v-div">
              <label htmlFor="product">Product</label>

                  <select
                   value={data.product}
                   onChange={handleChange}
                   name="product"
                   id="product"
                   
                  >
                    <option>All</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
            </div>

            <div className="input-lable-v-div">
              <label htmlFor="machine"> Machine ID</label>

                <select
                    value={data.machineid}
                    onChange={handleChange}
                    name="machineid"
                    id="machine"
                    
                >
                  <option>SVZLOCK001</option>
                  <option>SVZLOCK001</option>
                  <option>SVZLOCK001</option>
                  <option>SVZLOCK001</option>
                </select>
            </div>

            <div className="input-lable-v-div">
              <label htmlFor="company"> Company ID</label>

                <select
                    value={data.companyid}
                    onChange={handleChange}
                    name="companyid"
                    id="company"
                    
                >
                  <option>SVZLOCK001</option>
                  <option>SVZLOCK001</option>
                  <option>SVZLOCK001</option>
                  <option>SVZLOCK001</option>
                </select>
            </div>

            <div className="input-lable-v-div">
              <label htmlFor="rfid">Employee RFID Card No.</label>

                <input 
                    type="text"
                    placeholder="Enter RFID card no"
                    onChange={handleChange} 
                    value={data.rfidno}
                    name="rfidno"
                    id="rfid"
                    required
                />
            </div>

            <div className="input-lable-v-div">
              <button className="submit-btn">Transaction</button>
            </div>
            <div className="input-lable-v-div">
              <button className="submit-btn">CSV Report</button>
            </div>
          </div>
        </form>
      </div>
      <div>
        <div className="componet-sub-title">
          <span>Credit Transactions</span>
        </div>
        <div className="table_container-div">
          <table>
            <tbody>
              <tr>
                <th>Card no</th>
                <th>Machine ID</th>
                <th>Locker NO.</th>
                <th>Item </th>
                <th>Employee ID</th>
                <th>Employee Email</th>
                <th>Date-Time</th>
              </tr>

              {credittransactionreport.map((data, key) => {
                return (
                  <tr key={key}>
                    <td>{data.cardno}</td>
                    <td>{data.mid}</td>
                    <td>{data.lockerno}</td>
                    <td>{data.item}</td>
                    <td>{data.eid}</td>
                    <td>{data.email}</td>
                    <td>{data.datetime}</td>
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

export default CreditTransactionReport;
