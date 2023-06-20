import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Cookies } from 'react-cookie';
import { useParams } from 'react-router-dom'

export const DataTable = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [request, setRequest] = useState();
    const cookies = new Cookies();
    // const token = cookies.get('JWTcookie');
    const Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDg5M2YxM2ZmY2NlZGNlOWI0NjBjNjciLCJpYXQiOjE2ODY3MTYxNzl9._bo9DXBMtpbBHICr0ehv4292GSCAV97ekgY60gcXFG0";
    // console.log('id: ', id);
    const getRequests = async (id) => {
        try {
            setLoading(true);
            const res = await axios.get(`http://192.168.1.15:3000/api/allrefillingrequestbyid?id=${id}`, { headers: { 'Authorization': 'Bearer ' + Token } })
            const data = res.data
            setRequest(data);
            setLoading(false)

        } catch (error) {
            console.log(error);
        }
    }
    // 59091996425273
    const handleApprove = async (requestNumber) => {
        // const superToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDg5M2YxM2ZmY2NlZGNlOWI0NjBjNjciLCJpYXQiOjE2ODY3MTYxNzl9._bo9DXBMtpbBHICr0ehv4292GSCAV97ekgY60gcXFG0'
        // console.log('requestNumber: ', requestNumber);
        try {
            const res = await axios.post(`http://192.168.1.15:3000/api/approverefillrequest?refillRequestNumber=${requestNumber}`,{}, { headers: { 'Authorization': `Bearer ${Token}` } })
            const data = res.data
            console.log('data: ', data);
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getRequests(id);
    }, []);

    const fields = [
        "Slot Name",
        "Product",
        "Closing Stock",
        "Current Stock",
        "Sale Qty",
        "Refill Qty",
    ]
    return (
        <div>
            <table >
                <thead style={{ position: "sticky", top: 0 }}>
                    <tr>
                        {fields.map((item, i) => (
                            <th>{item}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {!loading && request.machineSlot
                        .map((item, index) => (
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
            <div className="input-lable-v-div">
                <button className="submit-btn" onClick={() => handleApprove(request.refillRequestNumber)}>Submit</button>
            </div>
        </div>
    )
}
