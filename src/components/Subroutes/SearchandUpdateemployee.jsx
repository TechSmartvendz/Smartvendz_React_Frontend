import React from 'react'
import './searchandemployee.css'

function SearchandUpdateemployee() {
  return (
    <div className='maindiv'>
            <select id = "dropdown">
    <option value="N/A"> Company</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
</select>
      {/* Search by
      <select id = "dropdown">
    <option value="N/A">Employee ID</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option> */}
{/* </select> */}
<form>

<div className='a'>
<div>
<label htmlFor='eid'> Employee ID: </label>
    <input type="text" id="eid"  />
</div>

<div>
  <label htmlFor='ename'> Employee Name: </label>
  <input type="text" id="ename"  />
</div>

<div>
  <label htmlFor='ecard'> Employee Card:  </label>
  <input type="text" id="ecard" />
</div>

<div>
  <label htmlFor='name'>Employee:</label>
  <input type="text" id="name" />
</div>

</div>

  </form>
{/* 
      <input type="search" placeholder="Search..." className='search'/>
      <button className="searchbtn">Search</button> */}
    </div>
  )
}

export default SearchandUpdateemployee
