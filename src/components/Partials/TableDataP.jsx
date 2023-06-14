import React,{useState,useEffect} from 'react'
import { getReq } from '../middleware/AxiosApisCall';

function TableDataP(props) {

const [tabledata,setTabledata]=useState();
const [path,setPath]=useState(props.path);
const loadTableData=async()=>{

    const response=await getReq(path);
    if(response.data.length){
        console.log(response.data.length);
        console.log(response.data)
  
        setTabledata(response.data);
       
    }else{
        setTabledata(null);
    }
}
useEffect(() => {
loadTableData();
}, [])

  return (

   <React.Fragment>
  
    <div className="componet-sub2-title">
    <span>Total {path}:{tabledata!=null?tabledata.length :0 }</span>
    </div>

     <div className='table_container-div'>   
      <table>
      <tbody>
     
     <tr>
       {
        tabledata !=null ?(
            Object.keys(tabledata[0]).map(
            (key)=>
          
            key !=("_id" || null) && (
            <th key={key}>
        <span style={{textTransform:"capitalize"}}>{key}</span>
        
            </th>
        )
            
            )
        ):(
            <td></td>
        )
       }
       {tabledata != null && <th>Actions</th>}
      

     </tr>
     {

       tabledata != null ?(
        tabledata.map((item,index)=>{
            return(
                <tr key={item._id}>
                  {
                    Object.keys(item)
                    .filter((i)=> i !=="_id")
                    .map((input,index)=>{
                        return <td>{item[input]}</td>
                    })}

                   <td>
                   <button >Edit</button>
                   <button>Delete</button>
                   </td>
                </tr>
            )
        })
       ):(<tr><td>Data Not Found</td></tr>)
       
        }
 

      </tbody>
        
      </table>



     </div>
   </React.Fragment>
  )
}

export default TableDataP