import React,{useState} from 'react'
import axios from 'axios'
import fileDownload from 'js-file-download';
import FileUpload from './FileUpload';

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

  return (
    <div>
      <p>Products</p>
      <button onClick={Download} style={{cursor: 'pointer'}}>Download as CSV</button>
      <FileUpload />

    </div>
  )
}

export default Products
