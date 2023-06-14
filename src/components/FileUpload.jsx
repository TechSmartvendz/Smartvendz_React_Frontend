import React, { Fragment, useState } from "react";
import Message from "./Message";
import Progress from "./Progress";
import axios from "axios";

const FileUpload = () => {
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose File");
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState("");
  const [uploadPercentage, setUploadPercentage] = useState(0);

  var urlz = "http://localhost:3000/productcsv/SVZBLR0099";
  var token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzgwNTBjYzg3ZDFiZjQwMmU3N2M1YzAiLCJpYXQiOjE2NjkzNTM2NzZ9.VNIOp891lpJXIzp0SZm8U503yS4W5VQmtt1fn1xrQ8g"; // function download(response) {

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    console.log(formData);
    formData.append("image", file);

    try {
      const res = await axios.post(
        "http://localhost:3000/productFileUpload/SVZBLR0099",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",

            Authorization: `Bearer ${token}`,
          },
          onUploadProgress: (progressEvent) => {
            setUploadPercentage(
              parseInt(
                Math.round((progressEvent.loaded * 100) / progressEvent.total)
              )
            );
          }
        }
      );

      // Clear percentage
      setTimeout(() => setUploadPercentage(0), 10000);

      const { fileName, filePath } = res.data;

      setUploadedFile({ fileName, filePath });

      if (res.data.dataupload == "success") {
        console.log(res.data.dataupload);
        setMessage("File Uploaded");
      } else {
        console.log(res.data.reject_data);
        setMessage("Error in uploading");
      }
    } catch (err) {
      if (err.response.status === 500) {
        setMessage("There was a problem with the server");
      } else {
        setMessage(err.response.data.msg);
      }
      setUploadPercentage(0);
    }
  };

  return (
    <Fragment>
      {message ? <Message msg={message} /> : null}
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="file"
            onChange={onChange}
            id="customFile"
            htmlFor="customFile"
          />
          <label>{filename}</label>
        </div>

        <Progress percentage={uploadPercentage} />

        <input type="submit" value="Upload" />
      </form>
      {uploadedFile ? (
        <div>
          <div>
            <h3>{uploadedFile.fileName}</h3>
            <img style={{ width: "100%" }} src={uploadedFile.filePath} alt="" />
          </div>
        </div>
      ) : null}
    </Fragment>
  );
};

export default FileUpload;
