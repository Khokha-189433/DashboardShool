import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import axios from "axios";
import HeaderList from "../header&list/HeaderList";
import {url} from "../../App.js";



let teacher_photo = null;
const DataTeacher = () => {
  const [image, setImage] = useState(null);
  const [Name, setName] = useState("");

  const handleTitleChange = (event) => {
    setName(event.target.value);
  };
  const handleImageUpload = (event) => {
    if (event.target.files && event.target.files[0]) {
      //    شرط اذا كان العنصر يلي بدي دخله من نوع File صورة
      setImage(URL.createObjectURL(event.target.files[0]));
      teacher_photo = event.target.files[0];
    }
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(); //نقوم بإنشاء كائن FormData  =>لاحتواء اسم المستخدم وصورة المستخدم.
    formData.append("name", Name);
    formData.append("photo", teacher_photo);

    try {
      const request = await axios.post(`${url}/teacher`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          authorization: sessionStorage.getItem("Token"),
        },
      });
      window.history.back(); 
       const jsonData = await request.json();
       console.log(jsonData);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <HeaderList />
      <div className="Card-Add-User">
        <Card sx={{ minWidth: 200 }}>
          <Typography color="text.secondary" className="Typography-name">
            Add Info Teacher
          </Typography>
          <CardContent>
            <form onSubmit={handleSubmit} className="Form-add-user">
              <label className="add-Photo">
                <input
                  type="file"
                  id="image"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="addPhoto"
                  required
                />
                {<CloudUploadIcon />}
                pictures
              </label>

              <label>
                <TextField
                  id="standard-textarea"
                  label="Teacher Name"
                  multiline
                  variant="standard"
                  value={Name}
                  onChange={handleTitleChange}
                  helperText={Name.length < 3 ? "Most be more than 3 char" : ""}
                  required
                />
              </label>
              {image && (
                <div className="user-info">
                  <img src={image} alt="photoTeacher" />
                  <h3>{Name}</h3>
                </div>
              )}
              <Button
                type="submit"
                color="secondary"
                className="ButtonAdd-teacher"
              >
                إضافة
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default DataTeacher;

