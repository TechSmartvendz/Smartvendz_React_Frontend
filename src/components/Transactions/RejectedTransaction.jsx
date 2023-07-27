import React, { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";

import { template } from "../Partials/FormFields";
import { Cookies } from "react-cookie";
import axios from "axios";

export const RejectedTransaction = () => {
    const cookies = new Cookies();
    const token = cookies.get('JWTcookie');
    const [companies, setCompanies] = useState();
    const [payload, setPayload] = useState({
        machineid: undefined,
        startDate: undefined,
        endDate: undefined,
    });
    const [array, setArray] = useState([])

    const getCompanies = async () => {
        try {
            const res = await axios.get('http://localhost:3000/api/getallmachines', { headers: { 'Authorization': 'Bearer ' + token } })
            // console.log('res: ', res);
            const data = res.data
            setCompanies(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCompanies()
    }, [])

    const downloadReport = async (e) => {
        e.preventDefault()
        // const himanshu = {
        //   start: payload.startDate,
        //   end: payload.endDate,
        //  machine_id: payload.machineid
        // }
        const { startDate, endDate, machineid } = payload;

        try {
            const response = await axios.get(`https://smartvendz.com/rejectedCards?startDate=${startDate}&endDate=${endDate}&machineId=${machineid}`, {
                responseType: 'blob', // Set the response type to 'blob'
            })
            console.log('response: ', response.data);
            // Create a temporary URL for the blob object
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

        } catch (error) {
            console.log(error);
        }
    }

    const viewReport = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.get(`https://smartvendz.com/rejectedCards?startDate=2023-05-06&endDate=2023-05-08&machineId=SVZBLR0012`)
            console.log('response: ', response.data);
           let a=response.data.trim().split(" ");
           console.log('a: ', a);
            
            // setArray(response.data);
            // console.log(array);

        } catch (error) {
            console.log(error);
        }
    }
    const { machineid, startDate, endDate, } = payload
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
                            <button onClick={viewReport} className="submit-btn">View Transaction</button>
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
