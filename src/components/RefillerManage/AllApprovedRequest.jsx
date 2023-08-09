import React, { useEffect, useState } from 'react'
import './Refiller.css';
import { Cookies } from 'react-cookie';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../Loading';
import axios from 'axios';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { ErrorAlert } from '../middleware/AlertMsg';


export const AllApprovedRequest = () => {
    const cookies = new Cookies();
    const token = cookies.get('JWTcookie');
    const [requests, setRequest] = useState([])
    const [isLoading, setLoading] = useState(false);
    const navigate = useNavigate();
    const baseUrl='https://busy-erin-raven-vest.cyclic.app';
    let id;
    const [query, setQuery] = useState({
        refillerName: "",
        date: "",
        wareHouseName: "",
        machineName: ""
    });

    const { refillerName, date, wareHouseName, refillRequestNumber, machineName } = query;
    const getRequests = async () => {
        try {
            setLoading(true);
            const res = await axios.get(`${baseUrl}/api/allrefillingrequest/?status=Approved&refillerName=${refillerName}&date=${date}&wareHouseName=${wareHouseName}&machineName=${machineName}`,
                { headers: { 'Authorization': 'Bearer ' + token } })
            const data = res.data.data;
            setRequest(data);
            setLoading(false)
        } catch (error) {
            // console.log(error);
            ErrorAlert({
                title: "Fail",
                message: error.message,
            });
        }
    }


    useEffect(() => {
        id = setTimeout(() => {
            getRequests()
        }, 1000);

        return () => {
            // console.log('id: ', id);
            clearTimeout(id);
        };
    }, [query]);

    const setFormat = (dateString) => {
        const date = new Date(dateString);
        const formattedDate = date.toLocaleString();
        return formattedDate;
    }

    const handleInputChange = (fieldName, value) => {
        setQuery(prevQuery => ({
            ...prevQuery,
            [fieldName]: value
        }));

    };

    const handleDelete = (id) => {
        // console.log('id: ', id);
    };

    // console.log("requests", requests)
    // console.log("query", query)

    return (
        <div style={{ width: "100%", height: "100vh" }}>
            <div >
                <button onClick={() => navigate(-1)}>Back</button>
            </div>
            {isLoading ? <Loading /> :
                <div>
                    <div>
                        <h3>All Approved Request's</h3>

                        <div className='filter'>

                            <input
                                type="text"
                                placeholder="Filter By Refiller Name"
                                value={query.refillerName}
                                onChange={e => handleInputChange('refillerName', e.target.value)}
                            />
                            <input
                                type="date"
                                value={query.date}
                                onChange={e => handleInputChange('date', e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Filter By Warehouse Name"
                                value={query.wareHouseName}
                                onChange={e => handleInputChange('wareHouseName', e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Filter By Machine Name"
                                value={query.machineName}
                                onChange={e => handleInputChange('machineName', e.target.value)}
                            />
                        </div>
                        {requests.length == 0 ?
                            <div style={{
                                width: "90%", display: 'flex', margin: "auto", justifyContent: 'Center', marginTop: "40px",
                                backgroundColor: "black", color: "white", padding: "7px"
                            }}>
                                <p>No Data Found</p>
                            </div>
                            : <table>
                                <thead>
                                    <tr>
                                        <th>Sr.No</th>
                                        <th>Date</th>
                                        <th>Reguest No</th>
                                        <th>Refiller Name</th>
                                        <th>Machine Name</th>
                                        <th>WareHouse</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        requests?.map((item, i) => (
                                            <tr key={item._id}>
                                                <td>{i + 1}</td>
                                                <td>{setFormat(item.date)}</td>
                                                <td>{item.refillingRequestNumber}</td>
                                                <td>{item.refillerName}</td>
                                                <td>{item.machineName}</td>
                                                <td>{item.warehouseName}</td>
                                                <td>
                                                    <div
                                                        style={{ display: 'flex', justifyContent: 'center' }}
                                                    >
                                                        <div
                                                            style={{
                                                                backgroundColor: item.status == "Pending" ? "red" : "green",
                                                                padding: '5px',
                                                                width: '4px',
                                                                height: "4px",
                                                                borderRadius: "100%",
                                                            }}
                                                        >
                                                        </div>
                                                    </div>
                                                </td>
                                                <td >
                                                    <div className="actionsBtn">
                                                        <Link to={`/refillermanager/managerefillrequest/${item._id}`}>
                                                            <FaEdit />
                                                        </Link>
                                                        <FaTrash
                                                            onClick={() => handleDelete(item._id)}
                                                        />
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>}
                    </div>
                </div>
            }
        </div>
    );
}
