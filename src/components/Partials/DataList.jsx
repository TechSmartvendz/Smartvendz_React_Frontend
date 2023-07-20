import React, { useState, useEffect } from "react";
import { getReq } from "../middleware/AxiosApisCall";

function DataList(props) {
  const [dataList, setDataList] = useState(null);
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
      <label htmlFor={name}>{props.heading}:</label>
      <input
        list={name}
        name={name}
        onChange={props.handleChange}
        value={props.value}
        placeholder="Search..."
        autoComplete={"off"}
      />

      <datalist id={name}>
        {dataList != null ? (
          dataList.map((e, i) => {
            return (
              <option key={i} value={e.id}>
                {e[option]}
              </option>
            );
          })
        ) : (
          <option>Country not found</option>
        )}
      </datalist>
    </React.Fragment>
  );
}

export default DataList;
