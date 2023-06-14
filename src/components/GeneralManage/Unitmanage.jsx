import React, { useState, useEffect } from "react";
import { postReq,patchReq } from "../middleware/AxiosApisCall";
import { SuccessAlert, ErrorAlert } from "../middleware/AlertMsg"; //1
import TableData from "../Partials/TableData"; //2
import { useNavigate } from "react-router-dom";

function Unitmanage() {
  const navigate=useNavigate();
  const path = "Unit";

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
    const response = await patchReq(path, inputs,par);
    if (response.success) {
      setPar();
      setTableRefresh(tableRefresh + 1); //4
      setInputs({}); //5
      SuccessAlert({ title: "Edit Unit", message: "Unit Updated successfully" });
    } else {
      setPar();
      setTableRefresh(tableRefresh + 1); //4
      setInputs({});
      ErrorAlert({ title: "Edit Unit", message: response.error });
    }
    }else{
         const response=await postReq(path,inputs)
         if(response.success){
          setTableRefresh(tableRefresh+1)
          setPar();
          setTableRefresh(tableRefresh + 1); //4
          setInputs({});
          SuccessAlert({title:"Add Unit",message:"Unit Added successfully"})
         }
         else{
          ErrorAlert({title:"Add Unit",message:response.error})
         }

    }
   };
const editClick=(pid)=>{
 console.log(pid)
  setPar(pid._id)
  setInputs(pid)
}
useEffect(() => {
console.log(par)
}, [par])
  return (
    <React.Fragment>
      <div className="add-user-container">
        <div className="headingdiv">
          <span className="componet-title">Unit Manage</span>
          <div>
          <button onClick={(()=>navigate(-1))}>Back</button>
          
          </div>
        </div>

        <form className="flex-row form-2col-ver" onSubmit={handleSubmit}>
          <div className="componet-sub-title">
          <span>{par?(<span>Edit </span>):(<span>Add </span>)}Unit </span>
          </div>

          <div className="general-manage-div">
          <label htmlFor="name">Unit:</label>
            <input
             value={inputs.unit || ""}
              type='text'
           
              onChange={handleChange}
              name="unit"
              heading={"Unit"}
              required
            />

            <button className="submit-btn">{par ? (<span>Update</span>):<span>Add New</span>}</button>
          </div>
        </form>

        <TableData path={path} key={tableRefresh} editClick={editClick}/>
      </div>
    </React.Fragment>
  );
}

export default Unitmanage;
