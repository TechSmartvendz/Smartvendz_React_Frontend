import React, { useState } from 'react'

function CityList(props) {
   const [table,setTable]=useState(props.table)
  return (
    <React.Fragment>
    <label htmlFor='state'>City:</label>

    <input list='state' type="text"/>
    <datalist id='state' >
   { table !=null ?
   (table.map((slist,k)=>{
     return <option key={k}>{slist.city}</option>
   })
   ):
   <div>
   <datalist>
   <option>States not found</option>
   </datalist>
   </div>
   }
   </datalist>
    
    
    </React.Fragment>
  )
}

export default CityList