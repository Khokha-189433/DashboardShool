import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useLocation } from "react-router-dom";
import axios from "axios";
import HeaderList from "../header&list/HeaderList";
import { url } from "../../config";

let teacher_photo = null;

const EditTeacher = () => {
  const [image, setImage] = useState(null);
  const [Name, setName] = useState("");
  const data = useLocation().state.teacher;

  useEffect(() => {
    if (data) {
      console.log(data);
      setImage(url + "/" + data.photo);
      setName(data.name);
    }
  }, []);

  ////////Title Teacher /////////
  const handleTitleChange = (event) => {
    setName(event.target.value);
  };
  //////// End Title Teacher /////////

  ////////ImageUpload Teacher /////////

  const handleImageUpload = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
      teacher_photo = event.target.files[0];
    }
  };
  //////// END ImageUpload Teacher /////////

  //////// Submit  /////////
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(); //نقوم بإنشاء كائن FormData  =>لاحتواء اسم المستخدم وصورة المستخدم.
    formData.append("name", Name);
    formData.append("photo", teacher_photo);
    try {
      const request = await axios.put(
        `${url}/teacher/${data.teacher_id}`,
        formData,
        {
          headers: {
            authorization: sessionStorage.getItem("token"),
          },
        }
      );
      window.history.back();
    } catch (error) {
      console.log(error.request);
    }
  }
  //////// Submit  /////////

  return (
    <>
      <HeaderList />
      <div className="Card-Add-User">
        <Card sx={{ minWidth: 200 }}>
          <Typography color="text.secondary" className="Typography-name">
            Edit Info Teacher
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
                Edit
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default EditTeacher;
