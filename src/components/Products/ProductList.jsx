import React,{useState} from "react";

function ProductList() {
  const [data, setData] = useState({
    company:"",
    machine:""    
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
          <span className="componet-title">Product</span>
        </div>
        <div className="componet-sub2-title">
          <span> Product List </span>
        </div>
        <form className="flex-row" onSubmit={handleSubmit}>
          <div className="input-lable-v-div">
            <label htmlFor="company">Select company:</label>

                <select
                value={data.company}
                onChange={handleChange}
                name="company"
                id="company"
                >
                  <option value="">--Select company--</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
          </div>

          <div className="input-lable-v-div">
            <label htmlFor="machine">Select machine:</label>

                <select
                value={data.machine}
                onChange={handleChange}
                name="machine"
                id="machine"
                >
                  <option value="">--Select machine--</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
          </div>

           <div className="input-lable-v-div"> 
             <label htmlFor="abc">Product:</label>
            <select
            value={data.product}
            onChange={handleChange}
            name="product"
            id="product"
            >
              <option value="">--Select product --</option>
              <option value="1">A</option>
              <option value="2">B</option>
              <option value="3">C</option>
              <option value="4">D</option>
            </select> 
          </div>

          <div className="upload-download-btn">
            <button>Search</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ProductList;
