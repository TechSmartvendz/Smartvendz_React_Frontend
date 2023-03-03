// import React, { useState } from "react";
// import { ErrorAlert, SuccessAlert } from "../middleware/AlertMsg";
// import { postReq } from "../middleware/AxiosApisCall";
// import { useNavigate } from "react-router-dom";
// function Machineconfiguration() {
//   const [inputs, setInputs] = useState();
//   const path = "Machine";
// const navigate=useNavigate();
//   function handleChange(event) {
//     const name = event.target.name;
//     const value = event.target.value;
//     setInputs((values) => ({ ...values, [name]: value }));
//   }
//   const handleSubmit = async (event) => {
//     event.preventDefault();
    
//     const response = await postReq(inputs, path);
//     if ((response.status = "success")) {
//       SuccessAlert({
//         title: "Add New Machine",
//         message: "New Machine Added Successfully",
//       });
//     } else {
//       ErrorAlert({ title: "Add New Machine", message: response.error });
//     }
//   };

  // return (
  //   <React.Fragment>
  //     <div className="add-user-container">
  //       <div className="headingdiv">
  //         <span className="componet-title">Machine List</span>
      
  //       <div className="option-btn">
  //       <button onClick={()=>{navigate(-1)}}>Back</button>
  //        </div>

  //        </div>

  //       <div className="componet-sub2-title">
  //         <span>Total Machine:</span>
  //       </div>

  //       <form onSubmit={handleSubmit} className="flex-row form-2col-ver">
  //         <div className="flex-row">
  //           <div className="input-lable-h-div">
  //             <label htmlFor="machinetype" className="">
  //               Select Machine type
  //             </label>

  //             <input list="mtype" className="type" />

  //             <datalist id="mtype">
  //               <option>GVC DEVICE</option>
  //               <option>RASPBARRY PI</option>
  //             </datalist>
  //           </div>

  //           <div className="input-lable-h-div">
  //             <label htmlFor="vendtype">Select Vend type</label>
  //             <input list="svty" className="type" />
  //             <datalist id="svty">
  //               <option>NORMAL VEND</option>
  //               <option>CREDIT VEND</option>
  //             </datalist>
  //           </div>

  //           <div className="input-lable-checkbox-div">
  //             <label className="access">Access Type:</label>
  //             <input type="checkbox" name="rfid" />
  //             <label htmlFor="rfid">RFID(HID)</label>
  //             <div>
  //               <input type="checkbox" name="qrupi" />
  //               <label htmlFor="qrupi">QR UPI</label>
  //             </div>
  //             <div>
  //               <input type="checkbox" name="mobilea" />
  //               <label htmlFor="mobileapp">MOBILE APPLICATION</label>
  //             </div>
  //             <div>
  //               <input type="checkbox" name="microrfid" />
  //               <label htmlFor="myrfid">RFID(MFARE RFID)</label>
  //             </div>
  //           </div>

  //           <div className="input-lable-h-div">
  //             <label htmlFor="rfidcard" className="">
  //               RFID CARD
  //             </label>

  //             <input list="rfid" className="rfidcard" />

  //             <datalist id="rfid">
  //               <option>HID 26</option>
  //               <option>HID 34</option>
  //             </datalist>
  //           </div>
  //           <div className="input-lable-h-div">
  //             <label htmlFor="apiurl" className="labelapi">
  //               API URL:
  //             </label>
  //             <input name="URL" className="api" type="text" />
  //           </div>
  //           <div className="input-lable-h-div">
  //             <button type="submit" className="submit-btn">
  //               Submit
  //             </button>
  //           </div>
  //         </div>
  //         <div className="flex-row"></div>
  //       </form>
  //     </div>
  //   </React.Fragment>
  // );
// }

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
  const path = "Product";
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
  // const loadDateUsertable = async () => { //FIXME://not using right now it will use in search product
  //   const response = await getReq(`${Product}/${itemid}`);
  //   if (response.data.length) {
  //     console.log(response.data);
  //     setcompanyusertable(response.data);
  //   } else {
  //     setcompanyusertable(null);
  //   }
  // };
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
    setInputs((values) => ({ ...values, [name]: value }));
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
  const handleSubmit = async (event) => {//TODO:Handle Add and Update Form
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
 const rejectdata = (data) => {//TODO:Handle Edit request from  Table Componenet
    console.log("🚀 ~ file: SingleProductAdd.jsx:141 ~ rejectdata ~ data:", data)
    setReject(true)
    setSearchData(data)
  };
  const importSuccess = (data) => {//TODO:Handle Edit request from  Table Componenet
    setImportSuccess(importsuccess+1)
  };

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


      {bulkformstate && <BulkUpload
        ComponentName={ComponentName}
        name={"Products"} 
        path={path}
        rejectdata={rejectdata}
        importSuccess={importSuccess}
        />}

      {addproductformstate && (
          <React.Fragment>
      <div className="add-user-container">
        <div className="headingdiv">
          <span className="componet-title">Add Logic Details</span>
  

         </div>
         <form className="flex-row form-2col-ver" onSubmit={handleSubmit}>
             <div className="flex-row">
              <div className="input-lable-h-div">
                <label htmlFor="cardnumber">Logic ID</label>
                <input
                  type="text"
                  name="logicid"
                  value={inputs.productid || ""}
                  onChange={handleChange}
                  required
                />
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
              value={inputs.companyid || ""}
              path={"Machine"}
              handleChange={handleChange}
              name={"machineid"}
              option={"machineid"}
              heading={"Machine ID"}
            />
              </div>
             <div className="input-lable-h-div">
              <div className="input-lable-checkbox-div">
              <input type="checkbox" name='credit' checked={inputs.credit || false} onChange={handleChange}/>
              <label className="access" htmlFor="credit">Credit</label>
              <div>
              <input type="checkbox" name="accumulate" checked={inputs.accumulate || false } onChange={handleChange} />
              <label htmlFor="accumulate" >Accumulate</label>
              </div>
              <div>
                <input type="checkbox" name="forefeite" checked={inputs.forefeite || false} onChange={handleChange}/>
                <label htmlFor="forefeite" >Fore Feit</label>
              </div>
              </div>
              </div>
              <div className="input-lable-h-div">
              <div className="input-lable-checkbox-div">
             <input type="checkbox" name="autocreditrenewal" checked={inputs.autocreditrenewal || false} onChange={handleChange}/>
              <label className="access">Auto Credit Renewal</label>
              </div>
              </div>
              <div className="input-lable-h-div">
                <label htmlFor="logictype">Logic Type</label>
                <input list="logictype"/>
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
                <button className="submit-btn" type="submit">
                  {par ? "Update" : "Save"}
                </button>
              </div>
              </div>
            </form>

         {/* <form className="flex-col" onSubmit={handleSubmit2}>
              <div className="input-lable-h-div">
                <label htmlFor="logicid"> Logic ID</label>
                <input
                  type="text"
                  name="logicid"
                  value={inputs2.logicid || ""}
                  onChange={handleChange2}
                />
                </div>
              <div className="input-lable-h-div">
                <label htmlFor="companyid"> Company ID</label>
                <input
                  type="text"
                  name="companyid"
                  value={inputs2.companyid || ""}
                  onChange={handleChange2}
                />
              </div>

              <div className="input-lable-h-div">
                <label htmlFor="machineid"> Machine ID</label>
                <input
                  type="text"
                  name="machineid"
                  value={inputs2.machineid || ""}
                  onChange={handleChange2}
                />
              </div>
              <div className="input-lable-h-div">
             
              <div className="input-lable-checkbox-div">
              <input type="checkbox" name='credit' checked={inputs.credit || false} onChange={handleChange}/>
              <label className="access" htmlFor="credit">Credit</label>
             
              <div>
              <input type="checkbox" name="accumulate" checked={inputs.accumulate || false } onChange={handleChange} />
              <label htmlFor="accumulate" >Accumulate</label>
              </div>
              
              <div>
                <input type="checkbox" name="forefeite" checked={inputs.forefeite || false} onChange={handleChange}/>
                <label htmlFor="forefeite" >Fore Feit</label>
              </div>

              </div>

              </div>
              <div className="input-lable-h-div">
              <div className="input-lable-checkbox-div">
             <input type="checkbox" name="autocreditrenewal" checked={inputs.autocreditrenewal || false} onChange={handleChange}/>
              <label className="access">Auto Credit Renewal</label>
              </div>
              </div>



          <div className="input-lable-h-div">
                <DataList
                  value={inputs.companyid || ""}
                  path={"Company"}
                  handleChange={handleChange}
                  name={"companyid"}
                  option={"companyid"}
                  heading={"LogicType"}
                />
          </div>



      
          </form> */}


        {/* <form onSubmit={handleSubmit} className="flex-row form-2col-ver">
          <div className="flex-row">
            <div className="input-lable-h-div">
              <label htmlFor="machinetype" className="">
                Logic ID
              </label>

              <input list="mtype" className="type" />

              <datalist id="mtype">
                <option>GVC DEVICE</option>
                <option>RASPBARRY PI</option>
              </datalist>
            </div>

            <div className="input-lable-h-div">
              <label htmlFor="machinetype" className="">
                Company ID
              </label>

              <input list="mtype" className="type" />

              <datalist id="mtype">
                <option>GVC DEVICE</option>
                <option>RASPBARRY PI</option>
              </datalist>
            </div>

            <div className="input-lable-h-div">
              <label htmlFor="machinetype" className="">
                Machine ID
              </label>

              <input list="mtype" className="type" />

              <datalist id="mtype">
                <option>GVC DEVICE</option>
                <option>RASPBARRY PI</option>
              </datalist>
            </div>


         

            <div className="input-lable-checkbox-div">
            <input type="checkbox" name="access" />

              <label className="access">Credit:</label>

              <div>
              <input type="checkbox" name="accumulate" />
              <label htmlFor="accumulate">accumulate</label>
              </div>

              <div>
                <input type="checkbox" name="forfeit" />
                <label htmlFor="forfeit">forfeit</label>
              </div>
             
            
            </div>


            

            <div className="input-lable-checkbox-div">
            <input type="checkbox" name="access" />

              <label className="access">Auto credit renewal</label>

              </div>

            <div className="input-lable-h-div">
              <label htmlFor="machinetype" className="">
                Logic Type
              </label>

              <input list="mtype1" className="type" />

              <datalist id="mtype1">
                <option>l1</option>
                <option>l2</option>
                <option>l3</option>
                <option>l4</option>
                <option>l5</option>
                <option>l6</option>
                <option>l7</option>
                <option>l8</option>
              </datalist>
            </div>

       
       
    
            <div className="input-lable-h-div">
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </div>
          </div>
          <div className="flex-row"></div>
        </form> */}
      </div>
    </React.Fragment>
      )}

      {(!addproductformstate&&!bulkformstate)&& (
        <React.Fragment>
          <div className="add-user-container">
            <div className="componet-sub-title">
              <span>{`Search and Edit ${ComponentName}`}</span>
            </div>
            <form className="flex-col" onSubmit={handleSubmit2}>
              <div className="input-lable-v-div">
                <label htmlFor="logicid"> Logic ID</label>
                <input
                  type="text"
                  name="logicid"
                  value={inputs2.logicid || ""}
                  onChange={handleChange2}
                />
              </div>
              <div className="input-lable-v-div">
                <label htmlFor="machineid"> Machine ID</label>
                <input
                  type="text"
                  name="machineid"
                  value={inputs2.machineid || ""}
                  onChange={handleChange2}
                />
              </div>
              <div className="input-lable-v-div">
                <label htmlFor="companyid"> Company ID</label>
                <input
                  type="text"
                  name="companyid"
                  value={inputs2.companyid || ""}
                  onChange={handleChange2}
                />
              </div>

              <div className="input-lable-v-div">
                <label htmlFor="logictype">Logic Type</label>
                <input
                  type="text"
                  name="logictype"
                  value={inputs2.logictype || ""}
                  onChange={handleChange2}
                />
              </div>
              
              <div className="input-lable-v-div">
                <label htmlFor="credittype">Credit Type</label>
                <input
                  type="text"
                  name="credittype"
                  value={inputs2.credittype || ""}
                  onChange={handleChange2}
                />
              </div>
              <div className="input-lable-h-div">
                <button className="submit-btn" type="submit">
                  Search
                </button>
                <button className="submit-btn" type="button" onClick={handleSubmit3}>
                  Export CSV
                </button>
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
              name={"Products"}
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
