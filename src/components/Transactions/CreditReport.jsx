import React,{useState} from "react";

function CreditReport() {
  const [data, setData] = useState({
    start:"",
    end:"",
    mid:"",
    cid:""    
  });
  const credittransactionreport = [
    {
      createddate: "2023-01-06T05:45:28.509Z",
      creditmonth: "January 2023",
      cardno: "111029",
      employeename: "Kuldeep Test1",
      email: "kuldeep@smartvendz.com",
      manageremail: "vinayak7ambali@gmail.com",
      costcenter: "TEST1",
      creditamount: "1000000",
      transactionamount: "0",
      creditbalance: "10000",
      activestatus: "true",
    },
    {
      createddate: "2023-01-06T05:45:28.509Z",
      creditmonth: "January 2023",
      cardno: "111029",
      employeename: "Kuldeep Test1",
      email: "kuldeep@smartvendz.com",
      manageremail: "vinayak7ambali@gmail.com",
      costcenter: "TEST1",
      creditamount: "1000000",
      transactionamount: "0",
      creditbalance: "10000",
      activestatus: "true",
    },
    {
      createddate: "2023-01-06T05:45:28.509Z",
      creditmonth: "January 2023",
      cardno: "111029",
      employeename: "Kuldeep Test1",
      email: "kuldeep@smartvendz.com",
      manageremail: "vinayak7ambali@gmail.com",
      costcenter: "TEST1",
      creditamount: "1000000",
      transactionamount: "0",
      creditbalance: "10000",
      activestatus: "true",
    }
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
          <span className="componet-title">Credit Report</span>
        </div>
        <div className="componet-sub-title">
          <span>Search Credit Report</span>
        </div>

        <form className="flex-col">
          <div className="input-lable-v-div">
            <label htmlFor="start">Start</label>
            <input 
              type="text" 
              id="start" 
              placeholder="Start ..."   
              name="start"
              onChange={handleChange}
              required
              />
              {/* value={data.start} */}
              
          </div>

          <div className="input-lable-v-div">
            <label htmlFor="end">End</label>
            <input 
              type="text" 
              id="end" 
              placeholder="End ..."   
              onChange={handleChange}
              required
              />
              {/* value={data.end} */}
          </div>

          <div className="input-lable-v-div">
            <label htmlFor="mid">Machine id</label>
            <input 
              type="text" 
              id="mid"
              placeholder="Enter Machineid"   
              onChange={handleChange}
              required
              />
              {/* value={data.mid} */}
          </div>

          <div className="input-lable-v-div">
            <label htmlFor="cid">Company id</label>
            <input 
              type="text" 
              id="cid" 
              placeholder="Enter Companyid "   
              onChange={handleChange}
              required
              />
              {/* value={data.cid} */}

          </div>
          <div className="input-lable-v-div">
            <button className="submit-btn" type="submit">Refresh</button>
          </div>
        </form>
      </div>

      <div>
        <div className="componet-sub-title">
          <span>Credit Recharge Details</span>
        </div>

        <div className="table_container-div">
          <table>
            <tbody>
              <tr>
                <th>Created date</th>
                <th>Credit month</th>
                <th>Card number</th>
                <th>Employee name</th>
                <th>Email</th>
                <th>Manager Email</th>
                <th>Cost center</th>
                <th>Credit amount</th>
                <th>Transaction amount</th>
                <th>Credit balance</th>
                <th>Active status</th>
              </tr>

              {credittransactionreport.map((data, key) => {
                return (
                  <tr key={key}>
                    <td>{data.createddate}</td>
                    <td>{data.creditmonth}</td>
                    <td>{data.cardno}</td>
                    <td>{data.employeename}</td>
                    <td>{data.email}</td>
                    <td>{data.manageremail}</td>
                    <td>{data.costcenter}</td>
                    <td>{data.creditamount}</td>
                    <td>{data.transactionamount}</td>
                    <td>{data.creditbalance}</td>
                    <td>{data.activestatus}</td>
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

export default CreditReport;
