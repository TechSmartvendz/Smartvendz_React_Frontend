import React, { useState} from "react";
import { postReq ,patchReq} from "../middleware/AxiosApisCall";
import { SuccessAlert, ErrorAlert } from "../middleware/AlertMsg"; //1
import TableData from "../Partials/TableData"; //2
import DataList from "../Partials/DataList";
import { useNavigate } from "react-router-dom";
function Citymanage() {
  const navigate=useNavigate();
  const path = "City";

  const [inputs, setInputs] = useState({});
  const [tableRefresh, setTableRefresh] = useState(0); //3
  const [par,setPar]=useState();

  // This function is used to set Input fields
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  // In this function  used to add and edit the City details
  const handleSubmit = async (event) => {
    event.preventDefault();
    if(par){
      // console.log("🚀 ~ file: Statemanage.jsx:26 ~ handleSubmit ~ par", par)
      // This API request is used to edit the particular CITY.
      const response = await patchReq(path, inputs,par);
      if (response.success) {
        setPar()
        setTableRefresh(tableRefresh+1);//4
        setInputs({});//5
        SuccessAlert({title: "Edit City", message: "City Update successfully" });
      } else {
        setPar();
        setTableRefresh(tableRefresh + 1); //4
        setInputs({});
        ErrorAlert({title: "Edit City",message: response.msg});
      }
    
    }else {
      // This API is used to Post new CITY into data base.
    const response = await postReq(path, inputs);
    if (response.success) {
      setPar();
      setTableRefresh(tableRefresh + 1); //4
      setInputs({}); //5
      SuccessAlert({ title: "Edit City", message: "City Update successfully" });
    } else {
      ErrorAlert({ title: "Edit City", message: response.msg });
    }
  }
  }
  // This function is used to get Id on click
    const editClick=(pid)=>{
      setPar(pid._id)
      setInputs(pid) 
  
    }
 
 return (
    <React.Fragment>
      <div className="add-user-container">
        <div className="headingdiv">
          <span className="componet-title">City Manage</span>
          <div>
          <button onClick={(()=>navigate(-1))}>Back</button>
          </div>
        </div>
        <div className="option-btn">
          <button
            onClick={() => {
              navigate("../areamanage");
            }}
          >
         Area Manage
          </button>
        </div>
        
        <form className="flex-row form-2col-ver" onSubmit={handleSubmit}>
          <div className="componet-sub-title">
          <span>{par?(<span>Edit </span>):(<span>Add </span>)}City </span>

    
          </div>

          <div className="general-manage-div">
            <label htmlFor="city">City:</label>
            <input
              name="city"
              type="text"
              value={inputs.city || ""}
              onChange={handleChange}
              required
            />
            <DataList
              value={inputs.state || ""}

              path={"State"}
              handleChange={handleChange}
              name={"state"}
              option={"state"}
              heading={"State"}
            />
            <button className="submit-btn">{par ? (<span>Update</span>):(<span>Add New</span>)}</button>
          </div>
        </form>

        <TableData path={path} key={tableRefresh} editClick={editClick}/>
      </div>
    </React.Fragment>
  );

}
export default Citymanage;
