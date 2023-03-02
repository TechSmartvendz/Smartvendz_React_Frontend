import React, { useState,useEffect } from 'react'
import { getReq,postReq} from '../middleware/AxiosApisCall';
import { csvGetReq,importCSV } from "../middleware/AxiosApisCallExport";
import { SuccessAlert, ErrorAlert } from "../middleware/AlertMsg"; //1
import Progress from "../Partials/Progress";
import fileDownload from 'js-file-download';

function BulkUpload(props) {

const [dataList,setDataList]=useState(null);
const [path,setPath]=useState(props.path); 
const [ComponentName,setComponentName]=useState(props.ComponentName); 
const [option,setOption]=useState(props.option); 
const [file, setFile] = useState("");
const [filename, setFilename] = useState("Choose File");
const [uploadPercentage, setUploadPercentage] = useState(0);
const [uploadedFile, setUploadedFile] = useState({});

const onChange = (e) => {
  setFile(e.target.files[0]);
  setFilename(e.target.files[0].name);
};


const sampleCSVFile = async (event) => { //TODO:Submit Search Form
  const response = await csvGetReq(`${path}/SampleCSV`);
    if (response) {
    console.log("🚀 ~ file: SingleProductAdd.jsx:151 ~ sampleCSVFile ~ response:", response)
    fileDownload(response, "csvreport.csv");
      SuccessAlert({
        title: "Sample Upload File",
        message: "Sample Upload file Downloaded successfully",
      });
    } else {
      ErrorAlert({ title: "Update Slot", message: response.msg });
    }
};



const bulkUpload = async (event) => { //TODO:Submit Search Form
  event.preventDefault();
  const formData = new FormData();
  console.log(formData);
  formData.append("file", file);
    const response = await importCSV(`${path}`, formData);
    if (response.success) {
      if (response.data.dataupload=="success") {
        SuccessAlert({
          title: `Import ${ComponentName} File`,
          message: `Import  ${ComponentName} file Downloaded successfully`,
        });
        props.importSuccess();
      }
        else{
          props.rejectdata(response.data.reject_data);
          ErrorAlert({ title: "Import File", message: `${response.data.reject_data.length} Data Rejected ` });
        }
      } else {
      ErrorAlert({ title: "Import File", message: response.msg });
    }

};


return (
  <React.Fragment>
  <div className="add-user-container">
    <div className="componet-sub-title flex-col flex-space-bt">
      <span>
      
      {`Bulk ${ComponentName} Upload`}
      </span>
      <div className="option-btn">
      <button onClick={sampleCSVFile}>
      {`Download Sample file`}
    </button>
    </div>
    </div>

    {(uploadPercentage!=0)&&<Progress percentage={uploadPercentage} />}

    <form className="flex-col" onSubmit={bulkUpload}>
      <div className="input-lable-v-div">
        <label htmlFor="file">Select File</label>
        <input className="file-upload-input"
        type="file"
        onChange={onChange}
        id="file"
        />
      </div>

      <div className="input-lable-h-div">
        <button className="submit-btn" type="submit">
         {`Upload`}
        </button>
      </div>

      {uploadedFile ? (
        <div>
          <div>
            <h3>{uploadedFile.fileName}</h3>
            <img style={{ width: "100%" }} src={uploadedFile.filePath} alt="" />
          </div>
        </div>
      ) : null}
    </form>
  </div>
 
</React.Fragment>

  )
};

export default BulkUpload