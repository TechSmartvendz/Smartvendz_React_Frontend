import React, { useState ,useEffect} from "react";
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
 console.log('EditID:',_id)
  const [itemid, setItemid] = useState(_id);

console.log('itemid:',itemid)
  const path = "addtax";
  const taxlist="AllTax";
  const edittax="tax";

  const loadDate = async () => {
    
    const response = await getReq(`${edittax}/${itemid}`);
    console.log('WareHouse Data:',response.data)
    if (response.data) {

      setPar(response.data._id);
      setInputs(response.data);
    } else {
      console.log(response.data);
      setInputs(null);
    }
  };

  useEffect(() => {

    if (itemid) {
      loadDate();
    }
  }, [itemid]);







  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (itemid) {
      console.log("🚀 ~ file: Statemanage.jsx:26 ~ handleSubmit ~ par", itemid);
      const response = await putReq(edittax, inputs,itemid);
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
      const response = await postReq(path, inputs);
      if (response.success) {
        console.log(response.data);
        setTableRefresh(tableRefresh + 1);
        setInputs({}); //5
        SuccessAlert({ title: "GST", message: "GST Added successfully" });
      } else {
        ErrorAlert({ title: "Add GST", message: response.msg });
      }
    }
  };

  const editClick=async(item)=> {

    navigate(`../addwarehouse/${item._id}`);
  
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
          <div className="general-manage-div">
            <label htmlFor="gstName">GST Name:</label>
            <input
              name="gstName"
              type="text"
              value={inputs.gstName || ""}
              onChange={handleChange}
              required
            />
            <label htmlFor="gstRate">GST Rate:</label>
            <input
              name="gstRate"
              type="text"
              value={inputs.gstRate || ""}
              onChange={handleChange}
              required
            />

            <button className="submit-btn">
            {par?(<span>Update </span>):(<span>Add </span>)}
            </button>
          </div>
        </form>
        <TableData path={taxlist} key={tableRefresh} editClick={editClick}/>
      </div>
    </React.Fragment>
  );
}

export default GstMaster;
