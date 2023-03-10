import React, { useState, useEffect } from "react";
import { postReq, putReq, getReq } from "../middleware/AxiosApisCall";
import fileDownload from 'js-file-download';

import { CleanData} from "../middleware/CleanData";
import DataList from "../Partials/DataList";
import BulkUpload from "../Partials/BulkUpload";
import { SuccessAlert, ErrorAlert } from "../middleware/AlertMsg"; //1
import TableDataWithPagination from "../Partials/TableDataWithPagination";
import { useParams, useNavigate } from "react-router";



function Machineconfiguration() {
  const navigate = useNavigate();
  const path = "Logic";
  const ComponentName = "Logic";
  const [inputs, setInputs] = useState({});
  const [inputs2, setInputs2] = useState({});
  const [addproductformstate, setaddproductformstate] = useState(); //Add form state use to show or hide add product form
  const [bulkformstate, setbulkformstate] = useState(false);
  const [par, setPar] = useState(); //var to show company user form state for edit or add new req
  const [itemid, setItemid] = useState(); //var to show company  form state for edit or add new req
  const [searchData,setSearchData] = useState();
  const [reject,setReject] = useState(false);
  const [importsuccess,setImportSuccess] = useState(0);


  const clearform = () => {//TODO:Clear all State take to initial State
    setInputs({});
    setPar();
    setInputs2({});
    setItemid();
    setaddproductformstate(false);
    setSearchData()
    setbulkformstate(false)
  };

  const loadDate = async () => { //TODO://Using to load edit form Data 
    const response = await getReq(`${path}/${par}`);
    if (response.data) {
      console.log(
        "🚀 ~ file: SingleProductAdd.jsx:34 ~ loadDate ~ response:",
        response.data
      );
      console.log(
        "🚀 ~ file: SingleProductAdd.jsx:34 ~ loadDate ~ response.data:",
        response.data
      );
      setInputs(response.data);
    } else {
      setPar();
      setItemid();
      console.log(response.data);
    }
  };
  
  function handleChange(event) { //TODO:Handle Form Data Add Form 
    const name = event.target.name;
    const value = event.target.value;
    const checked=event.target.checked;
    if(event.target.type =='checkbox')
    {
      setInputs((values)=>({...values,[name]:checked}))
    }else{
    
    setInputs((values) => ({ ...values, [name]:value }));
  }
}
  function handleChange2(event) { //TODO:Handle Search Form
    const name = event.target.name;
    const checked = event.target.checked;
    if (event.target.type == "checkbox") {
      setInputs2((values) => ({ ...values, [name]: checked }));
    } else {
      setInputs2((values) => ({ ...values, [name]: event.target.value }));
    }
  }
  const handleSubmit2 = async (event) => { //TODO:Submit Search Form
    console.log("🚀 ~ file: SingleProductAdd.jsx:73 ~ handleSubmit2 ~ inputs2:", inputs2)
    event.preventDefault();
     let clean =await CleanData(inputs2)
        if(Object.keys(clean).length){
          setSearchData(clean)
        }else{
          setSearchData()
        }
  };
  const handleSubmit3 = async (event) => { //TODO:Submit Search Form
    event.preventDefault();
    let clean =await CleanData(inputs2)
      const response = await postReq(`${path}/ExportCSV`, clean);
      if (response) {
        console.log("🚀 ~ file: SingleProductAdd.jsx:151 ~ sampleCSVFile ~ response:", response)
        fileDownload(response, `${ComponentName}${Date.now()}.csv`);
          SuccessAlert({
            title: `Export ${ComponentName} File`,
            message: "Export ${ComponentName} file Downloaded successfully",
          });
        } else {
        ErrorAlert({ title: "Update Slot", message: response.msg });
      }
  
  };
  const handleSubmit = async (event) => {   //TODO:Handle Add and Update Form
    event.preventDefault();
    let data =await CleanData(inputs)
    if(Object.keys(data).length){
      if (par) {
        const response = await putReq(path, data, par);
        if (response.success) {
          SuccessAlert({
            title: `Update ${ComponentName}`,
            message: `${ComponentName} Updated successfully`,
          });
          setPar();
          setInputs({});
          setaddproductformstate(false);
        } else {
          ErrorAlert({ title: `Update ${ComponentName}`, message: response.msg });
        }
      } else {
        const response = await postReq(path, data);
        console.log("response DATA:",response.data);
        if (response.success) {
          SuccessAlert({
            title: `Add ${ComponentName}`,
            message: `${ComponentName} Added successfully`,
          });
          setPar();
          setInputs({});
          setaddproductformstate(false);
        } else {
          ErrorAlert({ title: `Add ${ComponentName}`, message: response.msg });
        }
      }
    }else{
      ErrorAlert({ title: `Add ${ComponentName}`, message:"Product Id/PRoduct Name Required" });
    }
   
   
  };
//  const rejectdata = (data) => {//TODO:Handle Edit request from  Table Componenet
//     console.log("🚀 ~ file: SingleProductAdd.jsx:141 ~ rejectdata ~ data:", data)
//     setReject(true)
//     setSearchData(data)
//   };
  // const importSuccess = (data) => {//TODO:Handle Edit request from  Table Componenet
  //   setImportSuccess(importsuccess+1)
  // };

  const editClick = (pid) => {//TODO:Handle Edit request from  Table Componenet
    setPar(pid._id);
  };
  const addproduct = () => {//TODO:Handle Hide and Show of Add Product From
    setaddproductformstate(!addproductformstate);
    setbulkformstate(false);
  };
  const bulkupload = () => {//TODO:Handle Hide and Show of Add Product From
    if(reject){
      setSearchData()
      setReject(false)
    }
    setbulkformstate(!bulkformstate);
    setaddproductformstate(false);
  };
  useEffect(() => {//TODO:Handle Edit State for MAke Add Form in Update form
    if (par) {
      setaddproductformstate(true);
      loadDate();
    } else {
      setInputs({});
      setPar();
      setInputs2({});
      setItemid();
      setaddproductformstate(false);
    }
  }, [par]);

  useEffect(() => {//TODO:Handle Edit State for MAke Add Form in Update form
   console.log(searchData)
  }, [searchData]);
  return (
    <React.Fragment>
    <div className="add-user-container">
        <div className="headingdiv">
          <span className="componet-title"> {ComponentName}</span>
          <div>
            <button onClick={() => navigate(-1)}>Back</button>
            <button onClick={clearform}>Clear </button>
          </div>
        </div>
        <div className="option-btn">
          <button onClick={addproduct}>
            {addproductformstate
              ? `Search ${ComponentName} `
              : par?`Update New ${ComponentName}`:`Add New ${ComponentName}`}
          </button>
        <button onClick={bulkupload}>
        {`Bulk ${ComponentName} Upload`}
      </button>
        </div>
        
      </div>

      {addproductformstate && (
        <React.Fragment>
          <div className="add-user-container">
            <div className="componet-sub-title">
              <span>
                {par
                  ? `Update ${ComponentName} Details`
                  : `Add ${ComponentName} Details`}
              </span>
            </div>
            <form className="flex-row form-2col-ver" onSubmit={handleSubmit}>
             <div className="flex-row">
              <div className="input-lable-h-div">
                <label htmlFor="cardnumber">Logic ID</label>
                <input
                  type="text"
                  name="logicid"
                  value={inputs.logicid || ""}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                />
              </div>
              <div className="input-lable-h-div">
                <label htmlFor="logictype">Logic Type</label>
                <input list="logictype" name="logictype"  value={inputs.logictype || ""}   onChange={handleChange}/>

                <datalist id='logictype'>

                <option>L1</option>
                <option>L2</option>
                <option>L3</option>
                <option>L4</option>
                <option>L5</option>
                <option>L6</option>
                <option>L7</option>
                <option>L8</option>

                </datalist>
                </div>

              <div className="input-lable-h-div">
           
              <DataList
              value={inputs.companyid || ""}
              path={"Company"}
              handleChange={handleChange}
              name={"companyid"}
              option={"companyid"}
              heading={"Company ID"}
            />
              </div>

              <div className="input-lable-h-div">
            
              <DataList
              value={inputs.machineid || ""}
              path={"Machine"}
              handleChange={handleChange}

              name={"machineid"}
              option={"machineid"}
              heading={"Machine ID"}

              />

              </div>

             <div className="input-lable-h-div">
             
             
             
              <label className="access" htmlFor="credit">Credit Enable</label>
              <input type="checkbox" name='creditenable'  checked={inputs.creditenable || false} onChange={handleChange}/>
            
              </div>

              <div className="input-lable-h-div">
              {/* <input type="checkbox" name="accumulate" checked={inputs.accumulate || false } onChange={handleChange} /> */}
              <label htmlFor="accumulate" >Credit Type</label>
              <select name="credittype" value={inputs.credittype|| ""} onChange={handleChange}>
                <option></option>
                <option>accumulate</option>
                <option>forfeit</option>

              </select>
              
              </div>
              
              <div className="input-lable-h-div">
             
              <label htmlFor="creditamount" >Credit Amount</label>
              <input type="number" name="creditamount" value={inputs.creditamount || false} onChange={handleChange}/>
              
              </div>

              

           

              <div className="input-lable-h-div">
              <label className="access" htmlFor="creditautorenew">Credit Auto Renew</label>
              <input type="checkbox" name="creditautorenew"  checked={inputs.creditautorenew || false} onChange={handleChange}/>
              
             
              </div>
             
             
              <div className="input-lable-h-div">
                <button className="submit-btn" type="submit">
                  {par ? "Update" : "Save"}
                </button>
              </div>
              </div>   
            </form>
          </div>
          
        </React.Fragment>
        
      )}

      
      {(!addproductformstate &&! bulkformstate)&& (
        <React.Fragment>
          <div className="add-user-container">
            <div className="componet-sub-title">
              <span>{`Search and Edit ${ComponentName}`}</span>
            </div>
            <form className="flex-col" onSubmit={handleSubmit2}>
          
            <div className="input-lable-v-div">
                <label htmlFor="logicid">Logic ID</label>
                <input
                  type="text"
                  name="logicid"
                  value={inputs2.logicid || ""}
                  onChange={handleChange2}
                  autoComplete="off"
                />
              </div>

              <div className="input-lable-v-div">
                <label htmlFor="employeename">Machine ID</label>
                <input
                  type="text"
                  name="machineid"
                  value={inputs2.machineid || ""}
                  onChange={handleChange2}
                  autoComplete="off"
                />
              </div>

              <div className="input-lable-v-div">
                <label htmlFor="companyid">Company ID</label>
                <input
                  type="text"
                  name="companyid"
                  value={inputs2.companyid || ""}
                  onChange={handleChange2}
                  autoComplete="off"
                />
              </div>

              <div className="input-lable-v-div">
                <label htmlFor="machineid">Logic Type</label>
                <input
                  type="text"
                  name="logictype"
                  value={inputs2.logictype || ""}
                  onChange={handleChange2}
                  autoComplete="off"
                />
              </div>

              <div className="input-lable-v-div">
                <label htmlFor="logicid">Credit Type</label>
                <input
                  type="text"
                  name="credittype"
                  value={inputs2.credittype || ""}
                  onChange={handleChange2}
                  autoComplete="off"
                />
              </div>

              <div className="input-lable-h-div">
                <button className="submit-btn" type="submit">
                  Search
                </button>
                {/* <button className="submit-btn" type="button" onClick={handleSubmit3}>
                  Export CSV
                </button> */}
              </div>
            </form>
          </div>
        </React.Fragment>
      )}

      {!addproductformstate && (
        <React.Fragment>
          <div className="table_container-div">
            
            <TableDataWithPagination
              path={path}
              key={searchData||importsuccess}
              searchData={searchData}
              componentName={ComponentName}
              name={"Logic"}
              editClick={editClick}
              clear={clearform}
              reject={reject}
              // loadDateUsertable={loadDateUsertable}
            />
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default Machineconfiguration;
