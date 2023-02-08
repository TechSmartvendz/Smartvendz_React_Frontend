import React from "react";
// import { useForm } from "react-hook-form";

import { template } from "../Partials/FormFields";



function TransactionReport() {
 
// const [dynamic,setDynamic]=useState(template);

// const {register,handleSubmit}=useForm();


// function handleSubmit(values)
// {
//   console.log(values)
// }


// const renderFields=(fields)=>{
//  return fields.map((field)=>{
//   let {title,type,name}=field;



  return (
    
    <React.Fragment>
      <div className="add-user-container">
        <div>
          <span className="componet-title">Add New User</span>
        </div>
        <div className="componet-sub-title">
          <span>Search Employee</span>
        </div>
         

        <form >
               {
               template.fields.map(field=>{
                return (<div className="input-lable-v-div" key={field.name}>
                <label htmlFor={field.name}>{field.title}</label>
                <input type={field.type} id={field.id} name={field.name}  />
                <datalist list={field.id}>{}</datalist>
              </div>)
               })
               }

          <div className="flex-col">
         
            {/*<div className="input-lable-v-div">
              <label>Start Date-Time</label>
              <input type="date" name="start_date"/>
            </div>


            <div className="input-lable-v-div">
              <label>End Date-Time</label>
              <input type="date" />
            </div>

            <div className="input-lable-v-div">
              <label>Product</label>
              <select>
                <option>All</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>

            <div className="input-lable-v-div">
              <label> Machine ID</label>
              <select>
                <option>SVZLOCK001</option>
                <option>SVZLOCK001</option>
                <option>SVZLOCK001</option>
                <option>SVZLOCK001</option>
              </select>
            </div>

            <div className="input-lable-v-div">
              <label> Company ID</label>
              <select>
                <option>SVZLOCK001</option>
                <option>SVZLOCK001</option>
                <option>SVZLOCK001</option>
                <option>SVZLOCK001</option>
              </select>
            </div>

            <div className="input-lable-v-div">
              <label>Employee RFID Card No.</label>
              <input type="text" />
            </div>

            <div className="input-lable-v-div">
              <button className="submit-btn">Transaction</button>
            </div>
            <div className="input-lable-v-div">
              <button className="submit-btn">CSV Report</button>
        </div>*/}


          </div>
        </form>
      </div>


      <div>
        <div className="componet-sub-title">
          <span>Employees</span>
        </div>
        <div className="table_container-div">
          <table>
            <tbody>
              <tr>
                <th>Card no</th>
                <th>Machine ID</th>
                <th>Locker NO.</th>
                <th>Item </th>
                <th>Employee ID</th>
                <th>Employee Email</th>
                <th>Date-Time</th>
              </tr>

              <tr>
                <td>4143</td>
                <td>SlZV562</td>
                <td>12</td>
                <td>HP black i5 500GB</td>
                <td>14116</td>
                <td>null</td>
                <td>7/11/2024 12:47:05</td>
              </tr>
              <tr>
                <td>4143</td>
                <td>SlZV562</td>
                <td>12</td>
                <td>HP black i5 500GB</td>
                <td>14116</td>
                <td>null</td>
                <td>7/11/2024 12:47:05</td>
              </tr>
              <tr>
                <td>4143</td>
                <td>SlZV562</td>
                <td>12</td>
                <td>HP black i5 500GB</td>
                <td>14116</td>
                <td>null</td>
                <td>7/11/2024 12:47:05</td>
              </tr>
              <tr>
                <td>4143</td>
                <td>SlZV562</td>
                <td>12</td>
                <td>HP black i5 500GB</td>
                <td>14116</td>
                <td>null</td>
                <td>7/11/2024 12:47:05</td>
              </tr>
              <tr>
                <td>4143</td>
                <td>SlZV562</td>
                <td>12</td>
                <td>HP black i5 500GB</td>
                <td>14116</td>
                <td>null</td>
                <td>7/11/2024 12:47:05</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
}

export default TransactionReport;
