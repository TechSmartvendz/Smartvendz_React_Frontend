import React,{useState} from 'react'
import { useEffect } from 'react';
import {axiosInstance} from "./axiosInstance";
//var token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWJjMTc4OGNkZWVhNjM4Mzk1Y2NkMmQiLCJpYXQiOjE2Mzk3MTY3NDR9.wCHHhEiKNrD_1nQkaEoOCAS7f4rAxxpW1v9AL2aJfwo"

function Countrymanage() {
    
  const[newdata, setNewData] = React.useState([])
  const [formValue, setformValue] = useState({
    country: '',
  });

const handleChange = (event) => {
  setformValue({
    ...formValue,
    [event.target.name]: event.target.value
  });
}

const handleSubmit = async(e) => {
  e.preventDefault()
 
  try {
    // make axios post request
    const response = await axiosInstance.post( "api/Country",{
      country: formValue.country
    });
  } catch(error) {
    console.log(error)
  }
}

function getTodos() {
  console.log('GET Request');
  // axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
  // .then( res => showOutput(res))
  // .catch( error => console.log(error))
  axiosInstance.get('/api/Country').then(res => setNewData(res.data)).catch(error =>console.log(error))

}

useEffect(getTodos(),[])



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
 <input type="text" required 
 name="country"
 value={formValue.country}
 onChange={handleChange}
 />
 <button className="submit-btn">Add New</button>
  </div>
  
 </form>
 

 <button className="submit-btn" onClick={getTodos}>Click to do get request</button>

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
    data.map((x)=>{
      return(
        <tr key={1}>
        <td>{x.country}</td>
        </tr>
      )
    })
    }  


     {/* {

    data.map((cntr,key)=>{
      return(
        <tr key={key}>
        <td>{cntr[cntr].country}</td>
       
       <td>
        <button className="btn_edit">Edit</button>
        <button className="btn_delete">Delete</button>
        </td> 
      
        </tr>
      )
    })
    }  */}


    </tbody>
    </table>
</div> 

 </div>
   </React.Fragment>
  )

}

export default Countrymanage
