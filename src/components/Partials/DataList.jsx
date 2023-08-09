import React, { useState, useEffect } from "react";
import { getReq } from "../middleware/AxiosApisCall";

function DataList(props) {
  const [dataList, setDataList] = useState([]);
  const [path, setPath] = useState(props.path);

  const [name, setName] = useState(props.name);
  const [option, setOption] = useState(props.option);
  // const [Options,setOptions]=useState(props.Options);
  // console.log('Options:',Options)
  // console.log('option:',option)
  const loadList = async () => {
    const response = await getReq(`${path}/Datalist`);
    // console.log(response);
    setDataList(response.data);
  };

  useEffect(() => {
    loadList();
  }, []);

  // console.log("DataListss:", dataList);
  return (
    <React.Fragment>
      <label htmlFor={name}>{props.heading}</label>
      <input
        list={name}
        name={name}
        onChange={props.handleChange}
        value={props.value}
        placeholder={"Select..."}
        autoComplete="off"
        style={{ textAlign: "left" }}
       
      />

      <datalist id={name}>
        {dataList.length > 0 ? (
          dataList.map((e, i) => {
            return (
              <option key={i} value={e.id} >
                {e[option]}
              </option>
            );
          })
        ) : (
          <option>{props.error || "Something Went wrong"}</option>
        )}
      </datalist>
    </React.Fragment>
  );
}

export default DataList;
