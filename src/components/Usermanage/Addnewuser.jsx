import React, { useState,useEffect } from "react";
import { ErrorAlert, SuccessAlert } from "../middleware/AlertMsg";
import { template } from "../Partials/FormFields";
import { postReq,putReq,getReq } from "../middleware/AxiosApisCall";
import { useParams ,useNavigate} from "react-router";
import DataList from "../Partials/DataList";
// import DataList from "../Partials/DataList";
function Addnewuser() {
  const {id}=useParams();
  const [itemid, setItemid] = useState(id);
  const path = "User";
  const [inputs, setInputs] = useState({});
  const [tableRefresh,setTableRefresh]=useState(0);
  const[par, setPar] = useState()

  const navigate=useNavigate();
  const loadDate = async () => {
    const response = await getReq(`${path}/${itemid}`);
    if(response.data){
      setPar(response.data._id);
      setInputs(response.data);
    }else{
      console.log(response.data)
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
    console.log(inputs);
    if(itemid){
    const response = await putReq(path,inputs,itemid);
    if (response.success) {
      setTableRefresh(tableRefresh+1);
      setInputs({});
      SuccessAlert({ title: "Edit User", message: "User Updated successfully" });
    } else {
      ErrorAlert({ title: "Edit User", message: response.msg });
    }
  }
  
  else{
    const response = await postReq(path, inputs);
    if (response.success) {
      setTableRefresh(tableRefresh+1);
      setInputs({});
      SuccessAlert({ title: "Add User", message: "User Added successfully" });
    } else {
      ErrorAlert({ title: "Add User", message: response.msg });
    }
  }
  }

  function dataslist()
  {
if(template.addnewuser1.type==='datalist')
{
return (<DataList  
value={inputs.template.addnewuser1.name || ""}
path={template.addnewuser1.title}

option={template.addnewuser1.name}
name={template.addnewuser1.name}/>)

  }else{
    return null;
  }
  }

  dataslist();
 

  return (
    <React.Fragment>
      <div className="add-user-container">

      
        <div className="headingdiv">
          <span className="componet-title">Add New User</span>
       
           <div>
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
            <span>User Details</span>
          </div>

          {/* <div className="flex-col "> */}

           
          <div className="flex-row">
              
            {
                template.addnewuser.map((adduser)=>{
                  return (
                   
                    <div className="input-lable-h-div">
                    <label htmlFor={adduser.name}>{adduser.title}</label>
                    <input
                      name={adduser.name}
                      type={adduser.type}
                      value={inputs[adduser.name] || ""}
                      onChange={handleChange}
                      required
                    />
                  </div>
                 
                  )
                })
              
            }
            </div>

            <div className="flex-row">
            {
        dataslist && template.addnewuser1.map((adduser1)=>{

        
                return (
                 <>
                  <div className="input-lable-h-div">
                    <label htmlFor={adduser1.name}>{adduser1.title}</label>
                    <input
                      name={adduser1.name}
                      type={adduser1.type }
                      value={inputs[adduser1.name] || ""}
                      onChange={handleChange}
                      required
                    />
                  
                  </div>

                 
                    </>
                
                )
              })
            }
            </div>

            {/* <div className="input-lable-h-div">
                    <DataList
                      value={inputs.city || ""}
                      path={path}
                      handleChange={handleChange}
                      name={"machineid"}
                      option={"machineid"}
                      heading={"Role"}
                    />
             </div>

            <div className="input-lable-h-div">
                    <DataList
                      value={inputs.city || ""}
                      path={path}
                      handleChange={handleChange}
                      name={"machineid"}
                      option={"machineid"}
                      heading={"City"}
                    />
             </div>
             <div className="input-lable-h-div">
                    <DataList
                      value={inputs.state || ""}
                      path={path}
                      handleChange={handleChange}
                      name={"machineid"}
                      option={"machineid"}
                      heading={"State"}
                    />
              </div>
              <div className="input-lable-h-div">
                    <DataList
                      value={inputs.country || ""}
                      path={path}
                      handleChange={handleChange}
                      name={"machineid"}
                      option={"machineid"}
                      heading={"Country"}
                    />
              </div> */}
           {/* </div> */}

           
          {/* Log in info start from here*/}

          <div className="componet-sub-title">
            <span>Login Info</span>
          </div>

          <div>

          <div className="flex-col">
          {
            template.loginInfo.map((log)=>{
              return(
               
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
              
              )
            })
           
          }
          <div className="input-lable-v-div">
          <button type="submit" className="submit-btn">
          {itemid ?<span>Update</span>:<span>Save</span>} 
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
