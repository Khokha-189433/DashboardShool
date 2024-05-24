import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import axios from "axios";
import HeaderList from "../../header&list/HeaderList.js";
/////////////////////////////
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
///////SELECT ////////////
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { url } from "../../../App.js";

let Course_photo = null;
const AddCourse = () => {
  const [imags, setImages] = useState(null);
  const [NameC, setNameC] = useState("");
  const [SelectedClass, SetSelectedClass] = useState("");
  const [SelectedTeacher, SetSelectedTeacher] = useState("");
  const [PriceCourse, SetPriceCourse] = useState("");
  const [AboutTheCourse, SetAboutTheCourse] = useState("");
  const [ClassData, setClassData] = useState([]);
  const [TeacherData, setTeacherData] = useState([]);

  useEffect(() => {
    const fetchClassData = async () => {
      const response = await axios.get(`${url}/class`, {
        headers: {
          authorization: sessionStorage.getItem("Token"),
        },
      });
      const jsonData = response.data;
      setClassData(jsonData.data); // لتغيير القيمة
      console.log(jsonData);
    };
    fetchClassData().catch((error) => {
      console.log(error);
    });
  }, []);

  useEffect(() => {
    const fetchTeacherData = async () => {
      const response = await axios.get(`${url}/teacher`, {
        headers: {
          authorization: sessionStorage.getItem("Token"),
        },
      });
      console.log(response.data);
      const jsonData = response.data;
      setTeacherData(jsonData.data); // لتغيير القيمة
    };
    fetchTeacherData().catch((error) => {
      console.log(error);
    });
  }, []);

  const handleTitleChange = (event) => {
    setNameC(event.target.value);
  };
  const handleImageUpload = (event) => {
    if (event.target.files && event.target.files[0]) {
      //    شرط اذا كان العنصر يلي بدي دخله من نوع File صورة
      setImages(URL.createObjectURL(event.target.files[0]));
      Course_photo = event.target.files[0];
    }
  };

  const handleChangeClass = (event) => {
    console.log(event.target.value);
    SetSelectedClass(event.target.value);
  };
  const handleChangeTeacher = (event) => {
    SetSelectedTeacher(event.target.value);
  };

  const handleChangePrice = (event) => {
    SetPriceCourse(event.target.value);
  };

  const handleChangeAboutTheCourse = (event) => {
    SetAboutTheCourse(event.target.value);
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(); //نقوم بإنشاء كائن FormData  =>لاحتواء اسم المستخدم وصورة المستخدم.
    formData.append("title", NameC);
    formData.append("photo", Course_photo);
    formData.append("teacher_id", SelectedTeacher);
    formData.append("class_id", SelectedClass);
    formData.append("about_the_course", AboutTheCourse);
    formData.append("course_fee", PriceCourse);
    try {
      const request = await axios.post(`${url}/course`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          authorization: sessionStorage.getItem("Token"),
        },
      });
      window.history.back();
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
                  label="Course Name"
                  style={{
                    height: "100px",
                    width: "450px",
                    fontSize: "20px",
                  }}
                  multiline
                  variant="standard"
                  value={NameC}
                  onChange={handleTitleChange}
                  required
                />
              </label>
              <label>
                <input
                  type="Number"
                  placeholder="Price"
                  style={{ padding: "12px" }}
                  value={PriceCourse}
                  onChange={handleChangePrice}
                ></input>
              </label>
              <label>
                <FormControl sx={{ m: 3, minWidth: 500 }} size="small">
                  <InputLabel id="demo-select-small-label">class</InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={SelectedClass}
                    label="Selected"
                    onChange={handleChangeClass}
                    required
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {ClassData.map((classItem) => (
                      <MenuItem
                        key={classItem.class_id}
                        value={classItem.class_id}
                      >
                        {classItem.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </label>
              <label>
                <FormControl sx={{ m: 3, minWidth: 500 }} size="small">
                  <InputLabel id="demo-select-small-label">Teacher</InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={SelectedTeacher}
                    label="Selected"
                    onChange={handleChangeTeacher}
                    required
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {TeacherData.map((teacherItem) => (
                      <MenuItem
                        key={teacherItem.teacher_id}
                        value={teacherItem.teacher_id}
                      >
                        {teacherItem.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </label>
              <label>
                <textarea
                  id="standard-textarea"
                  label="About Course"
                  variant="standard"
                  style={{
                    height: "200px",
                    width: "500px",
                    padding: "15px",
                    fontSize: "20px",
                  }}
                  value={AboutTheCourse}
                  onChange={handleChangeAboutTheCourse}
                />
              </label>

              {imags && (
                <div className="user-info">
                  <img src={imags} alt="photoTeacher" />
                </div>
              )}
              <Button
                type="submit"
                color="secondary"
                className="ButtonAdd-teacher"
                endIcon={<SendIcon />}
              >
                SEND
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default AddCourse;
