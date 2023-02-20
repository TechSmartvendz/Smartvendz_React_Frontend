
import React, { useState, useEffect } from "react";
import { ErrorAlert, SuccessAlert } from "../middleware/AlertMsg";

import { postReq, putReq, getReq } from "../middleware/AxiosApisCall";
import { useParams, useNavigate } from "react-router";
import { template } from "../Partials/FormFields";

function AddNewRole() {
  const navigate = useNavigate();
  
  const { id } = useParams();
  console.log("🚀 ~ file: AddNewRole.jsx:9 ~ AddNewRole ~ id", id);
   //id passed
  console.log("🚀 ~ file: AddNewRole.jsx:9 ~ AddNewRole ~ id", id);
  const [itemid, setItemid] = useState(id); //id passed
  const path = "Permission";
  const [inputs, setInputs] = useState({});

 //

  const [par, setPar] = useState(); //

  const loadDate = async () => {
    const response = await getReq(`${path}/${itemid}`);
    if (response.data) {
      setPar(itemid);
      setInputs(response.data);
    } else {
      console.log(response.data);
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
        <div className="headingdiv">
          <span className="componet-title">{par ? "Edit Role" :"Add New Role"}</span>
          <div >
          <button
            onClick={() => {
              navigate(-1);
            }}
          >
            Back
          </button>
        </div>
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
            {template.mains.map((data, key) => {
              return (
                <div key={key}>
                  <label htmlFor={data.name}>{data.title}</label>
                  <input
                    type={data.type}
                    name={data.name}
                    checked={inputs[data.name] || false}
                    onChange={handleChange}
                  />

                  {data.sections.map((fields, ke) => {
                    return (
                      <section key={ke}>
                        <div className="input-lable-checkbox-div">
                          <div>
                            <input
                              type={fields.type}
                              name={fields.name}
                              checked={inputs[fields.name] || false}
                              onChange={handleChange}
                            />
                            <label htmlFor={fields.name}>{fields.title}</label>
                          </div>
                        </div>
                      </section>
                    );
                  })}
                </div>
              );
            })}

            <button className="submit-btn" type="submit">
             {par ?<span>Update</span>:<span>Save</span>}
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
  
}

export default AddNewRole;


