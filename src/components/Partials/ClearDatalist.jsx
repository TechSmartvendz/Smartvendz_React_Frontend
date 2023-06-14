// import React,{useState} from "react";
// import { getReq} from '../middleware/AxiosApisCall';
// // import { useQueries } from "react-query";



// function CleanDatalist(props)
// {

// const [dataList,setDataList]=useState([{}]);
// const [path,setPath]=useState(props.path); 
// const [name,setName]=useState(props.name); 
// const [option,setOption]=useState(props.option); 

// const loadLists=async()=>{

//   // const{data}=await getReq(`${path}/Datalist`)
//    console.log('this is data:',data)
//    setDataList(response.data);
//   return data;

//  }

// // const {data,isError,isLoading,loading,error}=useQueries('gets',loadLists)
// console.log('this is query data:',data.data);
// setDataList(data);


// return (

//   <>
//     <label htmlFor={name}>{props.heading}:</label>
// <input list={name} name={name} onChange={props.handleChange} value={props.value}  autoComplete={"off"} required/>

// <datalist id={name} >
// { dataList !=null ?
// (dataList.map((e,i)=>{
  
//   return <option key={i} value={e.id}>{e[option]}</option>
// })
// ):

// <option>Country not found</option>

// }
// <h2>{isError ? error.message :''}</h2>

// </datalist>

//   </>

// )

// }

// export default CleanDatalist;

