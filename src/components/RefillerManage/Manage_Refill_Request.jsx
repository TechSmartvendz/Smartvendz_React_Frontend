import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import './Refiller.css';
import axios from "axios";
import { Cookies } from "react-cookie";
import { Link } from "react-router-dom";

const Manage_Refill_Request = () => {
  const cookies = new Cookies();
  const token = cookies.get('JWTcookie');
  const [loading, setLoading] = useState(true);
  const [request, setRequest] = useState()

  const getRequests = async () => {
    try {
      setLoading(true);
      const res = await axios.get('http://localhost:3000/api/allrefillingrequest', { headers: { 'Authorization': 'Bearer ' + token } })
      const data = res.data.data;
      console.log('data: ', data);
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
    // console.log(formattedDate);
    return formattedDate;
  }

  const handleDelete = (id) => {
    console.log(`Deleting item with id`);
  };

  return (
    <div>
      <div >
        <h3>Manage Re-fill Request Lists</h3>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>
                Reguest No
              </th>
              <th>
                Date
              </th>
              <th>
                Refiller Name
              </th>
              <th>
                Machine ID
              </th>
              <th>
                Status
              </th>
              <th>
                Actions
              </th>
            </tr>
          </thead>
          {
            !loading && request?.map((item, i) => (
              <tbody>
                <tr>
                  <td>
                    {item.refillRequestNumber}
                  </td>
                  <td>
                    {setFormat(item.createdAt)}
                  </td>
                  <td>
                    {item.refillerID.first_name }
                  </td>
                  <td>
                    {item.machineId}
                  </td>
                  <td style={{}}>
                    <div
                      style={{ display: 'flex', justifyContent: 'center' }}
                    >
                      <div
                        style={{
                          backgroundColor: !item.pendingstatus ? "red" : "green",
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

                      <Link to={`/refillermanager/managerefillrequest/${item._id}`}><
                        FaEdit
                        // onClick={() => handleEdit()}
                      /></Link>
                      <
                        FaTrash
                        onClick={() => handleDelete()}
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            ))
          }
        </table>
      </div>
    </div>
  );
}

export default Manage_Refill_Request;