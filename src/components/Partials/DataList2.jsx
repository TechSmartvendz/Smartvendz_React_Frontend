import React,{useContext,useState,createContext} from 'react'

import { JsonDatalist } from './JsonDatalist';

function DataList2() {

    const UserDataContext = createContext()

    const [datalists,setDatalists]=useState(JsonDatalist);

  
  return (
   
   <React.Fragment>
    
<UserDataContext.Provider value={datalists}>
<ul>
{
    datalists.Country.map((info)=>{
  return (
    <div key={info._id} className="add-user-container">
    <li>{info._id}</li>
    <li>{info.country}</li>
    </div>
  )
    })
}
</ul>
</UserDataContext.Provider>

   </React.Fragment>

  )
}

export default DataList2