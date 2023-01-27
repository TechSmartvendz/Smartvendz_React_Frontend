import axios from 'axios';
import React, { useState ,useEffect} from 'react'
import {delReq} from '../middleware/AxiosApisCall'
import { Store } from 'react-notifications-component';

function CountryTable(props) {

const [table,setTable]=useState(props.table);
const [path,setPath]=useState(props.path);

const deleteCountry = async (event) => { 
const response=await delReq(path,event)
if(response.status==="success"){
props.parentFunction();
Store.addNotification({
  title: "Delete Country",
  message: "Country Deleted Succesfully",
  type: "success",
  insert: "top",
  container: "top-right",
  dismiss: {
  duration: 1000,
  }
});
  }
  else{
    Store.addNotification({
      title: "Delete Country",
      message: response.error,
      type: "danger",
      insert: "top",
      container: "top-right",
      dismiss: {
      duration: 2000,
      }
    });
  } 
}
  return (
    <React.Fragment>
        <div className="table_container-div">
          <table>
            <tbody>
              <tr>
                <th>Country</th>
                <th>Action</th>
              </tr>

              {table != null ? (
                table.map((item, index) => (
                  <tr key={index}>
                    <td>{item.country}</td>
                    <td>
                      <button className="btn_edit" >Edit</button>
                      <button className="btn_delete" onClick={() => deleteCountry(item.country)}>Delete</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td> Countries Not Found </td>
                  <td></td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
     
    </React.Fragment>
  );
}

export default CountryTable

