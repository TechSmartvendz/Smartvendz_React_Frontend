import React, { useState,useEffect } from 'react'
import { getReq} from '../middleware/AxiosApisCall';
function DataList(props) {
const [dataList,setDataList]=useState(null);
const [path,setPath]=useState(props.path); 
const [name,setName]=useState(props.name); 
const loadList=async ()=>{
    const response = await getReq(path)

    setDataList(response.data);
    console.log(response.data)
  }
  useEffect(() => {
    loadList();
  }, []);

// useEffect(() => {
//     console.log("🚀 ~ file: DataList.jsx:19 ~ DataList ~ dataList", dataList)
// }, [dataList]);

return (
<React.Fragment>
<label htmlFor={name}>{props.heading}:</label>
<input list={name} name={name} onChange={props.handleChange} value={props.value}  autocomplete={"off"} required/>
<datalist id={name} >
{ dataList !=null ?
(dataList.map((e,i)=>{
  return <option key={i} value={e[name]}>{e[name]}</option>
})
):
<option>Country not found</option>
}
</datalist>

    
    </React.Fragment>
  )
}

export default DataList