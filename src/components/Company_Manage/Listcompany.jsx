import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

import TableData from "../Partials/TableData";

function Listcompany(props) {
const navigate=useNavigate();
  const list=[
    {companyname:"Wipro",companyid:"W1235",contactperson:"asp@123",personmobile:"9915648895",admin:"refiller"},
    {companyname:"simlpilearn",companyid:"WS466",contactperson:"vinayak@1113",personmobile:"885648895",admin:"refiller"},
    {companyname:"Snaxsmart",companyid:"snax1235",contactperson:"snax@123",personmobile:"778648895",admin:"manager"},
    {companyname:"snaxsmart",companyid:"de7235",contactperson:"chetan@443",personmobile:"6655548895",admin:"manager"},
    {companyname:"ASdd",companyid:"sd235",contactperson:"snaxp@123",personmobile:"888848895",admin:"account"},
    {companyname:"infosys",companyid:"deef235",contactperson:"supp@123",personmobile:"775548895",admin:"support"},

  ]
  const [path, setPath] = useState(props.path);

  return (
    
    <React.Fragment>
    <div className="add-user-container">
   
    <div className='headingdiv'>

    <span className="componet-title">Company List</span>
    <div>
    <button onClick={()=>{navigate(-1)}}>Back</button>
      </div>
  </div>

  <div className="option-btn">
  <button onClick={()=>{navigate("/companymanage/addnewcompany")}}>Add New Company</button>
   </div>
   <div className="table_container-div">
   <table>
   <tbody>
   <tr>
   <th>Company Name</th>
   <th>Company Id</th>
   <th>Contact Person</th>
   <th>Person Mobile</th>
   <th>Admin</th>
   </tr>
 {

  list.map((data,key)=>{
    return(
   <tr>
   <td>{data.companyname}</td>
   <td>{data.companyid}</td>
   <td>{data.contactperson}</td>
   <td>{data.personmobile}</td>
   <td>{data.admin}</td>
   
   
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

export default Listcompany
