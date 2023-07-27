import React, { useState } from "react";
import { postReq,patchReq } from "../middleware/AxiosApisCall";
import { SuccessAlert, ErrorAlert } from "../middleware/AlertMsg"; //1
import TableData from "../Partials/TableData"; //2
import { useNavigate } from "react-router-dom";
function Countrymanage() {
  const navigate=useNavigate();
  const path = "Country";
  const [inputs, setInputs] = useState({});
  const [tableRefresh, setTableRefresh] = useState(0); //3
  const[par, setPar] = useState()
  
  // This function is used to set Input fields
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  //  this function  used to add and edit the Country details
  const handleSubmit = async (event) => {
    event.preventDefault();
    if(par) {
      // console.log('this id par'    +par)
      const response = await patchReq(path, inputs,par);
      // console.log("🚀 ~ file: Countrymanage.jsx:20 ~ handleSubmit ~ response", response);
      if (response.success) {
        setPar()
        setTableRefresh(tableRefresh+1);//4
        setInputs({});//5
        SuccessAlert({title: "Edit Country", message: "Country Update successfully" });
      } else {
        setPar();
        setTableRefresh(tableRefresh + 1); //4
        setInputs({});
        ErrorAlert({title: "Edit Country",message: response.msg});
      }

    } 
    
    else {
      // This API is used to Post new Country into data base.
      const response = await postReq(path, inputs);
      if (response.success) {
        setTableRefresh(tableRefresh + 1); //4
        setInputs({}); //5
        SuccessAlert({
         
          title: "Add Country",
          message: "Country Added successfully",
        });
      } else {
        ErrorAlert({ title: "Add Country", message: response.msg });
      }
    }
  };
  // This Function is used to get id of particula item when click
   const editClick=(pid)=>{
    setPar(pid._id)
    setInputs(pid) 
    // console.log('this is input ' ,inputs);
  }


  return (
    <React.Fragment>
      <div className="add-user-container">
        <div className="headingdiv">
          <span className="componet-title">Country Manage</span>
          <div>
          <button onClick={(()=>navigate(-1))}>Back</button>
          </div>
        </div>
        <form className="flex-row form-2col-ver" onSubmit={handleSubmit}>
          <div className="componet-sub-title">
          <span>{par?(<span>Edit </span>):(<span>Add </span>)}Country </span>
          </div>
          <div className="general-manage-div">
            <label htmlFor="name">Country:</label>
            <input
              name="country"
              type="text"
              value={inputs.country || ""}
              onChange={handleChange}
              required
            />
     
            <button className="submit-btn">{par?(<span>Update</span>):<span>Add New</span>}</button>
          </div>
        </form>
        <TableData path={path} key={tableRefresh}   editClick={editClick}/>
      </div>
    </React.Fragment>
  );
}

export default Countrymanage;
