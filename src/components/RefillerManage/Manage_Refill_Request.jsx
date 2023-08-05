import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import './Refiller.css';
import axios from "axios";
import { Cookies } from "react-cookie";
import { Link } from "react-router-dom";
import Loading from "../Loading";

const Manage_Refill_Request = () => {
  const cookies = new Cookies();
  const token = cookies.get('JWTcookie');
  const [request, setRequest] = useState()
  const [isLoading, setLoading] = useState(false);

  const getRequests = async () => {
    try {
      setLoading(true);
      const res = await axios.get('http://localhost:3000/api/allrefillingrequest', { headers: { 'Authorization': 'Bearer ' + token } })
      const data = res.data.data;
      setRequest(data);
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getRequests();
  }, []);

  const setFormat = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleString();
    return formattedDate;
  }
  // console.log("request", request)

  const handleDelete = (id) => {
    // console.log('id: ', id);
  };

  return (
    <div style={{ width: "100%", height: "100vh"}}>
      {isLoading ?  <Loading />:
      <div>
        <div >
          <h3>Manage Re-fill Request Lists</h3>
          <button onClick={() => navigate(-1)}>Back</button>
        </div>
        <div>
          <table>
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
                request?.map((item, i) => (
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
                            backgroundColor: item.status=="Pending" ? "red" : "green",
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
          </table>
        </div>
      </div>
      }
    </div>
  );
}

export default Manage_Refill_Request;