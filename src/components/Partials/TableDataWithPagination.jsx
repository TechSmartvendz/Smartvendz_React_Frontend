import React, { useState, useEffect } from "react";
import { getReq, delReq, postReq } from "../middleware/AxiosApisCall";
import { SuccessAlert, ErrorAlert } from "../middleware/AlertMsg";
import { AiFillDelete } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
// import PropTypes from 'prop-types';
import Loading from "../Loading";
function TableDataWithPagination(props) {
  const [tableData, setTableData] = useState([]);
  const { machineID } = props;
  // const {loadDate}=props;
  // console.log(typeof machineID)

  // TableDataWithPagination.propTypes = {
  //   machineID: PropTypes.number.isRequired, // Adjust the data type accordingly if not a number
  // };
  const [path, setPath] = useState(props.path);
  const [machinepagination, setMachinepagination] = useState(
    props.machinepagination
  );
  const [par, setpar] = useState(props.par);
  const [ComponentName, setComponentName] = useState(props.componentName);
  const [searchData, setSearchData] = useState(props.searchData);
  const [load,setLoad]=useState(false)
  const [page, setPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(10);
  const [metadata, setMetaData] = useState();
  const [maxpagelimit, setMaxPageLimit] = useState();
  //  console.log('metaData:',metadata);
  useEffect(() => {}, [par]);
  // air05299
  const loadTableDate = async () => {
    if (machineID) {
      const response = await getReq(
        `${path}/Table/${machineID}/${page}/${dataPerPage}`
      );
      // console.log("machineid", machineid);
      // console.log("response", response);
        setLoad(true)
      if (response.data.metadata) {
        setTableData(response.data.data);
        setMetaData(response.data.metadata);
        // loadDate();
      } else {
        // console.log(response.data);
        setTableData([]);
        setMetaData(null);
      }
    } else {
      const response = await getReq(`${path}/Table/${page}/${dataPerPage}`);
      // console.log("machineid", machineid);
      // console.log("response", response);
         setLoad(true)
      if (response.data.metadata) {
        setTableData(response.data.data);
        setMetaData(response.data.metadata);
        // loadDate();
      } else {
        // console.log(response.data);
        setTableData([]);
        setMetaData(null);
      }
    }
  };

  // console.log("tableData:", tableData);
  const loadSearchData = async (event) => {
    //TODO:Submit Search Form
    if (props.reject) {
      // console.log(searchData.length);
      setTableData(searchData);
      let metadat2 = {
        count: searchData.length,
        start: 1,
        end: searchData.length,
        page: 1,
      };
      setMetaData(metadat2);
    } else {
      // console.log("RUN Search Load")
      const response = await postReq(
        `${path}/Search/${page}/${dataPerPage}`,
        searchData
      );
      if (response.data) {
        setTableData(response.data.data);
        setMetaData(response.data.metadata);
      } else {
        props.clear();
      }
    }
    // console.log("🚀 ~ file: TableDataWithPagination.jsx:54 ~ loadSearchData ~ searchData:", searchData)
  };
  const deleteState = async (event) => {
    const response = await delReq(path, event);
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
  const editClick = (item) => {
    props.editClick(item);
  };

  //TODO:Pagination Functions
  const previouspage = (item) => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const nextpage = () => {
    if (page < maxpagelimit) {
      setPage(page + 1);
    }
  };
  const lastpage = () => {
    console.log(maxpagelimit);
    setPage(maxpagelimit);
  };
  const setdataperpage = (event) => {
    if (event.target.value <= metadata.count && event.target.value > 0) {
      setDataPerPage(event.target.value);
    }
  };

  useEffect(() => {
    if (searchData) {
    } else {
      loadTableDate();
    }
  }, [machineID]);
  useEffect(() => {
    // console.log(props.searchData);
    if (searchData) {
      // console.log(
      //   "🚀 ~ file: TableDataWithPagination.jsx:98 ~ useEffect ~ searchData:",
      //   searchData
      // );
      setSearchData(props.searchData);
    } else setSearchData();
  }, [props.searchData]);

  //TODO:PAnination useEffects
  useEffect(() => {
    if (metadata) {
      if (metadata.count % dataPerPage) {
        setMaxPageLimit(parseInt(metadata.count / dataPerPage) + 1);
      } else {
        setMaxPageLimit(metadata.count / dataPerPage);
      }
      if (dataPerPage > metadata.count) {
        setDataPerPage(metadata.count);
      }
    }
  }, [metadata]);
  useEffect(() => {
    if (searchData) {
      loadSearchData();
    } else {
      loadTableDate();
    }
  }, [page, dataPerPage, searchData]);

  return (
    <React.Fragment>
      <div className="componet-sub2-title">
        <div className="justi-spacebt">
          <span>
            Total {props.name}: {metadata != null ? metadata.count : 0}
          </span>
          <div>
            {/* <label >Search</label> */}
            <input className="search-field" placeholder="Search..." />
          </div>
          <div className="table-page-nav-btn">
            <div className="table-data-per-page">
              <input
                type="number"
                value={dataPerPage || ""}
                onChange={() => {
                  setdataperpage(event);
                }}
              />
            </div>
            <button
              onClick={() => {
                setPage(1);
              }}
            >
              &lt;&lt;
            </button>
            <button onClick={previouspage}>&lt;</button>
            <span>
              {metadata &&
                `${metadata.start} to ${
                  metadata.start + tableData.length - 1
                } of ${metadata.count}`}
            </span>
            <button onClick={nextpage}>&gt;</button>
            <button onClick={lastpage}>&gt;&gt;</button>
          </div>
        </div>
      </div>
     {load ? (<div className="table_container-div">
        <table>
          <tbody>
            <tr>
              {tableData.length>0 ? (
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
              {tableData.length>0  && !("error" in tableData[0]) && (
                <th>Actions</th>
              )}
            </tr>

            {tableData.length>0 ? (
              tableData.map((item, index) => {
                // console.log("🚀 ~ file: tableData.jsx:111 ~ tableData ~ item", item)
                return (
                  <tr key={item._id}>
                    {Object.keys(item)
                      .filter((i) => i !== "_id")
                      .map((input, index) => {
                        return (
                          <td
                            className={input == "error" ? "red-text" : ""}
                            key={index}
                          >
                            {item[input]}
                          </td>
                        );
                      })}

                    {par != item._id ? (
                      <td>
                        <MdModeEditOutline
                          className="Edit-icon"
                          
                          onClick={() => editClick(item)}
                        />
                        <AiFillDelete
                          className="Delete-icon"
                          onClick={() => deleteState(item._id)}
                        />
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
      </div>):(<Loading/>)}
    </React.Fragment>
  );
}

export default TableDataWithPagination;
