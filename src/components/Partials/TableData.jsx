import React, { useState, useEffect } from "react";
import { getReq, delReq, putReq } from "../middleware/AxiosApisCall";
import { SuccessAlert, ErrorAlert } from "../middleware/AlertMsg";
import { AiFillDelete } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import Loading from "../Loading";
function TableData(props) {
  const [tableData, setTableData] = useState([]);
  const [path, setPath] = useState(props.path);
  const [getTax, setGetTax] = useState(props.getTax);
  const [load, setLoad] = useState(false);
  const [totalSupplier, setTotalSupplier] = useState(props.totalSupplier);
  const [deletePath, setDeletePath] = useState(props.deletePath);
  const [par, setpar] = useState(props.par);
  const [tableRefresh, setTableRefresh] = useState(0);
  const [searchQuery, setSearchQuery] = useState();
  // console.log("this is par:", par);

  // This function is used to get data this function is reusable it using where ever it required4

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };
  // console.log('Inputs:',searchQuery);
  const loadTableDate = async () => {
    const response = await getReq(path);
    console.log(response);
    setLoad(true);
    if (response.data.length) {
      // console.log("TableData:", response.data);
      setTableData(response.data);
    } else {
      // console.log(response.data);
      setTableData([]);
    }
  };

  //  const filteredData=tableData.filter((details)=>{
  //   return details.toLowerCase().includes(searchQuery.toLowerCase())
  //  })

  const editClick = (item) => {
    props.editClick(item);
  };

  useEffect(() => {
    loadTableDate();
  }, []);

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
    }
  };
  console.log('tableData:',tableData);
  const columnHeadings = tableData?.length > 0 ? Object.keys(tableData[0]) : [];
  // console.log("columnHeadings:", columnHeadings);
  return (
    <React.Fragment>
      <div className="componet-sub2-title">
        <div className="justi-spacebt">
          <span>
            Total {path}: {tableData != null ? tableData.length : 0}
          </span>
          <div className="search-div">
            <label>Search :</label>
            <input className="search-field" onChange={handleSearch} />
          </div>
        </div>
      </div>

      {load ? (
        <div className="table_container-div">
          <table>
            <tbody>
              <tr>
                {columnHeadings.map((heading, index) =>
                  heading == "_id" ? (
                    <th key={index}>Serial Number</th>
                  ) : (
                    <th key={index}>
                      <span style={{ textTransform: "capitalize" }}>
                        {heading}
                      </span>
                    </th>
                  )
                )}
                {columnHeadings != null && <th>Actions</th>}
              </tr>

              {tableData.length > 0 ? (
                tableData.map((item, index) => 
                  // console.log("🚀 ~ file: TableData.jsx:111 ~ TableData ~ item", item)
                   
                    <tr key={item._id}>
                      {columnHeadings.map((heading, i) => {
                      
                      return   (heading == "_id" ? (
                          <td key={i}>{index + 1}</td>
                        ) : (
                          <td key={i}>{item[heading]}</td>
                        )
                )})}

                      {par != item._id ? (
                        <td>
                          <MdModeEditOutline
                            className="Edit-icon"
                            onClick={() => editClick(item)}
                          />
                          <AiFillDelete
                            className="Delete-icon"
                            value={item._id}
                            onClick={() => deleteState(item._id)}
                          />
                        </td>
                      ) : (
                        <td></td>
                      )}
                    </tr>
                )
              ) : (
                <tr>
                  <td> Data Not Found </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      ) : (
        <Loading />
      )}
    </React.Fragment>
  );
}

export default TableData;
