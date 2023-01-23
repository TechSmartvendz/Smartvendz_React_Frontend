import React, { useState } from "react";


function DropdownDatalist(props) {
 const [data,setData]=useState(props.data);
 const [id,setId]=useState(props.id);
 console.log(data);
  return (
    <>
     <datalist id={id}>
     {
        data.map((e)=><option key={e.id}>{e.name}</option>)
     }
     </datalist>
 
    </>
  );
}

export default DropdownDatalist