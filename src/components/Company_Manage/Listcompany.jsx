import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

import TableData from "../Partials/TableData";

function Listcompany(props) {
const navigate=useNavigate();
  // const list=[
  //   {companyname:"Wipro",companyid:"W1235",contactperson:"asp@123",personmobile:"9915648895",admin:"refiller"},
  //   {companyname:"simlpilearn",companyid:"WS466",contactperson:"vinayak@1113",personmobile:"885648895",admin:"refiller"},
  //   {companyname:"Snaxsmart",companyid:"snax1235",contactperson:"snax@123",personmobile:"778648895",admin:"manager"},
  //   {companyname:"snaxsmart",companyid:"de7235",contactperson:"chetan@443",personmobile:"6655548895",admin:"manager"},
  //   {companyname:"ASdd",companyid:"sd235",contactperson:"snaxp@123",personmobile:"888848895",admin:"account"},
  //   {companyname:"infosys",companyid:"deef235",contactperson:"supp@123",personmobile:"775548895",admin:"support"},

  // ]
  const [path, setPath] = useState(props.path);

  return (
    
    <React.Fragment>
    <div className="add-user-container">
   
    <div>
    <span className="componet-title">Company List</span>
  </div>

  <div className="option-btn">
  <button onClick={()=>{navigate("/companymanage/addnewcompany")}}>Add New Company</button>
   </div>

  </div>
  
    </React.Fragment>
  )
}

export default Listcompany
