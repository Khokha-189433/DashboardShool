import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import axios from "axios";
import { url } from "../../../config.js";
import HeaderList from "../../header&list/HeaderList.js";
import { useLocation } from "react-router-dom";

const EditLectuer = () => {
  const { course_id, unit_id, lecture } = useLocation().state;
  const { lecture_id, lecture_number, title, lecture_desc } = lecture;

  const [LectureTitle, setLectureTitle] = useState(title);
  const [LectureNumber, setLectureNumber] = useState(lecture_number);
  const [LectureDescription, setLectureDescription] = useState(lecture_desc);

  const handleEditTitleLectureChange = (event) => {
    setLectureTitle(event.target.value);
  };
  const handleEditLecturEdescChange = (event) => {
    setLectureDescription(event.target.value);
  };
  const handleEditNumberLectureChange = (event) => {
    setLectureNumber(event.target.value);
  };

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(); //نقوم بإنشاء كائن FormData  =>لاحتواء اسم المستخدم وصورة المستخدم.
    formData.append("title", LectureTitle);
    formData.append("lecture_number", LectureNumber);
    formData.append("lecture_desc", LectureDescription);

    try {
      const request = await axios.put(
        `${url}/course/${course_id}/unit/${unit_id}/lecture/${lecture_id}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: sessionStorage.getItem("Token"),
          },
        }
      );
      console.log(request.data);
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
                  placeholder="Title Lecture"
                  value={LectureTitle}
                  onChange={handleEditTitleLectureChange}
                  required
                  style={{ padding: "20px", fontSize: "20px" }}
                />
              </label>
              <label>
                <input
                  type="number"
                  placeholder=" Lecture Number"
                  value={LectureNumber}
                  onChange={handleEditNumberLectureChange}
                  required
                  style={{ padding: "20px", fontSize: "20px" }}
                />
              </label>
              <label>
                <textarea
                  placeholder="Lectur-Edescr"
                  value={LectureDescription}
                  onChange={handleEditLecturEdescChange}
                  required
                  style={{ padding: "20px", fontSize: "20px", width: "28rem" }}
                />
              </label>
              {LectureTitle && (
                <div className="user-info">
                  <h3>{LectureTitle}</h3>
                  <h3>{LectureNumber}</h3>
                  <h3>{LectureDescription}</h3>
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

export default EditLectuer;
