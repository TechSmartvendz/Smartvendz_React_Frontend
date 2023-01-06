import React from 'react'

function SearchandUpdateemployee() {
  return (
    <div>
      <p>Search and update employee</p>
      Search by
      <select id = "dropdown">
    <option value="N/A">Select company</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
</select>
      <input type="search" placeholder="Search..." />
      <button>Search</button>
    </div>
  )
}

export default SearchandUpdateemployee
