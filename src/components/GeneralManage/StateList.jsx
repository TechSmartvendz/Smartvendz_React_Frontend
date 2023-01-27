import React,{useState} from 'react'

function StateList(props) {

    const [table,setTable]=useState(props.table);

  return (
  <React.Fragment>
  
  <label htmlFor='state'>State:</label>

  <input list='state' type="text"/>
  <datalist id='state' >
 { table !=null ?
 (table.map((slist,k)=>{
   return <option key={k}>{slist.state}</option>
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

export default StateList