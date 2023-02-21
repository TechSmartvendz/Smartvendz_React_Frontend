import React, { useState, useEffect } from "react";
import { postReq, patchReq, getReq } from "../middleware/AxiosApisCall";
import DataList from "../Partials/DataList";
import { SuccessAlert, ErrorAlert } from "../middleware/AlertMsg"; //1
import TableData2 from "../Partials/TableData2";
import { useParams, useNavigate } from "react-router";

function Addnewcompany() {
  const navigate = useNavigate();
  const path = "Company";
  const companyUsersPath = "Company/CompanyUsers";
  const [inputs, setInputs] = useState({});
  const [inputs2, setInputs2] = useState({});

  const { id } = useParams();
  const [itemid, setItemid] = useState(id);
  const [companyusertable, setcompanyusertable] = useState();


  const loadDate = async () => {
    const response = await getReq(`${path}/${itemid}`);
    if (response.data) {
      console.log(
        "🚀 ~ file: Addnewcompany.jsx:27 ~ loadDate ~ response.data",
        response.data
      );
      setInputs2((values) => ({
        ...values,
        companyid: response.data.companyid,
      }));
      setInputs(response.data);
    } else {
      navigate(`../`);
      console.log(response.data);
    }
  };
  const loadDateUsertable = async () => {
    const response = await getReq(`${companyUsersPath}/${itemid}`);
    if (response.data.length) {
      console.log(
        "🚀 ~ file: Addnewcompany.jsx:26 ~ loadDate ~ response.data",
        response.data
      );
      console.log(response.data);
      setcompanyusertable(response.data);
    } else {
      setcompanyusertable(null);
    }
  };

  const loadDate3 = async (assignid) => {
    const response = await getReq(`${companyUsersPath}/${itemid}/${assignid}`);
    if (response.data.length) {
      console.log(
        "🚀 ~ file: Addnewcompany.jsx:26 ~ loadDate ~ response.data",
        response.data
      );
      console.log(response.data);
      setInputs2(response.data[0]);
    } else {
      console.log(response.data);
      setcompanyusertable(null);
    }
  };

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  }
  function handleChange2(event) {
    console.log(
      "🚀 ~ file: Addnewcompany.jsx:99 ~ handleChange2 ~ event.target.type",
      event.target.type
    );
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

    const response = await postReq(companyUsersPath, inputs2);
    if (response.success) {
      SuccessAlert({
        title: "Assign User ",
        message: "Assign User successfully",
      });
      loadDateUsertable();
      setInputs2();
      setInputs2((values) => ({
        ...values,
        companyid: response.data.companyid,
      }));
    } else {
      ErrorAlert({ title: "Assign User ", message: response.msg });
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await postReq(path, inputs);
    if (response.success) {
      SuccessAlert({
        title: "Add Company",
        message: "Company Added successfully",
      });
      navigate(`${response.data._id}`);
      setItemid(response.data._id);
      setInputs2();
      setInputs2((values) => ({
        ...values,
        companyid: response.data.companyid,
      }));
    } else {
      ErrorAlert({ title: "Add Company", message: response.msg });
    }
  };

  const editClick = (pid) => {
    loadDate3(pid._id);
  };

  useEffect(() => {
    console.log("U1");
    if (itemid) {
      console.log("U1A");
      loadDate();
      loadDateUsertable();
    }
  }, [itemid]);

  useEffect(() => {
    if(id){
    setItemid(id)}
    else{
      setcompanyusertable()
      setInputs2({})
      setInputs({})
      setItemid()
    }
  }, [id]);

  return (
    <React.Fragment>
      <div className="add-user-container">
        <div className="headingdiv">
          <span className="componet-title">Add Company</span>
          <div>
            <button onClick={() => navigate(-1)}>Back</button>
          </div>
        </div>

        <form className="flex-row form-2col-ver" onSubmit={handleSubmit}>
          <div className="componet-sub-title">
            <span>Company Details</span>
          </div>

          <div className="flex-row">
            <div className="input-lable-h-div">
              <label htmlFor="companyid"> Company ID</label>
              <input
                type="text"
                name="companyid"
                className="slot"
                value={inputs.companyid || ""}
                onChange={handleChange}
              />
            </div>

            <div className="input-lable-h-div">
              <label htmlFor="companyname">Company Name </label>
              <input
                type="text"
                name="companyname"
                value={inputs.companyname || ""}
                onChange={handleChange}
              />
            </div>

            <div className="input-lable-h-div">
              <label htmlFor="address">Address </label>
              <input
                type="text"
                name="address"
                value={inputs.address || ""}
                onChange={handleChange}
              />
            </div>

            <div className="input-lable-h-div">
              <DataList
                value={inputs.area || ""}
                path={"Area"}
                handleChange={handleChange}
                name={"area"}
                option={"area"}
                heading={"Area"}
              />
            </div>

            <div className="input-lable-h-div">
              <label htmlFor="telephone">Telephone </label>
              <input
                type="text"
                name="telephone"
                value={inputs.telephone || ""}
                onChange={handleChange}
              />
            </div>

            <div className="input-lable-h-div">
              <label htmlFor="alt_telepone">Alternate Telephone </label>
              <input
                type="text"
                name="alt_telepone"
                value={inputs.alt_telepone || ""}
                onChange={handleChange}
              />
            </div>

            <div className="input-lable-h-div">
              <label htmlFor="email">Email </label>
              <input
                type="text"
                name="email"
                value={inputs.email || ""}
                onChange={handleChange}
              />
            </div>

            <div className="input-lable-h-div">
              <button className="submit-btn" type="submit">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* second form */}
      <div className="add-user-container">
        <div className="componet-sub-title">
          <span>Add Comapny</span>
        </div>

        <form className="flex-col" onSubmit={handleSubmit2}>
          <div className="input-lable-v-div">
            <DataList
              value={inputs2.companyid || ""}
              path={"Company"}
              handleChange={handleChange2}
              name={"companyid"}
              option={"companyid"}
              heading={"Company"}
            />
          </div>

          <div className="input-lable-v-div">
            <DataList
              value={inputs2.role || ""}
              path={"Permission"}
              handleChange={handleChange2}
              name={"role"}
              option={"role"}
              heading={"User Type"}
            />
          </div>
          <div className="input-lable-v-div">
            <DataList
              value={inputs2.assign_user || ""}
              path={"User"}
              handleChange={handleChange2}
              name={"assign_user"}
              option={"user_id"}
              heading={"Assign User"}
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
            />
          </div>

          <div className="input-lable-h-div">
            <button className="submit-btn" type="submit">
              Save
            </button>
          </div>
        </form>
      </div>

      <div className="table_container-div">
        <TableData2
          path={companyUsersPath}
          key={companyusertable}
          data={companyusertable}
          editClick={editClick}
        />
      </div>
    </React.Fragment>
  );
}

export default Addnewcompany;
