import React, { useState, useEffect } from "react";
import { postReq, putReq, getReq } from "../middleware/AxiosApisCall";

import { CleanData} from "../middleware/CleanData";
import DataList from "../Partials/DataList";
import BulkUpload from "../Partials/BulkUpload";
import { SuccessAlert, ErrorAlert } from "../middleware/AlertMsg"; //1
import TableDataWithPagination from "../Partials/TableDataWithPagination";
import { useParams, useNavigate } from "react-router";


function Addnewmachine() {
  const navigate = useNavigate();
  const path = "Product";
  const ComponentName = "Product";
  const [inputs, setInputs] = useState({});
  const [inputs2, setInputs2] = useState({});
  const [addproductformstate, setaddproductformstate] = useState(); //Add form state use to show or hide add product form
  const [bulkformstate, setbulkformstate] = useState(false);
  const [par, setPar] = useState(); //var to show company user form state for edit or add new req
  const [itemid, setItemid] = useState(); //var to show company  form state for edit or add new req
  const [searchData,setSearchData] = useState();
  const [reject,setReject] = useState(false);


  const clearform = () => {//TODO:Clear all State take to initial State
    setInputs({});
    setPar();
    setInputs2({});
    setItemid();
    setaddproductformstate(false);
    setSearchData()
  };
  const loadDateUsertable = async () => { //FIXME://not using right now it will use in search product
    const response = await getReq(`${Product}/${itemid}`);
    if (response.data.length) {
      console.log(response.data);
      setcompanyusertable(response.data);
    } else {
      setcompanyusertable(null);
    }
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
  const editClick = (pid) => {//TODO:Handle Edit request from  Table Componenet
    setPar(pid._id);
  };
  const addproduct = () => {//TODO:Handle Hide and Show of Add Product From
    setaddproductformstate(!addproductformstate);
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
        <button onClick={()=>{setbulkformstate(!bulkformstate);}}>
        {`Bulk ${ComponentName} Upload`}
      </button>
        </div>
      </div>


      {bulkformstate && <BulkUpload
        ComponentName={ComponentName}
        name={"Products"} 
        path={path}
        rejectdata={rejectdata}
        />}

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
            <form className="flex-col" onSubmit={handleSubmit}>
              <div className="input-lable-v-div">
                <label htmlFor="productid"> Product ID</label>
                <input
                  type="text"
                  name="productid"
                  value={inputs.productid || ""}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-lable-v-div">
                <label htmlFor="productname"> Product Name</label>
                <input
                  type="text"
                  name="productname"
                  value={inputs.productname || ""}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-lable-v-div">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  name="description"
                  value={inputs.description || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="input-lable-v-div">
                <label htmlFor="materialtype">Material Type</label>
                <input
                  type="text"
                  name="materialtype"
                  value={inputs.materialtype || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="input-lable-v-div">
                <label htmlFor="sellingprice">Selling Price</label>
                <input
                  type="number"
                  name="sellingprice"
                  value={inputs.sellingprice || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="input-lable-v-div">
                <label htmlFor="mass">Mass</label>
                <input
                  type="number"
                  name="mass"
                  value={inputs.mass || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="input-lable-v-div">
                <DataList
                  value={inputs.unit || ""}
                  path={"Unit"}
                  handleChange={handleChange}
                  name={"unit"}
                  option={"unit"}
                  heading={"Unit"}
                />
              </div>
              <div className="input-lable-v-div">
                <label htmlFor="remark">Remark</label>
                <textarea
                  type="text"
                  name="remark"
                  value={inputs.remark || ""}
                  onChange={handleChange}
                />
              </div>

              <div className="input-lable-h-div">
                <button className="submit-btn" type="submit">
                  {par ? "Update" : "Save"}
                </button>
              </div>
            </form>
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
                <label htmlFor="productid"> Product ID</label>
                <input
                  type="text"
                  name="productid"
                  value={inputs2.productid || ""}
                  onChange={handleChange2}
                />
              </div>
              <div className="input-lable-v-div">
                <label htmlFor="productname"> Product Name</label>
                <input
                  type="text"
                  name="productname"
                  value={inputs2.productname || ""}
                  onChange={handleChange2}
                />
              </div>

              <div className="input-lable-v-div">
                <label htmlFor="materialtype">Material Type</label>
                <input
                  type="text"
                  name="materialtype"
                  value={inputs2.materialtype || ""}
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
              key={searchData}
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

export default Addnewmachine;
