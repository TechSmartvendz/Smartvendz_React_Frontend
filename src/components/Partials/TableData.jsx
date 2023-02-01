import React, { useState, useEffect } from "react";
import { getReq, delReq, patchReq } from "../middleware/AxiosApisCall";
import { useParams, useNavigate, redirect } from "react-router-dom";

import { SuccessAlert, ErrorAlert } from "../middleware/AlertMsg";

function TableData(props) {

 
  const [tableData, setTableData] = useState();
  const [path, setPath] = useState(props.path);
  const loadTableDate = async () => {
    const response = await getReq(path);
    setTableData(response.data);
  };

  // const editTableData = async (id,data) => {

  //   const response = await editReq(path + id + data );
  //   setTableData(response.data)
  // }

  useEffect(() => {
    loadTableDate();
    // editTableData()
  }, []);

  const deleteState = async (event) => {
    console.log("🚀 ~ file: TableData.jsx:19 ~ deleteState ~ event", event)
    // props.parentFunction();
    const response = await delReq(path, event);
    if (response.status === "success") {
      loadTableDate();
      SuccessAlert({
        title: "Data Deleted",
        message: `${path} : Delete Succesfully `,
      });
    } else {
      ErrorAlert({
        title: "${path} Delete: Error",
        message: response.error,
      });
    }
  };


  // useEffect(() => {
  //   console.log(
  //     "🚀 ~ file: TableData.jsx:21 ~ StateTable ~ tableData",
  //     tableData
  //   );
  // }, [tableData]);

<<<<<<< HEAD
  
=======
//   function updateTodo() {

//  console.log(item._id)
//  // axios.patch('https://jsonplaceholder.typicode.com/todos/1',{
//  //   title:'This is the title',
//  //   completed: false
//  // })
//  // .then( res => showOutput(res))
//  // .catch( error => console.log(error))
 

// }

const navigate = useNavigate();

function Redirect(item) {
  // const navigate = useNavigate();
  // navigate("/statemanage");
  console.log(item);
  props.editClick(item);


     
    //  {stateId ?redirect("/statemanage:stateId"):  redirect("/statemanage") }
}



>>>>>>> bae76ab8a7242e52a20a09f027ea7dcc27628ee3
return (

  <React.Fragment>
    <div className="componet-sub2-title">
      <span>Total {path}: {tableData != null ? tableData.length : 0}</span>
    </div>
    <div className="table_container-div">
      <table>
        <tbody>
          <tr>
            {
              tableData != null ? (
              Object.keys(tableData[0]).map(
                (key) =>
                  key != ("_id" || null) && (
                    <th key={key}>
                      <span style={{ textTransform: "capitalize" }}>
                        {key}
                      </span>
                      
                    </th>
                  )
              )
            ) : (
              <td></td>
            )
          }
            {
              tableData != null && <th>Actions</th>
            }
          </tr>

          {
            tableData != null ? (
            tableData.map((item, index) => {
              // console.log("🚀 ~ file: TableData.jsx:111 ~ TableData ~ item", item)
              return <tr key={item._id}>
             	{Object.keys(item).filter(i=> i !== '_id').map((input, index) => {
                 	return <td key={index}>{item[input]}</td>
             	})}
               	
                	<td>
                  	<button className="btn_edit"
                //    onClick={() => console.log(item._id)}>Edit</button>

                
                    onClick={() =>
                      Redirect(item)
                      
                     }>
                      Edit
                      </button>



                  	<button
                    	className="btn_delete" value={item.id}
                    	onClick={() => deleteState(item._id)}
                  	>
                    	Delete
                  	</button>
                	</td>
              	</tr>
            })
            
          ) : (
            <tr>
              <td> Data Not Found </td>
            </tr>
          )
        }
        </tbody>
      </table>
      </div>
    </React.Fragment>
  )
}
      


export default TableData;
