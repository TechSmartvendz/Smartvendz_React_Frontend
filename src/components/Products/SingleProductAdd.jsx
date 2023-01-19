import React,{useState} from 'react'

function SingleProductAdd() {
  const [data, setData] = useState({
    product: "",
    description: "",
    price:"",
    slotno:""
  
  });
  function handleChange(event) {
    const{name,value} = event.target
   setData((prevState) => {
     return {
       ...prevState,
       [name]: value
     };
   });
 }
  function handleSubmit(event) {
    event.preventDefault()
    console.log(data)
  }
  return (
    <>
    <div className="add-user-container">
      <div>
        <span className="componet-title">Single Product Add</span>
      </div>
      <div className="componet-sub-title">
        <span> Single Product Add </span>
      </div>

      <form className="flex-col" onSubmit={handleSubmit}>
        <div className="input-lable-v-div">
          <label htmlFor="start">Product Name</label>
          <input 
            type="text" 
            id="start" 
            placeholder="Enter product name"
            onChange={handleChange} 
            value={data.product}
            name="product"
            required
          />
        </div>

        <div className="input-lable-v-div">
          <label htmlFor="end">Description</label>
          <input 
            type="text" 
            id="end" 
            placeholder="Enter description "
            onChange={handleChange} 
            value={data.description}
            name="description"
            required
          />
        </div>

        <div className="input-lable-v-div">
          <label htmlFor="price">Price</label>
          <input 
            type="number" 
            id="price"
            placeholder="Enter price"
            onChange={handleChange} 
            value={data.price}
            name="price"
            required
          />
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
          <input 
            type="number" 
            id="mid"
            placeholder="Enter Slot number"
            onChange={handleChange} 
            value={data.slotno}
            name="slotno"
            required
          />
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
