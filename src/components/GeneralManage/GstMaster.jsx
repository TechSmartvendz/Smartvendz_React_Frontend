import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { postReq, patchReq, putReq } from "../middleware/AxiosApisCall";
import { SuccessAlert, ErrorAlert } from "../middleware/AlertMsg"; //1
import TableData from "../Partials/TableData"; //2

function GstMaster() {
  const [inputs, setInputs] = useState({});
  const [tableRefresh, setTableRefresh] = useState(0);
  const [par, setPar] = useState();

  const navigate = useNavigate();
  const { _id } = useParams();

  // console.log("EditID:", _id);
  const [itemid, setItemid] = useState(_id);
// console.log('itemid',itemid)
  // console.log("itemid:", itemid);
  const path = "tax";
  const getTax = "tax/Datalist";

  
  

  // loadDate is used to get GST detail based on its ID
  const loadDate = async () => {
    const response = await getReq(`${tax}/${itemid._id}`);
    // console.log("WareHouse Data:", response.data);
    if (response.data) {
      setPar(response.data._id);
      setInputs(response.data);
    } else {
      // console.log(response.data);
      setInputs(null);
    }
  };

  // in this Use Effect callng loadDate()function when itemid id true
  useEffect(() => {
    if (itemid) {
      loadDate();
    }
  }, [itemid]);

  // This function is used to set Input field Data
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // When itemid is true Then only putReq Api Will call else post Request API will call
    if (par) {
      // console.log("🚀 ~ file: Statemanage.jsx:26 ~ handleSubmit ~ par", itemid);
      const response = await putReq(path, inputs, par);
      if (response.success) {
        setPar();
        setTableRefresh(tableRefresh + 1); //4
        setInputs({}); //5
        SuccessAlert({
          title: "Edit State",
          message: "State Update successfully",
        });
      } else {
        setPar();
        setTableRefresh(tableRefresh + 1); //4
        setInputs({});
        ErrorAlert({ title: "Edit State", message: response.msg });
      }
    } else {
      // This API is used to post the Data.
      const response = await postReq(path, inputs);
      if (response.success) {
        // console.log(response.data);
        setTableRefresh(tableRefresh + 1);
        setInputs({}); //5
        SuccessAlert({ title: "GST", message: "GST Added successfully" });
      } else {
        ErrorAlert({ title: "Add GST", message: response.msg });
      }
    }
  };

  // This function is used to get ID of the tax for edit purpose
  const editClick=(pid)=>{

    // console.log('this is ', pid)
    setPar(pid._id)
    setInputs(pid) 

  }

  return (
    <React.Fragment>
      <div className="add-user-container">
        <div className="headingdiv">
          <span className="componet-title">GST Manage</span>
          <div>
            <button onClick={() => navigate(-1)}>Back</button>
          </div>
        </div>

        <form className="flex-row form-2col-ver" onSubmit={handleSubmit}>
          <div className="componet-sub-title">
            <span>GST Manage</span>
          </div>
          <div className="flex-col">

          <div className="flex-row">
          <div className="input-lable-h-div">
            <label htmlFor="HSN_code">HSN Code:</label>
            <input
              name="hsn_Code"
              type="number"
              value={inputs.hsn_Code || ""}
              onChange={handleChange}
              required
            />
            </div>

            <div className="input-lable-h-div">
            <label htmlFor="gstName">HSN description:</label>
            <input
              name="hsn_description"
              type="text"
              value={inputs.hsn_description || ""}
              onChange={handleChange}
              required
            />
            </div>

            <div className="input-lable-h-div">
            <label htmlFor="CGST">CGST:</label>
            <input
              name="cgst"
              type="number"
              value={inputs.cgst || ""}
              onChange={handleChange}
              required
            />
            </div>
             </div>

             <div className="flex-row">
             <div className="input-lable-h-div">
            <label htmlFor="SGST">SGST:</label>
            <input
              name="sgst"
              type="number"
              value={inputs.sgst || ""}
              onChange={handleChange}
              required
            />
            </div>
            <div className="input-lable-h-div">
            <label htmlFor="IGST">IGST:</label>
            <input
              name="igst"
              type="number"
              value={(inputs.igst)=Number(inputs.cgst) + Number(inputs.sgst) || ''}
              onChange={handleChange}
              required
            
            />
            </div>

            <div className="input-lable-h-div">
            <label htmlFor="CESS">CESS:</label>
            <input
              name="cess"
              type="number"
              value={inputs.cess || ""}
              onChange={handleChange}
              required
            />
              </div>
              </div>
           
            
          </div>
          <button style={{marginRight:'190px'}} className="submit-btn">
              {par ? <span>Update </span> : <span>Add </span>}
            </button>
        </form>
        
        <TableData path={path} getTax={getTax} key={tableRefresh} editClick={editClick} />
      </div>
    </React.Fragment>
  );
}

export default GstMaster;
