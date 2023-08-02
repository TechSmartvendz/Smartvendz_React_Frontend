import React, { useState, useEffect } from "react";
import { ErrorAlert, SuccessAlert } from "../middleware/AlertMsg";
import { getReq,postReq,putReq } from "../middleware/AxiosApisCall";
import { useParams, useNavigate } from "react-router";
import DataList from "../Partials/DataList";

function AddWarehouse() {
  const { _id } = useParams();
  
  // console.log('EditID:',_id)
  const [itemid, setItemid] = useState(_id);
 
  const [inputs, setInputs] = useState({});
   const path="addWareHouse"
   const getpath = "getWarehouse"
   const putPath='updateWareHouse'
   

   const [tableRefresh, setTableRefresh] = useState(0);
   const [par, setPar] = useState();
   const navigate=useNavigate()



   const loadDate = async () => {
    
    const response = await getReq(`${getpath}/${itemid}`);
    // console.log('WareHouse Data:',response.data)
    if (response.data) {

      setPar(response.data._id);
      setInputs(response.data);
    } else {
      // console.log(response.data);
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

  // console.log("Inputs:", inputs);

  const handleSubmit = async(event) => {
    
    event.preventDefault();
    if (itemid) {
      const response = await putReq(putPath, inputs, itemid);
      if (response.success) {
        
        setTableRefresh(tableRefresh + 1);
        setInputs({});
        SuccessAlert({
          title: "Edit User",
          message: "User Updated successfully",
        });
        navigate('../warehouselist')
      } else {
        ErrorAlert({ title: "Edit User", message: response.msg });
      }
    }else{

    
    const response = await postReq(path, inputs);
    if (response.success) {
      // setInputs(response.data)
     SuccessAlert({ title: "Ware House", message: "Ware House Added successfully" });
      setInputs('')
      navigate('../warehouselist')
    } else {
      ErrorAlert({ title: "Ware House", message: response.msg });
    }
    // console.log("Submitted:", inputs);
  }
  };


   useEffect(()=>{
    setInputs({})

   },[])


  return (
    <React.Fragment>
      <div className="add-user-container">
        <div className="headingdiv">
          <span className="componet-title">Add Ware House</span>

          <div>
            <button onClick={() => navigate(-1)}>Back</button>
          </div>
        </div>
        <div className="option-btn">
      <button onClick={()=>{navigate("../warehouselist")}}>Warehouse List</button>
       </div>
        <form className="flex-row form-2col-ver" onSubmit={handleSubmit}>
          <div className="componet-sub2-title">
            <span>Warehouse Details</span>
          </div>

          <div className="flex-col ">
            <div className="flex-row">
              <div className="input-lable-h-div">
                <label>Ware House Name</label>
                <input
                  type="text"
                  name="wareHouseName"
                  value={inputs.wareHouseName}
                  onChange={handleChange}
                />
              </div>
              <div className="input-lable-h-div">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={inputs.email}
                  onChange={handleChange}
                />
              </div>

              <div className="input-lable-h-div">
                <label>Phone No</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={inputs.phoneNumber}
                  onChange={handleChange}
                />

              </div>

              <div className="input-lable-h-div">
                <label>Contact Person</label>
                <input
                  type="text"
                  name="contactPerson"
                  value={inputs.contactPerson}
                  onChange={handleChange}
                />
              </div>
              <div className="input-lable-h-div">
                {/* <label>Country</label>
                <input type="text" name="country" value={inputs.country} onChange={handleChange}/> */}
                <DataList
                  name={"country"}
                  value={inputs.country || null}
                  path={"Country"}
                  option={"country"}
                  handleChange={handleChange}
                  heading={"Country"}
                />
              </div>
            </div>

            <div className="flex-row">
              <div className="input-lable-h-div">

               <DataList
                  name="state"
                  value={inputs.state || " "}
                  path={"State"}
                  option={"state"}
                  handleChange={handleChange}
                  heading={"State"}
               />

              </div>
              <div className="input-lable-h-div">
              <DataList
                 name={"city"}
                  value={inputs.city || " "}
                  path={"City"}
                  option={"city"}
                  handleChange ={handleChange}
                  heading={"City"}
                />
              </div>
              <div className="input-lable-h-div">
              <DataList
                  name={"area"}
                  value={inputs.area || " "}
                  path={"Area"}
                  option={"area"}
                  handleChange={handleChange}
                  heading={"Area"}
                />
              </div>
              <div className="input-lable-h-div">
                <label>Address</label>
                <input
                  type="text"
                  name="address"
                  value={inputs.address}
                  onChange={handleChange}
                />
              </div>
              <div className="input-lable-h-div">
                <label>Pin Code</label>
                <input
                  type="text"
                  name="pincode"
                  value={inputs.pincode}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="input-lable-v-div">
            <button type="submit" className="submit-btn">
              <span>{itemid ?'Update' :'Create'}</span>
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default AddWarehouse;
