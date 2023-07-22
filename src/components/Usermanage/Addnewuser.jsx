import React, { useState, useEffect } from "react";
import { ErrorAlert, SuccessAlert } from "../middleware/AlertMsg";
import { template } from "../Partials/FormFields";
import { postReq, putReq, getReq } from "../middleware/AxiosApisCall";
import { useParams, useNavigate } from "react-router";
import DataList from "../Partials/DataList";

// To Add new User.
function Addnewuser() {
  const { id } = useParams();
  const [itemid, setItemid] = useState(id);
  const path = "User";

  const [inputs, setInputs] = useState({});
  const [tableRefresh, setTableRefresh] = useState(0);
  const [par, setPar] = useState();
  const navigate = useNavigate();

  // To get userdata by user id
  const loadDate = async () => {
    const response = await getReq(`${path}/${itemid}`);
    // console.log("LoadData:", response.data);
    if (response.data) {
      setPar(response.data._id);
      setInputs(response.data);
    } else {
      // console.log(response.data);
      setInputs(null);
    }
  };

  // When we are fetching data from user ID useEffect is calling that time.
  useEffect(() => {
    if (itemid) {
      loadDate();
    }
  }, [itemid]);

  //To set user input Fields
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(inputs);
    if (itemid) {
      // To Update User Data when id is true
      const response = await putReq(path, inputs, itemid);
      if (response.success) {
        setTableRefresh(tableRefresh + 1);
        setInputs({});
        SuccessAlert({
          title: "Edit User",
          message: "User Updated successfully",
        });
        navigate("../listuser");
      } else {
        ErrorAlert({ title: "Edit User", message: response.msg });
      }
    } else {
      // To Submit UserData
      const response = await postReq(path, inputs);

      if (response.success) {
        setTableRefresh(tableRefresh + 1);
        setInputs({});
        navigate('../listuser');
        SuccessAlert({ title: "Add User", message: "User Added successfully" });
      } else {
        ErrorAlert({ title: "Add User", message: response.msg });
      }
    }
  };

  return (
    <React.Fragment>
      <div className="add-user-container">
        <div className="headingdiv">
          <span className="componet-title">Add New User</span>

          <div>
            {/* navigate is used to get back onestep (back button) */}
            <button
              onClick={() => {
                navigate(-1);
              }}
            >
              Back
            </button>
          </div>
        </div>
        <div className="option-btn">
          <button
            onClick={() => {
              navigate("/listuser");
            }}
          >
            {" "}
            User List
          </button>
        </div>
        <form className="flex-row form-2col-ver" onSubmit={handleSubmit}>
          <div className="componet-sub2-title">
            <span>User Details</span>
          </div>

          <div className="flex-col ">
            <div className="flex-row">
              {/* Template data getting from this path : {../Partials/FormFields} */}
              {/* This map is only  for left side user fields */}
              {template.addnewuser.map((adduser) => {
                return (
                  <div className="input-lable-h-div">
                    <label htmlFor={adduser.name}>{adduser.title}</label>
                    <input
                      name={adduser.name}
                      type={adduser.type}
                      value={inputs[adduser.name] || ""}
                      onChange={handleChange}
                      required
                      autoComplete="off"
                    />
                  </div>
                );
              })}
            </div>

                <div className="flex-row">
              {/* This map is only  for Right side user fields */}
              <div className="input-lable-h-div">
              <label htmlFor="display_name">Display Name</label>
              <input
                name={"display_name"}
                type={"text"}
                value={inputs.display_name || ""}
                onChange={handleChange}
                required
                autoComplete="off"
              />
             </div>

              <div className="input-lable-h-div">
                <DataList
                  name={"role"}
                  value={inputs.role || " "}
                  path={"Permission"}
                  option={"role"}
                  handleChange={handleChange}
                  heading={"Role"}
                />
              </div>
              <div className="input-lable-h-div">
                <DataList
                  name={"city"}
                  value={inputs.city || " "}
                  path={"City"}
                  option={"city"}
                  handleChange={handleChange}
                  heading={"City"}
                />
              </div>
              <div className="input-lable-h-div">
                <DataList
                  name={"state"}
                  value={inputs.state || " "}
                  path={"State"}
                  option={"state"}
                  handleChange={handleChange}
                  heading={"State"}
                />
              </div>
              <div className="input-lable-h-div">
                <DataList
                  name={"country"}
                  value={inputs.country || " "}
                  path={"Country"}
                  option={"country"}
                  handleChange={handleChange}
                  heading={"Country"}
                />
              </div>
              
            </div>
          </div>

          {/* Log in info start from here*/}

          <div className="componet-sub-title">
            <span>Login Info</span>
          </div>

          <div>
            <div className="flex-col">
              {/* This template for login Form fields */}
              {template.loginInfo.map((log) => {
                return (
                  <div className="input-lable-v-div">
                    <label htmlFor={log.name}>{log.title}</label>

                    <input
                      name={log.name}
                      type={log.type}
                      value={inputs[log.name] || ""}
                      onChange={handleChange}
                      required
                      autoComplete="off"
                    />
                  </div>
                );
              })}

              <div className="input-lable-v-div">
                <button type="submit" className="submit-btn">
                  {itemid ? <span>Update</span> : <span>Save</span>}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Addnewuser;
