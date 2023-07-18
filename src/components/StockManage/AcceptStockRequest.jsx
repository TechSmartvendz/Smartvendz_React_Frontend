import React from 'react'

function AcceptStockRequest() {

  return (
    
    <React.Fragment>
      <div className="add-user-container">
        <div className="headingdiv">
          <span className="componet-title">City Manage</span>
          <div>
          <button onClick={(()=>navigate(-1))}>Back</button>
          </div>
        </div>

        <form className="flex-row form-2col-ver" onSubmit={handleSubmit}>
          <div className="componet-sub-title">
          <span>{par?(<span>Edit </span>):(<span>Add </span>)}City </span>

    
          </div>

          <div className="general-manage-div">
            <label htmlFor="city">From WareHouse</label>
            <input
              name="fromwarehouse"
              type="text"
              value={inputs.fromwarehouse || ""}
            //   onChange={handleChange}
            //   required
            />
             <label htmlFor="city">To Warehouse:</label>
            <input
              name="towarehouse"
              type="text"
              value={inputs.towarehouse || ""}
              onChange={handleChange}
              required
            />
            <label htmlFor="city">Product:</label>
            <input
              name="Product"
              type="text"
              value={inputs.city || ""}
              onChange={handleChange}
              required
            />
           
           <label htmlFor="city">City:</label>
            <input
              name="city"
              type="text"
              value={inputs.city || ""}
              onChange={handleChange}
              required
            />
            <input
              name="city"
              type="text"
              value={inputs.city || ""}
              onChange={handleChange}
              required
            />
            <button className="submit-btn">Accept</button>
          </div>
        </form>

        
      </div>
    </React.Fragment>
  )
}

export default AcceptStockRequest
