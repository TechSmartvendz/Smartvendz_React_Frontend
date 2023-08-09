import React, { useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import axios from "axios";

const TransactionReport = () => {
  const cookies = new Cookies();
  const token = cookies.get('JWTcookie');
  const [companies, setCompanies] = useState();
  const [payload, setPayload] = useState({
    machineid: undefined,
    startDate: undefined,
    endDate: undefined,
  });

  const getCompanies = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/getallmachines', { headers: { 'Authorization': 'Bearer ' + token } })
      // console.log('res: ', res);
      const data = res.data.data
      setCompanies(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCompanies()
  }, []);

  const { machineid, startDate, endDate, } = payload;

  const downloadReport = async (e) => {
    e.preventDefault()
    if(!machineid ||!startDate || !endDate ){
      return alert("Please Add input fields");
    }
    const data = {
      start: payload.startDate,
      end: payload.endDate,
    //  machine_id: payload.machineid
      machine_id: "SVZBLR0012"
    }
    // const data = {
    const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWJjMTg0NmNkZWVhNjM4Mzk1Y2NkMzMiLCJpYXQiOjE2Mzk3MTY5MzR9.RGFT8fAxiPiTwzbqqW_yB_DWMrqEd97w99SvGNxUA0U`
    const config = {
      headers: { 'Authorization': `Bearer ${token}` }
    }
    let response = await axios.post("https://smartvendz.com/csvreport", data, config);
    // console.log('response: ', response);
    if(response.data.error){
    return alert("Transaction Not Found");
    }
    const url = URL.createObjectURL(new Blob([response.data]));
    // Create a link element
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'file.csv'); // Set the desired file name
    // Append the link to the document body and trigger the download
    document.body.appendChild(link);
    link.click();
    // Clean up the temporary URL and link
    URL.revokeObjectURL(url);
    link.remove();

  }

  // const viewReport = (e) => {
  //   e.preventDefault()
  //   console.log(payload)
  // }
 
  return (
    <div>
      <h3>Transactions Report</h3>
      <form>
        <div className="input-lable-v-div">
          <label> Machine ID & Company ID</label>
          <select
            value={machineid}
            onChange={(e) => setPayload({ ...payload, machineid: e.target.value })}
          >
            <option value="">Select Machine</option>
            {companies && companies.map((item, i) => (
              <option key={item._id} value={item.id}>{item.machineid} & {item.companyid}</option>
            ))}
          </select>
          <div className="flex-col">
            <div className="input-lable-v-div">
              <label>Start Date-Time</label>
              <input type="date" value={startDate} onChange={(e) => setPayload({ ...payload, startDate: e.target.value })} />
            </div>
            <div className="input-lable-v-div">
              <label>End Date-Time</label>
              <input type="date" value={endDate} onChange={(e) => setPayload({ ...payload, endDate: e.target.value })} />
            </div>
            <div className="input-lable-v-div">
              {/* <button onClick={viewReport} className="submit-btn">View Transaction</button> */}
            </div>
            <div className="input-lable-v-div">
              <button onClick={downloadReport} className="submit-btn">Download CSV Report</button>
            </div>
          </div>
        </div>
      </form>
    </div >
  );
}

export default TransactionReport;
