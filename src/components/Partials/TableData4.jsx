import React, { useState ,useEffect} from "react";
import DataList from "./DataList";
import { format } from 'date-fns';
import { getReq } from "../middleware/AxiosApisCall";

function TableData4() {

const [products,setProducts]=useState([]);

  const ProductsData= async ()=>{
try {
       const response=await getReq('getallmachineslots/BLR002')
       setProducts(response.data)
       console.log(products)
}
       catch(error){
        console.log(error)
       }
  }
 
  useEffect(()=>{
    ProductsData()
  },[])
  // const stockdetails = [
  //   {
  //     id:0,
  //     SlotCode: "A1",
  //     MaterialName: "Haldirams Bhujia Sev 40Gm",
  //     ClosingStock: "6",
      
  //     CurrentStock: "",
  //     RefillQuantity: "",
  //     SaleQuantity: "",
  //     Swap: "",
  //     ReplaceItem: "",
  //   },
    
  //   {
  //     id:1,
  //     SlotCode: "A2",
  //     MaterialName: "Haldirams Bhujia Sev 40Gm",
  //     ClosingStock: "6",
  //     CurrentStock: "",
  //     RefillQuantity: "",
  //     SaleQuantity: "",
  //     Swap: "",
  //     ReplaceItem: "",
  //   },

  //   {
  //     id:2,
  //     SlotCode: "A3",
  //     MaterialName: "Haldirams Bhujia Sev 40Gm",
  //     ClosingStock: "6",
  //     CurrentStock: "",
  //     RefillQuantity: "",
  //     SaleQuantity: "",
  //     Swap: "",
  //     ReplaceItem: "",
  //   },

  //   {
  //     id:3,
  //     SlotCode: "A4",
  //     MaterialName: "Haldirams Bhujia Sev 40Gm",
  //     ClosingStock: "6",
  //     CurrentStock: "",
  //     RefillQuantity: "",
  //     SaleQuantity: "",
  //     Swap: "",
  //     ReplaceItem: "",
  //   },
  //   {
  //    id:4,
  //     SlotCode: "A5",
  //     MaterialName: "Haldirams Bhujia Sev 40Gm",
  //     ClosingStock: "6",
  //     CurrentStock: "",
  //     RefillQuantity: "",
  //     SaleQuantity: "",
  //     Swap: "",
  //     ReplaceItem: "",
  //   },
  // ];


  const [date, setDate] = useState('');
  const [refilldata, setRefilldata] = useState(stockdetails);
  const [inputs, setInputs] = useState({});

  const [tableInputs,setTableInputs]=useState([{}]);
  const[slotData, setSlotData] = useState([]);
  const path='machine'

  const loadMachineData=async()=>
  {
   const response=await getReq(path)
   setSlotData(response.data);
  console.log(response.data)
  }
useEffect(()=>{
  loadMachineData()
},[])

  useEffect(() => {
    const today = new Date();
    const formattedDate = format(today, 'dd-MM-yyyy');
    setDate(formattedDate);
  }, []);

  function handleChange(e) {

    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));

  }


  function handleSubmit(e) {
    e.preventDefault();
    console.log(inputs);
  }

  return (
    <React.Fragment>
      <div className="add-user-container">
        <div className="headingdiv">
          <span className="componet-title"> Refill Details</span>
          <div>
            <button onClick={() => navigate(-1)}>Back</button>
          </div>
        </div>
        <div className="option-btn">
          <button onClick={handleSubmit}>Save as draft </button>
          <button
            onClick={() => {
              navigate("/usermanage/addnewuser");
            }}
          >
            Add New{" "}
          </button>
          <button
            onClick={() => {
              navigate("/usermanage/addnewuser");
            }}
          >
            Generate Refill Request{" "}
          </button>
        </div>

        <div className="componet-sub-title">
          <span>Machine Information</span>
        </div>

        <form className="flex-row form-2col-ver">
          <div className="flex-row">
            <div className="input-lable-h-div">
              <label htmlFor="machineid"> Machine Name</label>
              <input
                type="text"
                name="machineid"
                value={inputs.machineid || ""}
                onChange={handleChange}
              />
            </div>
            <div className="input-lable-h-div">
             
              {/* <DataList
                value={inputs.machinename || ""}
                path={"getallmachines"}
                handleChange={handleChange}
                name={"machinename"}
                option={"machinename"}
                Options={"machineid"}
                heading={"Machine Code"}
              /> */}
              
            </div>
            <div className="input-lable-h-div">
              <label htmlFor="machinename">Date</label>
              
              <input
                type="text"
                name="machinename"
                value={date}
                onChange={handleChange}
              />

            </div>

            <div className="input-lable-h-div">
              <label htmlFor="machinename">Warehouse Name</label>
              
              <input
                type="text"
                name="warehousename"
                value={inputs.warehousename || ""}
                onChange={handleChange}
              />

            </div>

            <div>
              <button className="submit-btn"> Get Machine </button>
            </div>
          </div>
        </form>
        <div className="componet-sub-title">
          <span>Machine Stock Details</span>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="table_containernew-div">
           
            
            <table>
              <tbody>
                <tr>
                  {stockdetails != null ? (
                    Object.keys(stockdetails[0]).map(
                      (key) =>
                        key != ("_id" || null) && (
                          <th key={key}>
                            <span style={{ textTransform: "capitalize" }}>
                              {key}
                            </span>
                          </th>
                        )
                    )
                  ) : (
                    <td></td>
                  )}
                </tr>

                {stockdetails != null ? (
                  stockdetails.map((item, index) => {
                    return (
                      <tr key={index}>
                        {Object.keys(item)
                          .filter((i) => i !== "_id")
                          .map((input, index) => {
                            if (input == "SLNO") {
                              return <td key={index}>{item[input]}</td>;
                            } else if (input == "Swap") {
                              return (
                                <td key={index}>
                                  <button className="btn_edit">Swap</button>
                                </td>
                              );
                            } else {
                              return (
                                <td key={input.id} >
                                  <input key={input.id}
                                    style={{

                                      width:
                                        [input]=="id" ||
                                        [input] == "SlotCode" ||
                                        [input] == "ClosingStock" ||
                                        [input] == "CurrentStock" ||
                                        [input] == "RefillQuantity" ||
                                        [input] == "SaleQuantity"
                                          ? "100px"
                                          : "300px",
                                    }}
                                    name={[input]}
                                    value={item[input]}
                                    onChange= {handleChange}

                                  />
                                </td>
                              );
                            }
                          })}
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td> Data Not Found </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default TableData4;
