import React, { useState } from 'react'

function CountryList(props) {
    const [table,setTable]=useState(props.table);
   
  return (
    <React.Fragment>
    <label htmlFor='country'>Country:</label>

 <input list='country' />
 <datalist id='country' >
{ table !=null ?
(table.map((clist,i)=>{
  return <option key={i}>{clist.country}</option>
})
):
<div>
<datalist>
<option>Country not found</option>
</datalist>
</div>
}
</datalist>
    
    </React.Fragment>
  )
}

export default CountryList