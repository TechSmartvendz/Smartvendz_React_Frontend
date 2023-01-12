import React from 'react'

function SingleProductAdd() {
  return (
    <>
    <div className="add-user-container">
      <div>
        <span className="componet-title">Single Product Add</span>
      </div>
      <div className="componet-sub-title">
        <span> Single Product Add </span>
      </div>

      <form className="flex-col">
        <div className="input-lable-v-div">
          <label htmlFor="start">Product Name</label>
          <input type="text" id="start" />
        </div>

        <div className="input-lable-v-div">
          <label htmlFor="end">Description</label>
          <input type="text" id="end" />
        </div>

        <div className="input-lable-v-div">
          <label htmlFor="price">Price</label>
          <input type="text" id="price"/>
        </div>

        <div className="input-lable-v-div">
            <label htmlFor="mid">Machine ID</label>
            <select id="mid">
              <option value="N/A">Select Machine ID</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
        </div>

        <div className="input-lable-v-div">
          <label htmlFor="mid">Slot</label>
          <input type="text" id="mid"/>
        </div>

        <div className="input-lable-v-div">
          <button className="submit-btn">Save</button>
        </div>
      </form>
      </div>
    </>
  )
}

export default SingleProductAdd
