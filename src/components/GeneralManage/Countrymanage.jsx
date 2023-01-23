import axios from 'axios';
import React, { useState ,useEffect} from 'react'
import {postReq,getReq} from '../middleware/AxiosApisCall'
import CountryTable from './CountryTable'
import { Store } from 'react-notifications-component';


function Countrymanage() {
const path='Country';
const [inputs, setInputs] = useState({});
const [countryList,setCountryList]=useState();


const loadCountry=async ()=>{
  const response = await getReq(path)
  setCountryList(response.data);
}
useEffect(() => {  loadCountry();}, []);
useEffect(() => {  console.log(countryList)}, [countryList]);
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(`On Submit :${JSON.stringify(inputs)}`)
    const response=await postReq(path,inputs)
    if(response.status==="success"){
      loadCountry();
      
      Store.addNotification({
        title: "Add County",
        message: "Country Added Succesfully",
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
        title: "Add County",
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
  
      <div className="add-user-container">
        <div>
          <span className="componet-title">Country Manage</span>
        </div>
        <form className="flex-row form-2col-ver" onSubmit={handleSubmit}>
          <div className="componet-sub-title">
            <span>Country Details</span>
          </div>
          <div className="general-manage-div">
            <label htmlFor="name">Country:</label>
            <input
              name="country"
              type="text"
              onChange={handleChange}
              required
            />
            <button className="submit-btn">Add New</button>
          </div>
        </form>
        <div className="componet-sub2-title">
          <span>Total Country:</span>
        </div>
        <CountryTable key={countryList} table={countryList} path={path} parentFunction={loadCountry}/> 
      </div>
    </React.Fragment>
  );
}

export default Countrymanage

