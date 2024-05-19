import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import axios from "axios";
import HeaderList from "../header&list/HeaderList";
/////////////////////////////
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
///////SELECT ////////////
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

let Course_photo = null;
const AddCourse = () => {
  const url = "http://127.0.0.1:3010";
  const [imags, setImages] = useState(null);
  const [NameC, setNameC] = useState("");
  const [SelectedClass, SetSelectedClass] = useState("");
  const [SelectedTeacher, SetSelectedTeacher] = useState("");

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
    SetSelectedClass(event.target.value);
  };
  const handleChangeTeacher = (event) => {
    SetSelectedTeacher(event.target.value);
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(); //نقوم بإنشاء كائن FormData  =>لاحتواء اسم المستخدم وصورة المستخدم.
    formData.append("name", NameC);
    formData.append("photo", Course_photo);

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
                Add pictures teacher
              </label>

              <label>
                <TextField
                  id="standard-textarea"
                  label="Course Name"
                  multiline
                  variant="standard"
                  value={NameC}
                  onChange={handleTitleChange}
                  helperText={
                    NameC.length < 3 ? "Most be more than 3 char" : ""
                  }
                  required
                />
              </label>
              <label>
                <input
                  type="Number"
                  placeholder="Price"
                  style={{ padding: "12px" }}
                ></input>
              </label>
              <label>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-small-label">class</InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={SelectedClass}
                    label="Selected"
                    onChange={handleChangeClass}
                  >
                    {ClassData.map((classItem) => (
                      <MenuItem key={classItem.id} value={classItem.id}>
                        {classItem.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </label>
              <label>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-small-label">Teacher</InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={SelectedTeacher}
                    label="Selected"
                    onChange={handleChangeTeacher}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </label>
              <label>
                <textarea
                  id="standard-textarea"
                  label="About Course"
                  variant="standard"
                  // value={NameC}
                  // onChange={handleTitleChange}
                  style={{ height: "100px", width: "200px" }}
                />
              </label>

              {imags && (
                <div className="user-info">
                  <img src={imags} alt="photoTeacher" />
                  <h3>{NameC}</h3>
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
