import React, { useState } from "react";
import { ErrorAlert, SuccessAlert } from "../middleware/AlertMsg";
import { patchReq, postReq } from "../middleware/AxiosApisCall";
import DataList from "../Partials/DataList";
import { useNavigate } from "react-router-dom";

function Addnewcompany() {
const path="User"
// const navigate=useNavigate();
const[inputs,setInputs]=useState({});

const [tableRefresh,setTableRefresh]=useState();
const[par,setPar]=useState();

  const handleChange=(event)=>{
   const name=event.target.name;
   const value=event.target.value;
   setInputs(values=>({...values,[name]:value}))
  
  }
 const handleSubmit=async(event)=>{
 event.preventDefault();
 if(par)
// {
//   console.log(par)
//   const response=await patchReq(path,inputs,par)
//   if(Response.status==='success'){
//     setPar()
//     setTableRefresh(tableRefresh+1)
//     setInputs({});
//     SuccessAlert({title:"edit Company",message:"Company updated successfully"});
//   }else{
//     ErrorAlert({title:"Edit state",message:response.error})
//   }
// }else{
  const response=await postReq(path,inputs)
  if(response.status==='success')
  {
    console.log(inputs)
    setTableRefresh(tableRefresh+1)
    setInputs({})
    // navigate("/companymanage/listcompany")
    SuccessAlert({title:"Add Company",message:"Company Added successfully"})
  }else{
    ErrorAlert({title:"Add Company",message:response.error})
  }
}
 
 

//  const editClick=(pid)=>{
//   setPar(pid._id)
//   setInputs(pid) 
// }
              // name="state"
              // type="text"
              // value={inputs.state || ""}
              // onChange={handleChange}
              // required      
  return (
    <React.Fragment>
      <div className="add-user-container">
        <div>
          <span className="componet-title">Add New Company</span>
        </div>

        <form onSubmit={handleSubmit} className="flex-row form-2col-ver">
          <div className="componet-sub-title">
            <span>Company Details</span>
          </div>

          <div className="flex-col ">
            <div className="flex-row">

              <div className="input-lable-h-div">
                <label htmlFor="cname" className="adminlabel">
                  Company Name:
                </label>
                <input
                  type="text"
                  name="cname"

                  value={inputs.cname || ""}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="cname" className="adminlabel">
                  Company ID:
                </label>
                <input
                  type="text"
                  name="cid"

                  value={inputs.cid || ""}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="Caddress" className="adminlabel">
                  Company Address:
                </label>
                <input
                  type="text"
                  name="cadd"

                  value={inputs.cadd || ""}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="Clocation" className="adminlabel">
                  Company Location:
                </label>
                <input
                  type="text"
                  name="clocation"

                  value={inputs.clocation || ""}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="Cbno" className="adminlabel">
                  Company Building No:
                </label>
                <input
                  type="text"
                  name="cbuildingno"

                  value={inputs.cbuildingno || ""}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-lable-h-div">

                <DataList

                  value={inputs.country || ""}
                  path={"Country"}
                  handleChange={handleChange}
                  name={"country"}
                  heading={"Company Person"}
                />
              </div>
            </div>

            <div className="flex-row">
              <div className="input-lable-h-div" >
                <label htmlFor="cperson" className="adminlabel">
                  Contact Person:
                </label>
                <input
                  type="email"
                  name="pemail"

                  value={inputs.pemail || ""}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="cperson" className="adminlabel">
                  Contact Person:
                </label>
                <input
                  type="text"
                  name="pnum"

                  value={inputs.pnum || ""}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-lable-h-div">

                <DataList

                  value={inputs.country || ""}
                  path={"Country"}
                  handleChange={handleChange}
                  name={"country"}
                  heading={"Country"}
                />
              </div>

              <div className="input-lable-h-div">


                <DataList

                  value={inputs.state || ""}
                  path={"City"}
                  handleChange={handleChange}
                  name={"state"}
                  heading={"State"}
                />
              </div>

              <div className="input-lable-h-div">

                <DataList

                  value={inputs.country || ""}
                  path={"City"}
                  handleChange={handleChange}
                  name={"country"}
                  heading={"City"}
                />
              </div>

              <div className="input-lable-h-div">
                <DataList

                  value={inputs.state || ""}
                  path={"Country"}
                  handleChange={handleChange}
                  name={"state"}
                  heading={"Admin"}
                />
              </div>
              <div className="form-submit-button">
                <button type="submit" >Save Company</button>
              </div>
            </div>
            </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Addnewcompany;
