import React from 'react'
import './searchandemployee.css'

function SearchandUpdateemployee() {
  return (
    <div className='maindiv'>
      Search by
      <select id = "dropdown">
    <option value="N/A">Select company</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
</select>
      <input type="search" placeholder="Search..." className='search'/>
      <button className="searchbtn">Search</button>
    </div>
  )
}

export default SearchandUpdateemployee
