import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import axios from "axios";
import { url } from "../../../App.js";
import HeaderList from "../../header&list/HeaderList.js";
import { useLocation } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";

const AddLecture = () => {
   const Course_id = useLocation().state.course_id;
   const unit_id = useLocation().state.unit_id;
   console.log(unit_id);
    console.log(Course_id);

   const [TitleLecture, setTitleLecture] = useState('');
   const [LectureNumber, setLectureNumber] = useState('');
   const [LecturEdesc, setLecturEdes] = useState('');



   const handleTitleLectureChange = (event) => {
    setTitleLecture(event.target.value);
   };
   const handleLecturEdescChange = (event) => {
    setLecturEdes(event.target.value);
   };
    const handleNumberLectureChange = (event) => {
      setLectureNumber(event.target.value);
    };

   async function handleSubmit(event) {
     event.preventDefault();

     const formData = new FormData(); //نقوم بإنشاء كائن FormData  =>لاحتواء اسم المستخدم وصورة المستخدم.
     formData.append("title", TitleLecture);
     formData.append("lecture_number", LectureNumber);
     formData.append("lecture_desc", LecturEdesc);

     try {
       const request = await axios.post(
         `${url}/course/${Course_id}/unit/${unit_id}/Lecture`,
         formData,
         {
           headers: {
             "Content-Type": "application/json",
             authorization: sessionStorage.getItem("Token"),
           },
         }
       );
       console.log(request.data)
       
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
            Add Info Unit
          </Typography>
          <CardContent>
            <form onSubmit={handleSubmit} className="Form-add-user">
              <label>
                <input
                  placeholder="Lecture Title"
                  value={TitleLecture}
                  onChange={handleTitleLectureChange}
                  required
                  style={{ padding: "20px", fontSize: "20px" }}
                />
              </label>
              <label>
                <input
                  type="number"
                  placeholder=" Lecture Number"
                  value={LectureNumber}
                  onChange={handleNumberLectureChange}
                  required
                  style={{ padding: "20px", fontSize: "20px" }}
                />
              </label>
              <label>
                <textarea
                  placeholder="Lecture Description"
                  value={LecturEdesc}
                  onChange={handleLecturEdescChange}
                  required
                  style={{ padding: "20px", fontSize: "20px", width: "28rem" }}
                />
              </label>
              {TitleLecture && (
                <div className="user-info">
                  <h3>{TitleLecture}</h3>
                  <h3>{LectureNumber}</h3>
                  <h3>{LecturEdesc}</h3>
                </div>
              )}
              <Button
                type="submit"
                color="secondary"
                className="ButtonAdd-teacher"
                endIcon={<SendIcon />}
              >
                Add
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default AddLecture;
