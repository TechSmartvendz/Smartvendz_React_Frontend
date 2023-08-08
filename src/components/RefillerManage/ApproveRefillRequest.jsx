import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Cookies } from 'react-cookie';
import { useNavigate, useParams } from 'react-router-dom'
import Loading from '../Loading';
import { ErrorAlert, SuccessAlert } from '../middleware/AlertMsg';

export const ApproveRefillRequest = () => {
    const { id } = useParams();
    const [isloading, setLoading] = useState(false);
    const [request, setRequest] = useState();
    const cookies = new Cookies();
    const token = cookies.get('JWTcookie');
    const navigate = useNavigate();
    // console.log('token: ', token);
    const getRequests = async (id) => {
        try {
            setLoading(true);
            const res = await axios.get(`http://localhost:3000/api/refillRequest/${id}`, { headers: { 'Authorization': 'Bearer ' + token } })
            const data = res.data.data
            // console.log('data: ', data);
            setRequest(data);
            setLoading(false)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getRequests(id);
    }, []);

    // to approve the refill request 
    const handleApprove = async (requestNumber) => {
        try {
            const res = await axios.post(`http://localhost:3000/api/approverefillrequest/${requestNumber}`,
                {}, { headers: { 'Authorization': `Bearer ${token}` } })
            const data = res.data
            // console.log('data: ', data);
            if (data.success) {
                SuccessAlert({
                    title: "Success",
                    message: "Approved successfully",
                });
                navigate("/managerefillrequest")
            } else {
                ErrorAlert({
                    title: "Fail",
                    message: data.msg,
                });
                navigate("/managerefillrequest")
            }
        } catch (error) {
            ErrorAlert({
                title: "Fail",
                message: error.message,
            });
        }
    }



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
            {isloading ? <Loading /> :
                <div>
                    <div
                        style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: "10px", marginRight: "10px" }}
                    >
                        <p>Status:</p>
                        <div
                            style={{
                                backgroundColor: request?.status == "Pending" ? "red" : "green",
                                padding: '5px',
                                width: '15px',
                                height: "15px",
                                borderRadius: "50%"
                                ,
                            }}
                        >
                        </div>
                    </div>
                    <table >
                        <thead style={{ position: "sticky", top: 0 }}>
                            <tr>
                                {fields.map((item, i) => (
                                    <th key={i}>{item}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {request?.machineSlots
                                .map((item, index) => (
                                    <tr key={item._id}>
                                        <td>{item.slot}</td>
                                        <td>{item.productid.productname}</td>
                                        <td>{item.closingStock}</td>
                                        <td>{item.currentStock}</td>
                                        <td>{item.saleQuantity}</td>
                                        <td>{item.refillQuantity}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                    {/* if return Items array containing return Items then this is rendering */}

                    {request?.returnItems.length > 0 ?
                        <div>
                            <div style={{
                                width: "90%", display: 'flex', margin: "auto", justifyContent: 'flex-start', marginTop: "15px",
                                backgroundColor: "black", color: "white", padding: "7px"
                            }}>
                                <p>Return Items :</p>
                            </div>
                            <table>
                                <thead style={{ position: "sticky", top: 0 }}>
                                    <tr>
                                        {fields.map((item, i) => (
                                            <th>{item}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {request?.returnItems
                                        .map((item, index) => (
                                            <tr key={item._id}>
                                                <td>{item.slot}</td>
                                                <td>{item.productid.productname}</td>
                                                <td>{item.closingStock}</td>
                                                <td>{item.currentStock}</td>
                                                <td>{item.saleQuantity}</td>
                                                <td>{item.refillQuantity}</td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div> :
                        <div></div>
                    }


                    <div className="input-lable-v-div">
                        <button className="submit-btn" onClick={() => handleApprove(request.refillRequestNumber)}>Approve</button>
                    </div>
                </div>
            }
        </div>
    )
}
