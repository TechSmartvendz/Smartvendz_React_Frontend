import axios from 'axios';
import React, { useState ,useEffect} from 'react'

// http://localhost:3000/login

const tokens="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWJjMTc4OGNkZWVhNjM4Mzk1Y2NkMmQiLCJpYXQiOjE2Mzk3MTY3NDR9.wCHHhEiKNrD_1nQkaEoOCAS7f4rAxxpW1v9AL2aJfwo"

function Countrymanage() {
 
  useEffect(()=>{
    axios.get("http://localhost:3000/api/Country",{
      headers:{
        "Content-Type":"application/json",
        Authorization:`Bearer ${tokens}`,
      }
    }).then((response)=>{
     
    }).catch((err)=>{
      console.log(err.response)
    })
  },[])


const [country,setCountry]=useState("")

const [countrydata,setCountrydata]=useState({});

useEffect(()=>{
  axios.get("http://localhost:3000/api/Country",{
    headers:{
      "Content-Type":"application/json",
      Authorization:`Bearer ${tokens}`,
    }
  }).then((response)=>{
     console.log(response.data);
  
   
    setCountrydata({data:response.data.data})
  }).catch((err)=>{
    console.log(err)
  })
},[])

useEffect(()=>{console.log(countrydata.data)},[countrydata])


const handleChange=(e)=>{
setCountry(e.target.value);
}

const handleSubmit= async(e)=>{
  e.preventDefault();

  console.log(country)
 await axios.post("http://localhost:3000/api/Country",
  { 
  country:country
  },
  {
  headers: {
    "Content-Type": "application/json",
     Authorization: `Bearer ${tokens}`,
    }
 }
 
 
  ).then((response)=>{
    console.log(response.data)
    alert(response.data.status)
  
    
  }).catch((erro)=>{
    console.log(erro.response)
    alert(response.data.error)
  })
 
}

 


  return (
   <React.Fragment>
   <div className="add-user-container">
   <div>
   <span className="componet-title">Country Manage</span>
 </div>

 <form className="flex-row form-2col-ver" onSubmit={handleSubmit}>
 <div className="componet-sub-title">
   <span>Country Details</span>
 </div>


 <div className='general-manage-div'>
  <label htmlFor="name">Country:</label>
 <input name="name" type="text" value={country} onChange={handleChange} required/>
 <button className="submit-btn">Add New</button>
  </div>
  
 </form>
 
 <div className="componet-sub2-title">
 <span>Total Country:</span>
</div>

<div className="table_container-div">
<table>
    <tbody>
    <tr>
    <th>Country</th>
    <th>Action</th>
    </tr>

    {

      countrydata.data.map ((cou,l)=>{
      //  console.log(cou)
     return (
        <tr key={l}>
        <td>{cou.country}</td>
       
        <td>
        <button className="btn_edit">Edit</button>
        <button className="btn_delete">Delete</button>
        </td>
      
        </tr>
      )
    })
    }
    </tbody>
    </table>
  </div>
   
 </div>

   
   </React.Fragment>
  )
}

export default Countrymanage
