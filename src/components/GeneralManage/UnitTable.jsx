import React,{useState} from 'react'
import { delReq } from '../middleware/AxiosApisCall';
import { Store } from 'react-notifications-component';
function UnitTable(props) {

const [table,setTable]=useState(props.table);
const [path,setPath]=useState(props.path);


const deleteUnit=async(event)=>{
    const response=await delReq(path,event)
    if(response.status==="success"){
        props.parentFunction();
        Store.addNotification({
            title: "Delete Unit",
            message: "Unit Deleted Succesfully",
            type: "success",
            insert: "top",
            container: "top-right",
            dismiss: {
            duration: 1000,
            }
          });
            }
            else{
              Store.addNotification({
                title: "Delete Unit",
                message: response.error,
                type: "danger",
                insert: "top",
                container: "top-right",
                dismiss: {
                duration: 2000,
                }
              });
            } 
          }
    

  return (
   <React.Fragment>
   <div className="table_container-div">
   <table>
     <tbody>
       <tr>
         <th>Unit</th>
        
         <th>Action</th>
       </tr>

       {table != null ? (
         table.map((items, index) => (
           <tr key={index}>
             <td>{items.unit}</td>
            
             <td>
               <button className="btn_edit" >Edit</button>
               <button className="btn_delete" onClick={() => deleteUnit(items.unit)}>Delete</button>
             </td>
           </tr>
         ))
       ) : (
         <tr>
           <td> Countries Not Found </td>
           <td></td>
         </tr>
       )}
     </tbody>
   </table>
 </div>
 </React.Fragment>
  )
}

export default UnitTable