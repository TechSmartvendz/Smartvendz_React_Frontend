import React from 'react'

function Addnewcompany() {
  return (
   <React.Fragment>
   
   
  
   <div className='company_content'>
   
   <form className='form-content'>
   
   <div className='left-div'>
   <div className='field-content'>
   <label htmlFor='cname'className='adminlabel'>Company Name:</label>
   <input type="text" name="cname" className='company_input' required/>
   </div>

   <div className='field-content'>
   <label htmlFor='cname' className='adminlabel'>Company ID:</label>
   <input type="text" name="cid" className='company_input' required/>
   </div>

   <div className='field-content'>
   <label htmlFor='Caddress' className='adminlabel'>Company Address:</label>
   <input type="text" name="cadd" className='company_input' required/>
   </div>

   <div className='field-content'>
   <label htmlFor='Clocation' className='adminlabel'>Company Location:</label>
   <input type="text" name="clocation" className='company_input' required/>
   </div>

   <div className='field-content'>
   <label htmlFor='Cbno' className='adminlabel'>Company Building No:</label>
   <input type="text" name="clocation" className='company_input' required/>
   </div>

   <div className='field-content'>
   <label htmlFor='Cperson' className='adminlabel'>Company Person:</label>
   <select className='company_input' required>
  <option>Manoj</option> 
  <option>Dinesh</option> 
  <option>Shubham</option> 
  <option>Kuldeep</option> 
   </select>
   </div>
  
   </div>

   <div className='right-div'>
  
   <div className='field-content'>
<label htmlFor='cperson' className='adminlabel'>Contact Person:</label>
<input type="email" name="pemail" className='company_input' required/>
</div>
 
   
   <div className='field-content'>
<label htmlFor='cperson' className='adminlabel'>Contact Person:</label>
<input type="text" name="pnum" className='company_input' required/>
   </div>

   <div className='field-content'>
   <label htmlFor='country' className='adminlabel'>Country:</label>
   <select className='company_input' required>
   <option>India</option>
   <option>Srilanka</option>
   <option>Australia</option>
   <option>England</option>
   
   </select>
   </div>

   <div className='field-content'>
   <label htmlFor='state' className='adminlabel'>State:</label>
   
   <select className='company_input' required>
   <option>Karnatak</option>
   <option>Maharastra</option>
   <option>Andra</option>
   <option>Tamilnadu</option>
   
   </select>
   </div>

   <div  className='field-content'>
  
   <label htmlFor='pcity' className='adminlabel'>City:</label>
   <select className='company_input' required>
   <option>Bengaluru</option>
   <option>mumbai</option>
   <option>Hydrabad</option>
   <option>Channai</option>
   
   </select>
   </div>

   <div  className='field-content'>
   <label htmlFor='admin' className='adminlabel'>Admin:</label>
   <select className='company_input' required>
   <option>Employee</option>
   <option>Manager</option>
   <option>Refiller</option>
   <option>Account</option>
   
   </select>
   </div>

   <div className='btn-div'>
   <input type="submit" name="submit" className='submit-btn' />
   </div>

   </div>
   </form>
   
   
   
   </div>
   
   </React.Fragment>
  )
}

export default Addnewcompany