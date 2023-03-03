import React,{useState} from 'react'
import { template } from '../Partials/FormFields'
import { useNavigate } from 'react-router-dom'


function AddNewUserP() {

const navigate=useNavigate();
const [inputs,setInputs]=useState({});

function handleChange(e)
{
const name=e.target.name;
const value=e.target.value;
setInputs((values)=>({
...values,[name]:value
}))

}

const handleSubmit=(e)=>
{
    e.preventDefault();
    console.log(inputs);

    
}
  return (
  
  <React.Fragment>
   <div className='add-user-conatiner'>

<div className='headingdiv'>

 <span className='component-title'>ADD NEW USER P</span>  
<div>
<button onClick={()=>
    navigate(-1)
}>Back</button>

</div>
</div>

<form className='flex-row form-2col-ver' onSubmit={handleSubmit}>
<div className='componet-sub-title'>

    <span>UserP Details</span>
</div>

<div className='flex-col'>

{/* first side form start from here */}
<div className='flex-row'>
{
    template.addnewuser.map((adduserp)=>{
        return (
            <div className='input-lable-h-div' key={adduserp.name}>
            <label htmlFor={adduserp.name}>{adduserp.title}</label>
            <input 
            name={adduserp.name}
            type={adduserp.type}
            value={inputs[adduserp.name] || ""}
             onChange={handleChange}
            />
            </div>
            
        )
    })
}
</div>
<div className='flex-row'>
{
   template.addnewuser1.map((adduser1)=>{
    return(
        <div className='input-lable-h-div' key={adduser1.name}>
     <label htmlFor={adduser1.name}>{adduser1.title}</label>
     <input name={adduser1.name}
      type={adduser1.type}
      value={inputs[adduser1.name] || " "}
      onChange={handleChange}

     />
        </div>
    )
   }) 
}

</div>

</div>

<div className='componet-sub-title'>

    <span>Login Info</span>
</div>

<div>
<div className='flex-col'>

{
    template.loginInfo.map((log)=>{
        return(
            <div key={log.name} className='input-lable-v-div'>

        <label htmlFor={log.name}>{log.title}</label>
  <input
   name={log.name}
   type={log.type}
   value={inputs[log.name] || " "}
    onChange={handleChange}
  />
            </div>
        )
    })
}
<div className='input-lable-v-div'>
<button type='submit' className='submit-btn'>Save</button>
</div>

</div>



</div>

</form>


   </div>


   </React.Fragment>

  )
}

export default AddNewUserP