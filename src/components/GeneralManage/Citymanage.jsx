import React, { useState} from "react";
import { postReq ,patchReq} from "../middleware/AxiosApisCall";
import { SuccessAlert, ErrorAlert } from "../middleware/AlertMsg"; //1
import TableData from "../Partials/TableData"; //2
import DataList from "../Partials/DataList";

function Citymanage() {
  const path = "City";

  const [inputs, setInputs] = useState({});
  const [tableRefresh, setTableRefresh] = useState(0); //3
  const [par,setPar]=useState();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(par){
      console.log("🚀 ~ file: Statemanage.jsx:26 ~ handleSubmit ~ par", par)
      const response = await patchReq(path, inputs,par);
      if (response.status === "success") {
        setPar()
        setTableRefresh(tableRefresh+1);//4
        setInputs({});//5
        SuccessAlert({title: "Edit City", message: "City Update successfully" });
      } else {
        ErrorAlert({title: "Edit City",message: response.error});
      }
    
    }else {
    const response = await postReq(path, inputs);
    if (response.status === "success") {
      setPar();
      setTableRefresh(tableRefresh + 1); //4
      setInputs({}); //5
      SuccessAlert({ title: "Edit City", message: "City Update successfully" });
    } else {
      ErrorAlert({ title: "Edit City", message: response.error });
    }
  }
  }

    const editClick=(pid)=>{
      setPar(pid._id)
      setInputs(pid) 
  
    }
 

  

  return (
    <React.Fragment>
      <div className="add-user-container">
        <div>
          <span className="componet-title">City Manage</span>
        </div>

        <form className="flex-row form-2col-ver" onSubmit={handleSubmit}>
          <div className="componet-sub-title">
          <span>{par?(<span>Edit </span>):(<span>Add </span>)}City </span>

            <span>City Details</span>
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
