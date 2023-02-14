import React, { useState, useEffect } from "react";
import { ErrorAlert, SuccessAlert } from "../middleware/AlertMsg";
import DataList from "../Partials/DataList";
import { postReq, putReq, getReq } from "../middleware/AxiosApisCall";
import { useParams, useNavigate } from "react-router";

function AddNewRole() {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log("🚀 ~ file: AddNewRole.jsx:9 ~ AddNewRole ~ id", id);
  const [itemid, setItemid] = useState(id); //id passed
  const path = "Permission";
  const [inputs, setInputs] = useState({});

  const [par, setPar] = useState(); //

  const loadDate = async () => {
    const response = await getReq(`${path}/${itemid}`);
    if (response.data) {
      setPar(itemid);
      setInputs(response.data);
    } else {
      console.log(response.data);
      setPar();
      setInputs();
    }
  };

  useEffect(() => {
    if (itemid) {
      loadDate();
    }
  }, []);
  useEffect(() => {
    console.log("🚀 ~ file: AddNewRole.jsx:13 ~ AddNewRole ~ inputs", inputs);
  }, [inputs]);
  function handleChange(event) {
    const name = event.target.name;
    const checked = event.target.checked;
    if (event.target.type == "checkbox") {
      setInputs((values) => ({ ...values, [name]: checked }));
    } else {
      setInputs((values) => ({ ...values, [name]: event.target.value }));
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (par) {
      console.log("this is ", par);
      const response = await putReq(path, inputs, par);
      if (response.success) {
        setPar();
        SuccessAlert({
          title: `Edit ${path}`,
          message: `${path} Update successfully`,
        });
        navigate(`../userpermission`);
      } else {
        setPar();
        ErrorAlert({ title: `Edit ${path}`, message: response.msg });
      }
    } else {
      const response = await postReq(path, inputs);
      if (response.success) {
        setInputs({}); //5
        SuccessAlert({
          title: `Add ${path}`,
          message: `${path} Added successfully`,
        });
        navigate(`../userpermission`);
      } else {
        ErrorAlert({ title: `Add ${path}`, message: response.msg });
      }
    }
  };

  return (
    <React.Fragment>
      <div className="add-user-container">
        <div>
          <span className="componet-title">Add New Role</span>
        </div>

        <form className="flex-row form-2col-ver" onSubmit={handleSubmit}>
          <div className="componet-sub-title">
            <span>Role Details</span>
          </div>

          <div>
            <label htmlFor="role_name">Role Name :</label>
            <input
              type="text"
              name="role"
              value={inputs.role || ""}
              onChange={handleChange}
            />
          </div>

          <div>
            <div className="input-lable-checkbox-div">
              {/* <input type="checkbox" name="userm_input"/>*/}
              <label htmlFor="usermanage">User Manage</label>
              <input
                type="checkbox"
                name="usermanage"
                checked={inputs.usermanage || false}
                value="User Manage"
                onChange={handleChange}
              />
            </div>
            <section>
              <div className="input-lable-checkbox-div">
                <div>
                  <input
                    type="checkbox"
                    name="addnewuser"
                    checked={inputs.addnewuser || false}
                    value="addnewuser"
                    onChange={handleChange}
                  />
                  <label htmlFor="addnewuser">Add New User</label>
                </div>

                <div>
                  <input
                    type="checkbox"
                    name="listuser"
                    checked={inputs.listuser || false}
                    value="listuser"
                    onChange={handleChange}
                  />
                  <label htmlFor="listuser">User List</label>
                </div>

                <div>
                  <input
                    type="checkbox"
                    name="userpermission"
                    checked={inputs.userpermission || false}
                    value="userpermission"
                    onChange={handleChange}
                  />
                  <label htmlFor="userpermission">User Permission</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="userrole"
                    checked={inputs.userrole || false}
                    value="userrole"
                    onChange={handleChange}
                  />
                  <label htmlFor="userrole">Add and Update Role</label>
                </div>
              </div>
            </section>

            <div className="input-lable-checkbox-div">
              {/* <input type="checkbox" name="addnew_user" />*/}
              <label htmlFor="addnew_user">Company Manage </label>
              <input
                type="checkbox"
                name="companymanage"
                checked={inputs.companymanage || false}
                value="companymanage"
                onChange={handleChange}
              />
            </div>

            <section>
              <div className="input-lable-checkbox-div">
                <div>
                  <input
                    type="checkbox"
                    name="addnewcompany"
                    checked={inputs.addnewcompany || false}
                    value="addnewcompany"
                    onChange={handleChange}
                  />

                  <label htmlFor="addnewcompany">Add New Company</label>
                </div>

                <div>
                  <input
                    type="checkbox"
                    name="listcompany"
                    checked={inputs.listcompany || false}
                    value="listcompany"
                    onChange={handleChange}
                  />
                  <label htmlFor="listcompany">List Company</label>
                </div>
              </div>
            </section>
            <div className="input-lable-checkbox-div">
              <label htmlFor="managemachine">Machine Manage </label>
              <input
                type="checkbox"
                name="managemachine"
                checked={inputs.managemachine || false}
                value="managemachine"
                onChange={handleChange}
              />
            </div>
            <section>
              <div className="input-lable-checkbox-div">
                <div>
                  <input
                    type="checkbox"
                    name="addnewmachine"
                    checked={inputs.addnewmachine || false}
                    value="addnewmachine"
                    onChange={handleChange}
                  />
                  <label htmlFor="addnewmachine">Add New Machine</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="listmachine"
                    checked={inputs.listmachine || false}
                    value="listmachine"
                    onChange={handleChange}
                  />
                  <label htmlFor="listmachine">List Machine</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="machineconfiguration"
                    checked={inputs.machineconfiguration || false}
                    value="machineconfiguration"
                    onChange={handleChange}
                  />
                  <label htmlFor="machineconfiguration">
                    Machine Configuration{" "}
                  </label>
                </div>
              </div>
            </section>

            <div className="input-lable-checkbox-div">
              {/*<input type="checkbox" name="user_permission"/>*/}
              <label htmlFor="employeemanage">Employee Manage</label>
              <input
                type="checkbox"
                name="employeemanage"
                checked={inputs.employeemanage || false}
                value="employeemanage"
                onChange={handleChange}
              />
            </div>
            <section>
              <div className="input-lable-checkbox-div">
                <div>
                  <input
                    type="checkbox"
                    name="addnewemployee"
                    checked={inputs.addnewemployee || false}
                    value="addnewemployee"
                    onChange={handleChange}
                  />
                  <label htmlFor="addnewemployee">Add New Employee</label>
                </div>

                <div>
                  <input
                    type="checkbox"
                    name="updateemployee"
                    checked={inputs.updateemployee || false}
                    value="updateemployee"
                    onChange={handleChange}
                  />
                  <label htmlFor="updateemployee">Update Employee</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="searchandupdateemployee"
                    checked={inputs.searchandupdateemployee || false}
                    value="searchandupdateemployee"
                    onChange={handleChange}
                  />
                  <label htmlFor="searchandupdateemployee">
                    Search and Edit Employee
                  </label>
                </div>
              </div>
            </section>

            <div className="input-lable-checkbox-div">
              {/*<input type="checkbox" name="user_permission" />*/}
              <label htmlFor="refillermanager">Refiller Manage</label>
              <input
                type="checkbox"
                name="refillermanager"
                checked={inputs.refillermanager || false}
                value="refillermanager"
                onChange={handleChange}
              />
            </div>
            <section>
              <div className="input-lable-checkbox-div">
                <div>
                  <input
                    type="checkbox"
                    name="managedc"
                    checked={inputs.managedc || false}
                    value="managedc"
                    onChange={handleChange}
                  />
                  <label htmlFor="managedc">Manage DC</label>
                </div>

                <div>
                  <input
                    type="checkbox"
                    name="managedcaccept"
                    checked={inputs.managedcaccept || false}
                    value="managedcaccept"
                    onChange={handleChange}
                  />
                  <label htmlFor="managedcaccept">Manage Accept DC</label>
                </div>

                <div>
                  <input
                    type="checkbox"
                    name="managecompletedrefillrequest"
                    checked={inputs.managecompletedrefillrequest || false}
                    value="managecompletedrefillrequest"
                    onChange={handleChange}
                  />
                  <label htmlFor="managecompletedrefillrequest">
                    Manage Completed Refill Request
                  </label>
                </div>
              </div>
            </section>

            <div className="input-lable-checkbox-div">
              {/*<input type="checkbox" name="user_permission" />*/}
              <label htmlFor="products">Product Manage</label>
              <input
                type="checkbox"
                name="products"
                checked={inputs.products || false}
                value="products"
                onChange={handleChange}
              />
            </div>
            <section>
              <div className="input-lable-checkbox-div">
                <div>
                  <input
                    type="checkbox"
                    name="productlist"
                    checked={inputs.productlist || false}
                    value="productlist"
                    onChange={handleChange}
                  />
                  <label htmlFor="productlist">Product List</label>
                </div>

                <div>
                  <input
                    type="checkbox"
                    name="bulkproductupload"
                    checked={inputs.bulkproductupload || false}
                    value="bulkproductupload"
                    onChange={handleChange}
                  />
                  <label htmlFor="bulkproductupload">Bulk Product Upload</label>
                </div>

                <div>
                  <input
                    type="checkbox"
                    name="singleproductadd"
                    checked={inputs.singleproductadd || false}
                    value="singleproductadd"
                    onChange={handleChange}
                  />
                  <label htmlFor="singleproductadd">Add Single Product</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="updatebulkproduct"
                    checked={inputs.updatebulkproduct || false}
                    value="updatebulkproduct"
                    onChange={handleChange}
                  />
                  <label htmlFor="updatebulkproduct">Update Bulk Product</label>
                </div>
              </div>
            </section>

            <button className="submit-btn" type="submit">
              Save
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default AddNewRole;
