import React,{useState} from 'react'
import axios from 'axios'
import { useCookies } from 'react-cookie';
import fileDownload from 'js-file-download';


// axios.defaults.headers.common['X-Auth-Token'] =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzgwNTBjYzg3ZDFiZjQwMmU3N2M1YzAiLCJpYXQiOjE2NjkzNTM2NzZ9.VNIOp891lpJXIzp0SZm8U503yS4W5VQmtt1fn1xrQ8g';

// var cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)username\s*\=\s*([^;]*).*$)|^.*$/, "$1");
// console.log(cookieValue)

var urlz = "http://localhost:3000/productcsv/SVZBLR0099";
var token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzgwNTBjYzg3ZDFiZjQwMmU3N2M1YzAiLCJpYXQiOjE2NjkzNTM2NzZ9.VNIOp891lpJXIzp0SZm8U503yS4W5VQmtt1fn1xrQ8g";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 // function download(response) {
                

function Products() {
  
function Download() {
  
  axios({
    url: urlz, //your url
    method: "GET",
  
    headers: {
       "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    console.log(res.data);
    fileDownload(res.data, "csvreport.csv");
  })
  .error( err => console.log(err))
    

}

  //const[data, setData] = useState()
  // const [message, setMessage] = useState("");
  // const [cookies] = useCookies(['user']);
  // const token = cookies.get("user");
  // console.log(token);



  // useEffect automatically executes once the page is fully loaded
  // useEffect(() => {
  //   // set configurations for the API call here
  //   const configuration = {
  //     method: "get",
  //     url: "localhost:3000/productcsv/SVZBLR0099",
  //     headers: {
  //       Authorization: `Bearer ${cookievalue}`,
  //     },
  //   };

  //   // make the API call
  //   axios(configuration)
  //     .then((result) => {
  //       // assign the message in our result to the message we initialized above
  //       setMessage(result.data.message);
  //     })
  //     .catch((error) => {
  //       error = new Error();
  //     });
  // }, []);
  // const products = async () => {
  //  await axios.get("localhost:3000/productcsv/SVZBLR0099")
  //   .then( res => res.json()  )
  //   .catch( err => console.log(err))

  // }

  return (
    <div>
      <p>Products</p>
      <button onClick={Download} style={{cursor: 'pointer'}}>Download as CSV</button>

    </div>
  )
}

export default Products
