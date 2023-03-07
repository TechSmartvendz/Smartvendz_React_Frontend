import React, { useState, useEffect } from "react";
import { postReq, putReq, getReq } from "../middleware/AxiosApisCall";
import DataList from "../Partials/DataList";
import { SuccessAlert, ErrorAlert } from "../middleware/AlertMsg"; //1
import TableData2 from "../Partials/TableData2";
import { useParams, useNavigate } from "react-router";

function Addnewmachine() {
  const navigate = useNavigate();
  const path = "Machine";
  const ComponentName = "Machine";
  const subPath = "Machine/Slot";
  const listPath = "/managemachine/listmachine";
  const [inputs, setInputs] = useState({});
  const [inputs2, setInputs2] = useState({});


  const [par, setPar] = useState();//var to show company user form state for edit or add new req
  const { id } = useParams();
  const [itemid, setItemid] = useState(id);//var to show company  form state for edit or add new req
  const [companyusertable, setcompanyusertable] = useState();

//TODO: Load Data on Render and on Stage changes 
  const loadDate = async () => {
    const response = await getReq(`${path}/${itemid}`);
    if (response.data) {

      setInputs2((values) => ({
        ...values,
        machineid: response.data.machineid,
      }));
      setInputs(response.data);
    } else {
      navigate(`../`);
      console.log(response.data);
    }
  };
  const loadDateUsertable = async () => {
    const response = await getReq(`${subPath}/${itemid}`);
    if (response.data.length) {
      console.log("🚀 ~ file: Addnewmachine.jsx:41 ~ loadDateUsertable ~ response.data", response.data)
      console.log(response.data);
      setcompanyusertable(response.data);
    } else {
      setcompanyusertable(null);
    }
  };
  const loadSubFormData = async (assignid) => {
    const response = await getReq(`${subPath}/${itemid}/${assignid}`);
    if (response.data.length) {
    console.log("🚀 ~ file: Addnewmachine.jsx:52 ~ loadSubFormData ~ response.data", response.data)
   
      console.log(response.data);
      setInputs2(response.data[0]);
    } else {
      console.log(response.data);
      setcompanyusertable(null);
    }
  };

  //TODO:Handle Form Data  SHange and Submit
  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  }
  function handleChange2(event) {
    const name = event.target.name;
    const checked = event.target.checked;
    if (event.target.type == "checkbox") {
      setInputs2((values) => ({ ...values, [name]: checked }));
    } else {
      setInputs2((values) => ({ ...values, [name]: event.target.value }));
    }
  }
  const handleSubmit2 = async (event) => {
    event.preventDefault();
    if(par){
      const response = await putReq(subPath,inputs2,par);
      if (response.success) {
        SuccessAlert({
          title: " Update Slot",
          message: "Slot Details Updated successfully",
        });
        setPar()
        loadDateUsertable();
        setInputs2({});
        loadDate();
      } else {
        ErrorAlert({ title: "Update Slot", message: response.msg });
      }
    }else{
      const response = await postReq(subPath, inputs2);
      if (response.success) {
        SuccessAlert({
          title: "Create Slot",
          message: "Slot Created successfully",
        });
        loadDateUsertable();
        setInputs2({});
        loadDate();
      } else {
        ErrorAlert({ title: "Create Slot", message: response.msg });
      }
    }
    
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if(itemid){
      const response = await putReq(path, inputs,itemid);
      if (response.success) {
        SuccessAlert({
          title: "Update Machine",
          message: "Machine Updated successfully",
        });
        setItemid(response.data._id);
        setInputs2();
        setInputs2((values) => ({
          ...values,
          machineid: inputs.machineid,
        }));
      } else {
        ErrorAlert({ title: "Update Machine", message: response.msg });
      }
    } 
    else{
      const response = await postReq(path, inputs);
      if (response.success) {
        SuccessAlert({
          title: "Add Machine",
          message: "Machine Added successfully",
        });
        navigate(`${response.data._id}`);
        setItemid(response.data._id);
        setInputs2();
        setInputs2((values) => ({
          ...values,
          machineid:inputs.machineid,
        }));
      } else {
        ErrorAlert({ title: "Add Machine", message: response.msg });
      }
    }
   
  };

  const editClick = (pid) => {
    loadSubFormData(pid._id);
    setPar(pid._id);

  };
//TODO: State Handle on Edit Company and After Added Company to Load Form Fields byusing useState "itemid"
  useEffect(() => { 
    if (itemid) {
      loadDate();
      loadDateUsertable();
    }
  }, [itemid]);
//TODO: State Handle on Edit Company and After Added Company to Load Form Fields by using route paramsuseState "id"
  useEffect(() => {
    if(id){
    setItemid(id)}
    else{
      setcompanyusertable()
      setInputs2({})
      setInputs({})
      setItemid()
      setPar()
    }
  }, [id]);

  return (
    <React.Fragment>
      <div className="add-user-container">
        <div className="headingdiv">
          <span className="componet-title">{itemid ? `Edit ${ComponentName} Details` :`Add ${ComponentName} Details`} </span>
          <div>
            <button onClick={() => navigate(-1)}>Back</button>
          </div>
        </div>
        <div className="option-btn">
        <button onClick={()=>{navigate(listPath)}}>{ComponentName} List</button>
         </div>

        <form className="flex-row form-2col-ver" onSubmit={handleSubmit}>
         

          <div className="flex-row">
            <div className="input-lable-h-div">
              <label htmlFor="machineid"> Machine ID</label>
              <input
                type="text"
                name="machineid"
                value={inputs.machineid || ""}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>

            <div className="input-lable-h-div">
              <label htmlFor="machinename">Machine Name</label>
              <input
                type="text"
                name="machinename"
                value={inputs.machinename || ""}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
            <div className="input-lable-h-div">
          
            <DataList
              value={inputs.companyid || ""}
              path={"Company"}
              handleChange={handleChange}
              name={"companyid"}
              option={"companyid"}
              heading={"Company"}
            />

          </div>
            <div className="input-lable-h-div">
              <label htmlFor="building">Building Name/No </label>
              <input
                type="text"
                name="building"
                value={inputs.building || ""}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>

         

            <div className="input-lable-h-div">
              <label htmlFor="location">Location </label>
              <input
                type="text"
                name="location"
                value={inputs.location || ""}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>

            <div className="input-lable-h-div">
              <label htmlFor="producttype">Product Type </label>
              <input
                type="text"
                name="producttype"
                value={inputs.producttype || ""}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>

            <div className="input-lable-h-div">
              <label htmlFor="totalslots">Total Slots </label>
              <input
                type="number"
                name="totalslots"
                value={inputs.totalslots || ""}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>

            <div className="input-lable-h-div">
              <button className="submit-btn" type="submit">
              {itemid  ? 'Update' :'Save'}  
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* second form */}

      {itemid && <React.Fragment>
        <div className="add-user-container">
        <div className="componet-sub-title">
          <span>{par ? 'Update Planogram':'Make Planogram'}</span>
        </div>

        <form className="flex-col" onSubmit={handleSubmit2}>

        <div className="input-lable-h-div">
      
        <DataList
          value={inputs2.machineid || ""}
          path={path}
          handleChange={handleChange2}
          name={"machineid"}
          option={"machineid"}
          heading={"Machine ID"}
        />
      </div>

        <div className="input-lable-h-div">
        <label htmlFor="slot">Slot Name/No.</label>
        <input
          type="text"
          name="slot"
          value={inputs2.slot || ""}
          onChange={handleChange2}
          autoComplete="off"
        />
      </div>

         
      <div className="input-lable-h-div">
      <label htmlFor="maxquantity">MAX Quantity</label>
      <input
        type="number"
        name="maxquantity"
        value={inputs2.maxquantity || ""}
        onChange={handleChange2}
        autoComplete="off"
      />
    </div>
    <div className="input-lable-v-div">
            <label htmlFor="active_status">Activate</label>
            <input
              type="checkbox"
              name="active_status"
              value={inputs2.active_status || false}
              checked={inputs2.active_status || false}
              onChange={handleChange2}
              autoComplete="off"
            />
    </div>

          <div className="input-lable-h-div">
            <button className="submit-btn" type="submit">
              {par ? 'Update' : 'Save'}
            </button>
          </div>
        </form>
      </div>

      <div className="table_container-div">
        <TableData2
          path={subPath}
          key={subPath}
          data={companyusertable}
          name={"Planogram"}
          editClick={editClick}
          editbutton={false}
          loadDateUsertable={loadDateUsertable}
        />
      </div>
      </React.Fragment>
      }
      


    </React.Fragment>
  );
}

export default Addnewmachine;
