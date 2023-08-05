import React, { useState, useEffect } from "react";
import { getReq, delReq, putReq } from "../middleware/AxiosApisCall";
import { SuccessAlert, ErrorAlert } from "../middleware/AlertMsg";
import {AiFillDelete}  from 'react-icons/ai'
import {MdModeEditOutline} from 'react-icons/md'
function TableData(props) {

  const [tableData, setTableData] = useState();
  const [path, setPath] = useState(props.path);
  const [getTax,setGetTax]=useState(props.getTax);
  
  const [totalSupplier,setTotalSupplier]=useState(props.totalSupplier)
  const [deletePath, setDeletePath] = useState(props.deletePath);
  const [par, setpar] = useState(props.par);
  const [tableRefresh,setTableRefresh]=useState(0)
  const [searchQuery,setSearchQuery]=useState()
  // console.log("this is par:", par);
 
  // This function is used to get data this function is reusable it using where ever it required4

  const handleSearch=(e)=>{
    setSearchQuery(e.target.value);
  }
  // console.log('Inputs:',searchQuery);
  const loadTableDate = async () => {
    
    const response = await getReq(path);
    if (response.data.length) {
      // console.log("TableData:", response.data);
      setTableData(response.data);
    } else {
      // console.log(response.data);
      setTableData(null);
    }
  };
//  const filteredData=tableData.filter((details)=>{
//   return details.toLowerCase().includes(searchQuery.toLowerCase())
//  })
  const editClick = (item) => {
    props.editClick(item);
  };

  useEffect(() => {
    loadTableDate()
   
    },[]);
  
   
    
  // This function is used to delete 'Warehouse' when its path is true also its used to delete user from the table

  const deleteState = async (id) => {
    // console.log("🚀 ~ file: TableData.jsx:19 ~ deleteState ~ event", id);

    if (deletePath) {
      const response = await putReq(deletePath, "", id);

      // console.log("DeleteData:", response.data);
      if (response.success) {
        loadTableDate();
        SuccessAlert({
          title: "Data Deleted",
          message: `${path} : Delete Succesfully `,
        });
      } else {
        ErrorAlert({
          title: `${path} Delete: Error`,
          message: response.msg,
        });
      }
    } else {
      //  if(!path=='gst'){

       
      const response = await delReq(path, id);
      // console.log("DeleteData:", response.data);
      if (response.success) {
        loadTableDate();
        SuccessAlert({
          title: "Data Deleted",
          message: `${path} : Delete Succesfully `,
        });
      } else {
        ErrorAlert({
          title: `${path} Delete: Error`,
          message: response.msg,
        });
      }
   
  };
  
  }
  return (
    <React.Fragment>
      <div className="componet-sub2-title">

      <div className="justi-spacebt">
        <span>
          Total {path}: {tableData != null ? tableData.length : 0}
        </span>
        <div>
          <label >Search :</label>
            <input className="search-field" onChange={handleSearch}/>
            </div>
      </div>
      </div>
      <div className="table_container-div">
        <table>
          <tbody>
            <tr>
              {tableData != null ? (
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
              )}
              {tableData != null && <th>Actions</th>}
            </tr>

            {tableData != null ? (
              tableData.map((item, index) => {
                // console.log("🚀 ~ file: TableData.jsx:111 ~ TableData ~ item", item)
                return (
                  <tr key={item._id}>
                    {Object.keys(item)

                      .filter((i) => i !== "_id")
                      .map((input, index) => {
                        return <td key={index}>{item[input]}</td>;
                      })}

                    {par != item._id ? (
                      <td>
                       <MdModeEditOutline className="Edit-icon"  onClick={() => editClick(item)}/>
                       <AiFillDelete className="Delete-icon"  
                          value={item._id}
                          onClick={() => deleteState(item._id)}/>
                       
                      </td>
                    ) : (
                      <td></td>
                    )}
                  </tr>
                );
              })
            ) : (
              <tr>
                <td> Data Not Found </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}

export default TableData;
